import { Component, OnInit } from '@angular/core';
import {TaskService} from "../task.service";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }

}
