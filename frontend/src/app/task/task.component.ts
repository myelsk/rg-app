import {Component, Input, OnInit} from '@angular/core';
import {TaskService} from "../task.service";
import {AuthService} from "../auth.service";
import {Task} from "../models/Task";
import {map} from "rxjs/internal/operators";
import {NgForm} from "@angular/forms";
import {Observable} from "rxjs/index";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  tasks: Task[];
  @Input() project_id;

  constructor(private taskService: TaskService, private authService: AuthService) { }

  postTask(form: NgForm) {
    this.taskService.post('/api/task/' + this.project_id + '?token=' + this.authService.getToken(), {
      name: form.value.name,
      deadline: new Date(form.value.deadline).getTime(),
      isDone: false,
      project_id: this.project_id
    }).subscribe();
  }



  getTasks():Observable<any> {
    return this.taskService.get('/api/tasks/' + this.project_id + '?token=' + this.authService.getToken());
  }

  putProject() {
    this.taskService.put('/api/project/1', {id: 1, name: 'updated with Angular'}).subscribe();
  }

  deleteTask(id) {
    this.taskService.delete('/api/task/' + id + '?token=' + this.authService.getToken()).subscribe();
  }


  // ngOnInit(): void {
  //   this.intervalHolder = setInterval(() => {
  //     // Let's refresh the list.
  //     this._changeDetectorRef.markForCheck();
  //   }, 1000 * 60); // 1 minute
  // }

  ngOnInit() {
    this.getTasks().subscribe(res => this.tasks = res.tasks);
    // this.tasks = this.getTasks();
  }

}
