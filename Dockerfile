# ---------- Base image ----------
FROM php:8.3-apache

# ---------- Install system dependencies ----------
RUN apt-get update && apt-get install -y \
    git unzip libpng-dev libonig-dev libxml2-dev zip curl nodejs npm \
    && docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# ---------- Enable Apache modules ----------
RUN a2enmod rewrite headers

# ---------- Change Apache port for Render ----------
RUN sed -i 's/80/10000/g' /etc/apache2/ports.conf /etc/apache2/sites-available/000-default.conf
EXPOSE 10000

# ---------- Copy project files ----------
COPY . /var/www/html
WORKDIR /var/www/html

# ---------- Install PHP dependencies ----------
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer
RUN composer install --no-dev --optimize-autoloader

# ---------- Install Node dependencies & build assets ----------
RUN npm install
RUN npm run build

# Set correct permissions so Apache can read build files
RUN chown -R www-data:www-data public/build

# ---------- Laravel optimization ----------
RUN php artisan config:cache \
    && php artisan route:cache \
    && php artisan view:cache

# ---------- Set correct permissions ----------
RUN chown -R www-data:www-data storage bootstrap/cache public/build

# ---------- Ensure Apache serves JS modules correctly ----------
RUN echo "AddType application/javascript .js" >> /etc/apache2/apache2.conf

# ---------- Set working directory to public ----------
WORKDIR /var/www/html/public

# ---------- Start Apache ----------
CMD ["apache2-foreground"]
