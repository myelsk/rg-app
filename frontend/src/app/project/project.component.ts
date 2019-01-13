import { Component, OnInit } from '@angular/core';
import {ProjectService} from "../project.service";
import {AuthService} from "../auth.service";
import {Project} from "../models/Project";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  project: Project;

  ngOnInit() {
  }

}
