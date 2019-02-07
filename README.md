Stack of technologies:

WebServer - [nginx](http://nginx.org/) <br>
Proccess Manager - [FPM](http://php.net/manual/en/install.fpm.php) <br>
Backend (api) - [Laravel Framework 5.7.19](https://laravel.com/) <br>
Database - [Mysql v5.7](https://www.mysql.com/) <br>
Frontend - [Angular CLI: 7.1.4](https://angular.io/) <br>
As local and production environment - [docker](https://www.docker.com/) and [docker-compose](https://docs.docker.com/compose/) <br>
Deployed on [Digitalocean](https://www.digitalocean.com/) and can be reached here (Cannot for now :D) <br>


To deploy this project on your local machine you want to:

1. ```git clone https://github.com/myelsk/rg-app.git```
2. ```cd rg-app/includes```
3. ```cp node_modules.tar.gz ../frontend/ && cd ../frontend/ && tar -xvzf node_modules.tar.gz && sudo rm -rf node_modules.tar.gz```
4. ```cd ../includes/ && cp vendor.tar.gz ../api/ && cd ../api/ && tar -xvzf vendor.tar.gz && sudo rm -rf vendor.tar.gz```
5. Install [docker](https://docs.docker.com/install/linux/docker-ce/ubuntu/) and [docker-compose](https://docs.docker.com/compose/install/) on your local machine in case if you dont have these.
6. Create ```.env``` file in root of ```api``` folder by example ```.env.example```
7. ```chmod -R 777 storage```
8. ```cd .. && docker-compose up -d```
9. ```cd frontend && ng build```
10. ```docker exec -it fpm bash``` Once you are in container. You need to migrate ```php artisan migrate```
11. After you've done all af these steps you should be able to reach the application by hitting in your browser http://localhost:8085

SQL TASK

#todo
