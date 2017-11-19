import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { NewsItem } from './newsitem/newsitem.model';

@Injectable()
export class NewsDataService {
  private  _appUrl = 'http://localhost:4200/API/';

  constructor(private http: Http) { }

  newsItems(): Observable<NewsItem[]> {
    return this.http.get(this._appUrl + 'news' ).map(response =>
      response.json().map(item => {
        console.log(item);
        return new NewsItem(item.title, item.text);
      }
      )
    );
  }

}
