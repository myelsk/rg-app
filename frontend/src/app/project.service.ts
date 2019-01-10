import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  public get(url: string):Observable<any> {
    return this.httpClient.get(url);
  }

  public post(url: string, project) { //project: Project
    const token = this.authService.getToken();
    return this.httpClient.post(url, project);
  }

  public put(url: string, project) {
    return this.httpClient.put(url, project);
  }

  public delete(url) {
    return this.httpClient.delete(url);
  }
  // updateUser(id: number, user: User) {
  //   const urlParams = new HttpParams().set("id", id.toString());
  //   return this.http.put(this.url, user, { params: urlParams});
  // }
  // deleteUser(id: number) {
  //   const urlParams = new HttpParams().set("id", id.toString());
  //   return this.http.delete(this.url, {params: urlParams});
  // }
}
