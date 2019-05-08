This is a simple todo application <br>
You able to:

- create/update/delete projects;
- create/update/delete tasks in your project;
- prioritize tasks in your project;
- pick deadline for your task;
- mark task as done;

Stack of technologies:

WebServer - [nginx](http://nginx.org/) <br>
Proccess Manager - [FPM](http://php.net/manual/en/install.fpm.php) <br>
Backend (api) - [Laravel Framework 5.7.19](https://laravel.com/) <br>
Database - [Mysql v5.7](https://www.mysql.com/) <br>
Frontend - [Angular CLI: 7.1.4](https://angular.io/) <br>
As local and production environment - [docker](https://www.docker.com/) and [docker-compose](https://docs.docker.com/compose/) <br>
For JWT Auth was used [jwt-auth](https://github.com/tymondesigns/jwt-auth)


Deployed on [DigitalOcean](https://www.digitalocean.com/) and can be reached here http://159.65.42.68:8085 (not maintaining at the moment) <br>

In order to deploy this application locally you need on your local machine [docker](https://docs.docker.com/install/linux/docker-ce/ubuntu/) and [docker-compose](https://docs.docker.com/compose/install/) <br>
To deploy this project on your local machine you want to:

1. ```git clone https://github.com/myelsk/rg-app.git```
2. ```cd rg-app/includes```
3. ```cp node_modules.tar.gz ../frontend/ && cd ../frontend/ && sudo tar -xvzf node_modules.tar.gz && sudo rm -rf node_modules.tar.gz```
4. ```cd ../includes/ && cp vendor.tar.gz ../api/ && cd ../api/ && sudo tar -xvzf vendor.tar.gz && sudo rm -rf vendor.tar.gz```
5. Create ```.env``` file in root of ```api``` folder by example ```.env.example``` Make sure that you configured your ```.env``` file right for connect to db
6. ```chmod -R 777 storage```
7. In root directory of the project ```docker-compose up -d```
8. ```cd frontend && ng build```
9. ```docker exec -it fpm bash``` Once you are in container. You need to migrate ```php artisan migrate```
After successful migration exit from container by typing ```exit``` and type ```docker-compose restart```
10. After you've done all of these steps you should be able to reach the application by hitting in your browser http://localhost:8085

If after these steps you still facing some issues please contact me kovalenko.yevhenii@gmail.com

SQL task

get all statuses, not repeating, alphabetically ordered

```
SELECT DISTINCT status 
FROM tasks 
ORDER BY status;
```

get the count of all tasks in each project, order by tasks count descending

```
SELECT COUNT(*) AS amount, projects.name 
FROM tasks 
INNER JOIN projects ON project_id = projects.id 
GROUP BY projects.name 
ORDER BY amount DESC;
```

get the count of all tasks in each project, order by projects names

```
SELECT COUNT(*) AS amount, projects.name 
FROM tasks 
INNER JOIN projects ON project_id = projects.id 
GROUP BY projects.name 
ORDER BY projects.name ASC;
```

get the tasks for all projects having the name beginning with “N” letter

```
SELECT tasks.id, tasks.name, tasks.status 
FROM tasks,projects 
WHERE tasks.project_id=projects.id 
AND projects.name LIKE 'N%';
```

get the list of all projects containing the ‘a’ letter in the middle of the name, and show the tasks count near each project. Mention that there can exist projects without tasks and tasks with project_id=NULL

```
SELECT projects.name, 
(SELECT COUNT(*) FROM tasks WHERE tasks.project_id=projects.id)
FROM projects WHERE projects.name LIKE '%a%';
```

get the list of tasks with duplicate names. Order alphabetically
```
SELECT tasks.name AS name, COUNT(tasks.name)
FROM tasks
GROUP BY tasks.name
HAVING COUNT(tasks.name) > 1
ORDER BY name ASC;
```
get the list of tasks having several exact matches of both name and status, from the project ‘Garage’. Order by matches count
```
SELECT tasks.name AS task_name, COUNT(tasks.name) AS task_count
FROM tasks
LEFT JOIN projects ON projects.id = tasks.project_id
WHERE projects.name LIKE '%Garage'
GROUP BY tasks.name HAVING COUNT(tasks.name) > 1
ORDER BY task_count;
```
get the list of project names having more than 10 tasks in status ‘completed’. Order by project_id

```
SELECT projects.name AS projects_name, 
COUNT(tasks.id) AS task_count 
FROM projects 
LEFT JOIN tasks ON projects.id = tasks.project_id 
WHERE tasks.status='completed' 
GROUP BY projects_name 
HAVING COUNT(tasks.id) > 10;
```
