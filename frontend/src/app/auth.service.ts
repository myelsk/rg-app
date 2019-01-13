import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {Observable} from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()

export class AuthService {

    constructor(private http: HttpClient) {}


    signup(username: string, email: string, password: string) {

        return this.http.post('http://localhost:8085/api/user', {
            name: username,
            email: email,
            password: password
        }, {headers: new HttpHeaders({'X-Requested-With': 'XMLHttpRequest'})});
    }


    signin(email: string, password: string) {
        return this.http.post('http://localhost:8085/api/user/signin', {
            email: email,
            password: password
        }, {headers: new HttpHeaders({'X-Requested-With': 'XMLHttpRequest'})}).pipe(
            tap(
                (res:any) => localStorage.setItem('token', res.token),
            ),
            tap(
                (res:any) => localStorage.setItem('user_id', res.user_id)
            )
        );
    }


    logout() {
        localStorage.clear();
    }


    getToken() {
        return localStorage.getItem('token');
    }

    getId() {
        return localStorage.getItem('user_id');
    }


}
