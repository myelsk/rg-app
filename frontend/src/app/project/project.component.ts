import {Component, OnInit} from '@angular/core';
import {ProjectService} from "../project.service";
import {AuthService} from "../auth.service";
import {Project} from "../models/Project";
import {Router} from "@angular/router";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  projects: Project[];
  disabled: boolean;

  constructor(private projectService: ProjectService, private authService: AuthService, private router: Router) {
      router.navigate(['signin']);
  }

  getProjects() {
    return this.projectService.get('/api/projects/' + this.authService.getId() + '?token=' + this.authService.getToken());
  }

  postProject() {
    this.projectService.post('/api/project?token=' + this.authService.getToken(), {name: "project created with Angularrr", user_id: 1}).subscribe(
        res => this.projects.push(res[0])
    );
  }

  putProject() {
    this.projectService.put('/api/project/1', {id: 1, name: 'updated with Angular'}).subscribe();
  }

  deleteProject(project) {
    this.projectService.destroy('/api/project/' + project.id + '?token=' + this.authService.getToken()).subscribe(
        res => {
          let index = this.projects.indexOf(project);
          if(index > -1) {
            this.projects.splice(index, 1);
          }
        }
    );
  }

  ngOnInit() {
    this.getProjects().subscribe(
        data => {
          this.projects = data.projects
          console.log(data);
        }
    );
  }
}
