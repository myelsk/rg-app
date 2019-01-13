import { Component, OnInit } from '@angular/core';
import {Project} from "../models/Project";
import {ProjectService} from "../project.service";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {

  project: Project;


  constructor(private projectService: ProjectService, private authService: AuthService) {}

//.subscribe(res => {this.projects = res})
  getProjects() {
    this.projectService.get('/api/projects').subscribe(res => {console.log(res)});
  }

  postProject() {
    this.projectService.post('/api/project?token=' + this.authService.getToken(), {name: "project created with Angularrr", user_id: 1}).subscribe();
  }

  putProject() {
    this.projectService.put('/api/project/1', {id: 1, name: 'updated with Angular'}).subscribe();
  }

  deleteProject() {
    this.projectService.delete('/api/project/1').subscribe();
  }


  ngOnInit() {
    // this.getProjects();
    this.postProject();
    // this.putProject();
    // this.deleteProject();
  }

}
