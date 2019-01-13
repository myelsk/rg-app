import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {environment} from "../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class TaskService {

    constructor(private httpClient: HttpClient) {
    }

    public get(url: string): Observable<any> {
        return this.httpClient.get(environment.api_server + url);
    }

    public post(url: string, task) {
        return this.httpClient.post(environment.api_server + url, task);
    }

    public put(url: string, task) {
        return this.httpClient.put(environment.api_server + url, task);
    }

    public delete(task) {
        return this.httpClient.delete(environment.api_server + task);
    }
}
