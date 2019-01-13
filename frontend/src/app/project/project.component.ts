import {Component, OnInit} from '@angular/core';
import {ProjectService} from "../project.service";
import {AuthService} from "../auth.service";
import {Project} from "../models/Project";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  projects: Project[];
  disabled: boolean = true;

  constructor(private projectService: ProjectService, private authService: AuthService) {}


//.subscribe(res => {this.projects = res})
  getProjects() {
    this.projectService.get('/api/projects/' + this.authService.getId() + '?token=' + this.authService.getToken()).subscribe(
        data => this.projects = data.projects
    );
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
    // console.log('app initialized');
    this.getProjects();
    // this.putProject();
    // this.deleteProject();
    // this.projects = this.route.snapshot.data.projects;
    // console.log(this.projects);
  }
}
