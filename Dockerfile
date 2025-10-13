# # ---------- Base image ----------
# FROM php:8.3-apache

# # ---------- System dependencies ----------
# RUN apt-get update && apt-get install -y \
#     git unzip libpng-dev libonig-dev libxml2-dev zip curl nodejs npm \
#     && docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd \
#     && apt-get clean && rm -rf /var/lib/apt/lists/*

# # ---------- Apache ----------
# RUN a2enmod rewrite headers
# RUN sed -i 's/80/10000/g' /etc/apache2/ports.conf /etc/apache2/sites-available/000-default.conf
# EXPOSE 10000

# # ---------- Copy project ----------
# COPY . /var/www/html
# WORKDIR /var/www/html

# # ---------- Composer ----------
# COPY --from=composer:2 /usr/bin/composer /usr/bin/composer
# RUN composer install --no-dev --optimize-autoloader

# # ---------- Node / Vite ----------
# RUN npm install
# RUN npm run build
# RUN chown -R www-data:www-data public/build

# # ---------- Laravel optimization ----------
# RUN php artisan config:cache \
#     && php artisan route:cache \
#     && php artisan view:cache

# # ---------- Permissions ----------
# RUN chown -R www-data:www-data storage bootstrap/cache

# # ---------- Apache JS module fix ----------
# RUN echo "AddType application/javascript .js" >> /etc/apache2/apache2.conf

# # ---------- Serve from public ----------
# WORKDIR /var/www/html/public

# # ---------- Start Apache ----------
# CMD ["apache2-foreground"]


# ---------- Base image ----------
FROM php:8.3-apache

# ---------- System dependencies ----------
RUN apt-get update && apt-get install -y \
    git unzip libpng-dev libonig-dev libxml2-dev zip curl nodejs npm \
    && docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# ---------- Apache ----------
RUN a2enmod rewrite headers
RUN sed -i 's/80/10000/g' /etc/apache2/ports.conf /etc/apache2/sites-available/000-default.conf
EXPOSE 10000

# ---------- Copy project ----------
COPY . /var/www/html
WORKDIR /var/www/html

# ---------- Composer ----------
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer
RUN composer install --no-dev --optimize-autoloader

# ---------- Node / Vite ----------
RUN npm install
RUN npm run build
RUN chown -R www-data:www-data public/build

# ---------- Laravel optimization ----------
RUN php artisan config:cache \
    && php artisan route:cache \
    && php artisan view:cache

# ---------- Permissions ----------
RUN chown -R www-data:www-data storage bootstrap/cache

# ---------- Apache virtual host ----------
RUN echo '<VirtualHost *:10000>\n\
    DocumentRoot /var/www/html/public\n\
    <Directory /var/www/html/public>\n\
        AllowOverride All\n\
        Require all granted\n\
    </Directory>\n\
</VirtualHost>' > /etc/apache2/sites-available/000-default.conf

# ---------- Apache JS module fix ----------
RUN echo "AddType application/javascript .js" >> /etc/apache2/apache2.conf

# ---------- Serve from public ----------
WORKDIR /var/www/html/public

# ---------- Start Apache ----------
CMD ["apache2-foreground"]
