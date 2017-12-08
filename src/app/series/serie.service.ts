import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Headers } from '@angular/http';
import { Serie } from './serie.model';
import { AuthenticationService } from '../user/authentication.service';
import { Match } from './matches/match.model';

@Injectable()
export class SerieService {
  private _appUrl = '/API/';
    constructor(private http: Http, private auth: AuthenticationService) { }


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

  addSerie(rec): Observable<Serie> {
  return this.http.post(`${this._appUrl}series`, rec,
  { headers: new Headers({Authorization: `Bearer ${this.auth.token}`}) })
    .map(res => res.json()).map(item => Serie.fromJSON(item));
  }

  addMatch(match: Match, serie: Serie): Observable<Match> {
    return this.http.post(`${this._appUrl}series/${serie.id}/matches`, match)
      .map(res => res.json()).map(item => Match.fromJSON(item));
  }
}
