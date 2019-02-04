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
    editing: boolean = false;
    editValue: string;
    editId: number;
    createMode: boolean = false;
    projectName: string;

    constructor(private projectService: ProjectService, private authService: AuthService, private router: Router) {
    }

    getProjects() {
        return this.projectService.get('/api/projects/' + this.authService.getId() + '?token=' + this.authService.getToken());
    }

    onCreateMode() {
        this.createMode = true;
    }

    onCancelCreateMode() {
        this.createMode = false;
    }

    postProject() {
        this.projectService.post('/api/project?token=' + this.authService.getToken(), {
            name: this.projectName,
            user_id: this.authService.getId()
        }).subscribe(
            res => {
                this.projects.push(res[0]);
                this.createMode = false;
                this.projectName = '';
            }
        );
    }

    putProject(project) {
        this.projectService.put('/api/project/' + project.id + '?token=' + this.authService.getToken(), {name: this.editValue}).subscribe(
            (project: Project) => {
                const index = this.projects.map(project => project.id).indexOf(project.id);
                this.projects[index].name = this.editValue;
            }
        );
        this.editing = false;
    }


    deleteProject(project) {
        this.projectService.destroy('/api/project/' + project.id + '?token=' + this.authService.getToken()).subscribe(
            res => {
                let index = this.projects.indexOf(project);
                if (index > -1) {
                    this.projects.splice(index, 1);
                }
            }
        );
    }

    onCancelEditing() {
        this.editValue = '';
        this.editing = false;
    }

    onEdit(project) {
        this.editing = true;
        this.editValue = project.name;
        this.editId = this.projects.map(project => project.id).indexOf(project.id);
    }

    ngOnInit() {
        this.getProjects().subscribe(
            data => {
                this.projects = data.projects;
            },
            err => {
                if (err.status === 401) {
                    this.router.navigate(['signin']);
                }
            }
        );
    }
}
