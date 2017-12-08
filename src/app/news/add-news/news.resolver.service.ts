import { NewsDataService } from '../news-data.service';
import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { NewsItem } from '../newsitem.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class NewsResolver implements Resolve<NewsItem> {
  constructor(private dataService: NewsDataService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<NewsItem> {
    return this.dataService.getNewsItemById(route.params['id']);
  }
}
