import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import { Serie } from './serie.model';

@Injectable()
export class SerieService {
  private _appUrl = '/API/';

    constructor(private http: Http) { }


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
}
