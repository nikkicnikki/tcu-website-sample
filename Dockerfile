# Use the official PHP image with Apache
FROM php:8.3-apache

# Install required PHP extensions and system dependencies
RUN apt-get update && apt-get install -y \
    git unzip libpng-dev libonig-dev libxml2-dev zip curl nodejs npm \
    && docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Enable Apache mod_rewrite
RUN a2enmod rewrite

# Update Apache to listen on port 10000 (Render expects this)
RUN sed -i 's/80/10000/g' /etc/apache2/ports.conf /etc/apache2/sites-available/000-default.conf

# Copy project files
COPY . /var/www/html

# Set working directory 
WORKDIR /var/www/html

# Install Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# Install PHP dependencies
RUN composer install --no-dev --optimize-autoloader

# Install Node dependencies and build React
RUN npm install

# ⚠️ Important: Build only if resources exist
RUN if [ -f resources/js/app.tsx ]; then npm run build; fi

# Set proper permissions
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache /var/www/html/public/build

# Make sure Apache serves the /public folder
WORKDIR /var/www/html/public

# Expose port 10000 for Render
EXPOSE 10000

# Add MIME type for JS modules
RUN echo "AddType application/javascript .js" >> /etc/apache2/apache2.conf

# Start Apache
CMD ["apache2-foreground"]
