import { Component, OnInit } from '@angular/core';
import {TaskService} from "../task.service";
import {AuthService} from "../auth.service";
import {Task} from "../models/Task";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  tasks: Task[];

  constructor(private taskService: TaskService, private authService: AuthService) { }

  getTasks() {
    this.taskService.get('/api/tasks?token=' + this.authService.getToken()).subscribe(
        data => this.tasks = data.tasks
    );
  }

  postProject() {
    this.taskService.post('/api/project?token=' + this.authService.getToken(), {name: "project created with Angularrr", user_id: 1}).subscribe();
  }

  putProject() {
    this.taskService.put('/api/project/1', {id: 1, name: 'updated with Angular'}).subscribe();
  }

  deleteProject() {
    this.taskService.delete('/api/project/1').subscribe();
  }

  ngOnInit() {
  }

}
