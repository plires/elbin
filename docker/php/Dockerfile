FROM php:8.1-apache

RUN apt-get update \
    && apt-get install -y libcurl4-openssl-dev libonig-dev \
    && docker-php-ext-install pdo_mysql curl mbstring \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* \
    && a2enmod rewrite
