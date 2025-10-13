# Use the official PHP image with Apache
FROM php:8.3-apache

# Install required PHP extensions and system dependencies
RUN apt-get update && apt-get install -y \
    git unzip libpng-dev libonig-dev libxml2-dev zip curl nodejs npm \
    && docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd

# Enable Apache mod_rewrite
RUN a2enmod rewrite

# Copy project files
COPY . /var/www/html

# Set working directory
WORKDIR /var/www/html

# Install Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# Install PHP dependencies
RUN composer install --no-dev --optimize-autoloader

# Install Node dependencies and build React
RUN npm install && npm run build

# Set proper permissions
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

# Expose port 8080 for Render
EXPOSE 8080

# Start Laravel server using Apache
CMD ["apache2-foreground"]
