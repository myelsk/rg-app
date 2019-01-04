import {Component, OnInit} from '@angular/core';
import {ProjectService} from "./project.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'frontend';
  projects: any;


  constructor(private projectService: ProjectService) {}

//.subscribe(res => {this.projects = res})
  getData() {
    console.log("started");
    this.projectService.get('http://localhost:8085/api/projects').subscribe(res => {console.log(res)});
  }


  ngOnInit() {
    this.getData();
    console.log(this.projects);
  }

}
