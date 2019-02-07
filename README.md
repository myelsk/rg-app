Stack of technologies:

WebServer - [nginx](http://nginx.org/) <br>
Proccess Manager - [FPM](http://php.net/manual/en/install.fpm.php) <br>
Backend (api) - [Laravel Framework 5.7.19](https://laravel.com/) <br>
Database - [Mysql v5.7](https://www.mysql.com/) <br>
Frontend - [Angular CLI: 7.1.4](https://angular.io/) <br>
As local and production environment - [docker](https://www.docker.com/) and [docker-compose](https://docs.docker.com/compose/) <br>
Deployed on [Digitalocean](https://www.digitalocean.com/) and can be reached here <br>


To deploy this project on your local machine you want to:

1. ```cd includes```
2. ```cp node_modules.tar.gz ../frontend/ && cd ../frontend/ && tar -xvzf node_modules.tar.gz && sudo rm -rf node_modules.tar.gz```
3. ```cp vendor.tar.gz ../api/ && cd ../api/ && tar -xvzf vendor.tar.gz && sudo rm -rf vendor.tar.gz```
4. Install [docker](https://docs.docker.com/install/linux/docker-ce/ubuntu/) and [docker-compose](https://docs.docker.com/compose/install/) on your local machine in case if you dont have these.
5. From the root of the project type this command ```docker-compose up -d``` flag -d for detached mode. This command will fetch all required dependencies from [dockerhub](https://hub.docker.com/) or from cache in case if you did installed these dependencies earlier
6. After you've done all af these steps you should be able to reach the application by hitting in your browser http://localhost:8085

SQL TASK

#todo
