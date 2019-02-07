This is a simple todo application created as test work for [RubyGarage](https://rubygarage.com.ua/)

You able to:

- create/update/delete projects;
- create/update/delete tasks in your project;
- prioritize tasks in your project;
- pick deadline for your project;
- mark task as done;

Stack of technologies:

WebServer - [nginx](http://nginx.org/) <br>
Proccess Manager - [FPM](http://php.net/manual/en/install.fpm.php) <br>
Backend (api) - [Laravel Framework 5.7.19](https://laravel.com/) <br>
Database - [Mysql v5.7](https://www.mysql.com/) <br>
Frontend - [Angular CLI: 7.1.4](https://angular.io/) <br>
As local and production environment - [docker](https://www.docker.com/) and [docker-compose](https://docs.docker.com/compose/) <br>
For JWT Auth was used [jwt-auth](https://github.com/tymondesigns/jwt-auth)


Deployed on [DigitalOcean](https://www.digitalocean.com/) and can be reached here (Cannot for now :D) <br>

In order to deploy this application locally you need on your local machine [docker](https://docs.docker.com/install/linux/docker-ce/ubuntu/) and [docker-compose](https://docs.docker.com/compose/install/) <br>
To deploy this project on your local machine you want to:

1. ```git clone https://github.com/myelsk/rg-app.git```
2. ```cd rg-app/includes```
3. ```cp node_modules.tar.gz ../frontend/ && cd ../frontend/ && tar -xvzf node_modules.tar.gz && sudo rm -rf node_modules.tar.gz```
4. ```cd ../includes/ && cp vendor.tar.gz ../api/ && cd ../api/ && tar -xvzf vendor.tar.gz && sudo rm -rf vendor.tar.gz```
5. Create ```.env``` file in root of ```api``` folder by example ```.env.example``` Make sure that you configured your ```.env``` file right for connect to db
6. ```chmod -R 777 storage```
7. In root directory of the project ```docker-compose up -d```
8. ```cd frontend && ng build```
9. ```docker exec -it fpm bash``` Once you are in container. You need to migrate ```php artisan migrate```
After successful migration exit from container by typing ```exit``` and type ```docker-compose restart```
10. After you've done all of these steps you should be able to reach the application by hitting in your browser http://localhost:8085

If after this steps you still facing some issues please contact me kovalenko.yevhenii@gmail.com

SQL TASK

#todo
