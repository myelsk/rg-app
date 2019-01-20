import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {environment} from "../environments/environment";
import {Task} from "./models/Task";

@Injectable({
    providedIn: 'root'
})
export class TaskService {

    isDone: boolean = false;

    constructor(private httpClient: HttpClient) {
    }

    public get(url: string): Observable<any> {
        return this.httpClient.get(environment.api_server + url);
    }

    public post(url: string, task) {
        return this.httpClient.post(environment.api_server + url, task, {headers: new HttpHeaders({'X-Requested-With': 'XMLHttpRequest'})});
    }

    public put(url: string, task) {
        return this.httpClient.put(environment.api_server + url, task);
    }

    public destroy(url: string) {
        return this.httpClient.delete(environment.api_server + url);
    }

    public completeToggle(url: string, task) {
        this.isDone = !this.isDone;
        task.isDone = this.isDone;
        return this.httpClient.put(environment.api_server + url, task);
    }
}

// {
//     id: task.id,
//         // name: task.name,
//         // project_id: task.project_id,
//         // deadline: task.deadline,
//         // priority: task.priority,
//         isDone: this.isDone
// }
