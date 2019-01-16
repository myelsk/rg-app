import {Component, Input, OnInit} from '@angular/core';
import {TaskService} from "../task.service";
import {AuthService} from "../auth.service";
import {Task} from "../models/Task";
import {NgForm} from "@angular/forms";
import {Observable} from "rxjs/index";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  tasks: Task[];
  @Input() project_id: number;

  constructor(private taskService: TaskService, private authService: AuthService) { }
  postTask(form: NgForm) {
    this.taskService.post('/api/task/' + this.project_id + '?token=' + this.authService.getToken(), {
      name: form.value.name,
      deadline: new Date(form.value.deadline).getTime(),
      isDone: false,
      project_id: this.project_id
    }).subscribe(
        (res) => this.tasks.push(res[0])
    );
  }


  getTasks():Observable<any> {
    return this.taskService.get('/api/tasks/' + this.project_id + '?token=' + this.authService.getToken());
  }

  putProject() {
    this.taskService.put('/api/project/1', {id: 1, name: 'updated with Angular'}).subscribe();
  }

  deleteTask(task: Task) {
    this.taskService.delete('/api/task/' + task.id + '?token=' + this.authService.getToken()).subscribe(
        res => {
          let index = this.tasks.indexOf(task);
          if(index > -1) {
            this.tasks.splice(index, 1);
          }

        }
    );
  }

  getCurrentTimestamp() {
    return new Date().getTime();
  }

  increasePriority(task) {
    let index = this.tasks.indexOf(task);
    if(index > -1) {
      [this.tasks[index], this.tasks[index - 1]] = [this.tasks[index - 1], this.tasks[index]];
    }
    // [this.tasks[0], this.tasks[1]] = [this.tasks[1], this.tasks[0]];
  }

  decreasePriority() {

  }

  ngOnInit() {
    this.getTasks().subscribe(res => this.tasks = res.tasks);
    //  this.getTasks().subscribe(res => this.tasks = res.tasks);
  }

}
