FROM ubuntu:20.04

WORKDIR /app

ENV DEBIAN_FRONTEND=noninteractive

COPY . .

RUN apt update && \
    apt install -y apache2 && \
    apt clean

COPY . /var/www/html


EXPOSE 80

ENTRYPOINT ["/usr/sbin/apache2ctl", "-D", "FOREGROUND"]
