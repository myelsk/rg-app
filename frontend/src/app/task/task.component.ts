import {Component, Input, OnInit} from '@angular/core';
import {TaskService} from "../task.service";
import {AuthService} from "../auth.service";
import {Task} from "../models/Task";
import {NgForm} from "@angular/forms";
import {Observable} from "rxjs/index";

@Component({
    selector: 'app-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

    isDone: boolean = false;
    tasks: Task[];
    editing: boolean = false;
    editValue: string;
    editId: number;
    @Input() project_id: number;

    constructor(private taskService: TaskService, private authService: AuthService) {
    }

    postTask(form: NgForm) {
        this.taskService.post('/api/task/' + this.project_id + '?token=' + this.authService.getToken(), {
            name: form.value.name,
            deadline: new Date(form.value.deadline).getTime(),
            isDone: false,
            project_id: this.project_id,
            priority: this.tasks === undefined ? 0 : this.tasks.length,
        }).subscribe(
            res => this.tasks.push(res[0])
        );
    }

    getTasks(): Observable<any> {
        return this.taskService.get('/api/tasks/' + this.project_id + '?token=' + this.authService.getToken());
    }

    onEdit(task) {
        this.editing = true;
        this.editValue = task.name;
        this.editId = task.priority;
    }

    putTask(task) {
        this.taskService.put('/api/task/' + task.id + "?token=" + this.authService.getToken(), {
            name: this.editValue,
            isDone: task.isDone,
        }).subscribe(
            (task: Task) => {
                this.tasks[task.priority].name = this.editValue;
            }
        );
        this.editing = false;
    }

    onCancelEditing() {
        this.editValue = '';
        this.editing = false;
    }


    deleteTask(task: Task) {
        this.taskService.destroy('/api/task/' + task.id + '/' + task.priority + '?token=' + this.authService.getToken()).subscribe(
            res => {
                let index = this.tasks.indexOf(task);
                if (index > -1) {
                    this.tasks.splice(index, 1);
                }
                console.log(res);
            }
        );
    }

    completeToggle(task: Task) {

        this.taskService.completeToggle('/api/task/' + task.id + '?token=' + this.authService.getToken(), task).subscribe();

    }

    getCurrentTimestamp() {
        return new Date().getTime();
    }

    increasePriority(task) {
        let index = this.tasks.indexOf(task);
        console.log(index);
        if (index > 0) {
            this.taskService.put('/api/task/increase/' + task.project_id + '/' + index + '?token=' + this.authService.getToken(), {priority: index - 1}).subscribe(
                (res) => console.log('priority increased ' + index)

            );
            this.taskService.put('/api/task/decrease/' + task.project_id + '/' + (index - 1) + '?token=' + this.authService.getToken(), {priority: index}).subscribe(
                (res) => console.log('priority decreased ' + (index - 1))

            );
            [this.tasks[index], this.tasks[index - 1]] = [this.tasks[index - 1], this.tasks[index]];
        }
    }

    decreasePriority(task) {
        let index = this.tasks.indexOf(task);
        if (index < this.tasks.length - 1) {
            this.taskService.put('/api/task/decrease/' + task.project_id + '/' + index + '?token=' + this.authService.getToken(), {priority: index + 1}).subscribe(
                (res) => console.log(res),
                err => console.log(err)
            );
            this.taskService.put('/api/task/increase/' + task.project_id + '/' + (index + 1) + '?token=' + this.authService.getToken(), {priority: index}).subscribe(
                (res) => console.log(res),
                err => console.log(err)
            );
            [this.tasks[index], this.tasks[index + 1]] = [this.tasks[index + 1], this.tasks[index]];
        }
    }

    ngOnInit() {
        this.getTasks().subscribe(
            res => {
                this.tasks = res.tasks.sort(function (a, b) {
                    return a.priority - b.priority;
                });
            },
            err => console.log(err)
        );
    }

}
