import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {environment} from "../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class ProjectService {

    constructor(private httpClient: HttpClient) {
    }

    public get(url: string): Observable<any> {
        return this.httpClient.get(environment.api_server + url);
    }

    public post(url: string, project) { //project: Project
        // const token = this.authService.getToken();
        return this.httpClient.post(environment.api_server + url, project);
    }

    public put(url: string, project) {
        return this.httpClient.put(environment.api_server + url, project);
    }

    public destroy(url) {
        return this.httpClient.delete(environment.api_server + url);
    }
}
