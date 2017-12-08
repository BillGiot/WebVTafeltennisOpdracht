import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { NewsItem } from './newsitem.model';
import { AuthenticationService } from '../user/authentication.service';

@Injectable()
export class NewsDataService {
  private _appUrl = '/API/';

  constructor(private auth: AuthenticationService, private http: Http) { }

  newsItems(): Observable<NewsItem[]> {
    return this.http.get(this._appUrl + 'news').map(response =>
      response.json().map(item => {
        return new NewsItem(item.title, item.description, item.text, item._id);
      }
      )
    );
  }

  getNewsItemById(id): Observable<NewsItem> {
    return this.http.get(`${this._appUrl}news/${id}`)
      .map(response => response.json()).map(item => {
       return NewsItem.fromJSON(item);
      }
    );
  }

  addNewsItem(news): Observable<NewsItem> {
    return this.http.post(`${this._appUrl}news`, news,  { headers: new Headers({Authorization: `Bearer ${this.auth.token}`}) })
    .map(response => response.json())
    .map(item => NewsItem.fromJSON(item));
  }

  removeItem(news): Observable<NewsItem> {
    return this.http.delete(`${this._appUrl}news/${news.id}`,
    { headers: new Headers({Authorization: `Bearer ${this.auth.token}`}) })
    .map(res => res.json()).map(item => NewsItem.fromJSON(item));
  }

  }


