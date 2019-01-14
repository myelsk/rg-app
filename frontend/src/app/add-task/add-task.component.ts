import {Component, Input, OnInit} from '@angular/core';
import {TaskService} from "../task.service";
import {AuthService} from "../auth.service";
import {NgForm} from "@angular/forms";
import {Task} from "../models/Task";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {


  tasks: Task[];
  @Input() project_id;

  constructor(private taskService: TaskService, private authService: AuthService) { }

  postTask(form: NgForm) {
    this.taskService.post('/api/task/' + this.project_id + '?token=' + this.authService.getToken(), {
      name: form.value.name,
      deadline: new Date(form.value.deadline).getTime(),
      isDone: false,
      project_id: this.project_id
    }).subscribe(response => console.log(response), error => console.log(error));
  }

  getTasks() {
    this.taskService.get('/api/tasks/' + this.project_id + '?token=' + this.authService.getToken()).subscribe(
        res => this.tasks = res.tasks
    );
  }

  test(form: NgForm) {
    console.log({
      name: form.value.name,
      deadline: new Date(form.value.deadline).getTime(),
      isDone: false,
      project_id: this.project_id
    });
  }

  ngOnInit() {
  }

}
