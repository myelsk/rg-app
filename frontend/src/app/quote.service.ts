import {Injectable} from "@angular/core";
import 'rxjs/Rx';
import {HttpClientModule, HttpResponse} from "@angular/common/http";

@Injectable()

export class QuoteService {
    constructor(private http: HttpClientModule) {

    }

    getQuotes() {
        return this.http.get('http://localhost/api/quotes')
            .map(
                (response: HttpResponse) => {
                    return response.json().quotes;
                }
            );
    }
}