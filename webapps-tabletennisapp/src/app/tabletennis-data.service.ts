import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { NewsItem } from './news/newsitem.model';
import { Serie } from './series/serie.model';

@Injectable()
export class NewsDataService {
  private _appUrl = 'http://localhost:4200/API/';

  constructor(private http: Http) { }

  newsItems(): Observable<NewsItem[]> {
    return this.http.get(this._appUrl + 'news').map(response =>
      response.json().map(item => {
        return new NewsItem(item._id, item.title, item.description, item.text);
      }
      )
    );
  }

  newsItem(id): Observable<NewsItem> {
    return this.http.get(`${this._appUrl}news/${id}`)
      .map(response => response.json()).map(item => {
       return NewsItem.fromJSON(item);
      }
    );
  }

   series(): Observable<Serie[]> {
    return this.http.get(`${this._appUrl}series/`).map(response => response.json().map(item => Serie.fromJSON(item)));
  }

  serie(id): Observable<Serie> {
    return this.http.get(`${this._appUrl}series/${id}`)
      .map(response => response.json()).map(item => {
       return Serie.fromJSON(item);
      }
    );
  }

 /* addBlog(): Observable<Blog> {
    
  }*/
  /*get clubs(): Observable<Club[]> {
    return this.http.get(`${this._appUrl}clubs/`).map(response => response.json().map(item => Club.fromJSON(item)));
  }

  club(id): Observable<Club> {
    return this.http.get(`${this._appUrl}clubs/${id}`)
      .map(response => response.json()).map(item => {
       return Club.fromJSON(item);
      }
    );
  }*/

}
