import {Component, OnInit} from '@angular/core';
import {ProjectService} from "./project.service";
import {AuthService} from "./auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'frontend';
  projects: any;


  constructor(private projectService: ProjectService, private authService: AuthService) {}

//.subscribe(res => {this.projects = res})
  getProjects() {
    this.projectService.get('http://localhost:8085/api/projects').subscribe(res => {console.log(res)});
  }

  postProject() {
    this.projectService.post('http://localhost:8085/api/project?token=' + this.authService.getToken(), {name: "project created with Angularrr"}).subscribe();
  }

  putProject() {
    this.projectService.put('http://localhost:8085/api/project/1', {id: 1, name: 'updated with Angular'}).subscribe();
  }

  deleteProject() {
    this.projectService.delete('http://localhost:8085/api/project/1').subscribe();
  }


  ngOnInit() {
    // this.getProjects();
    this.postProject();
    // this.putProject();
    // this.deleteProject();
  }

}
