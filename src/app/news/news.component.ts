import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NewsItem } from './newsitem.model';
import { NewsDataService } from './news-data.service';
import { AuthenticationService } from '../user/authentication.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NewsComponent implements OnInit {

  private _newsItems: NewsItem[];

  constructor(private dataService: NewsDataService,  private authService: AuthenticationService) { }

  ngOnInit() {
    this.dataService.newsItems().subscribe(items => {
      console.log(items);
      this._newsItems = items;
    });
  }

  get newsItems() {
    return this._newsItems;

  }

  scroll(el) {
    el.scrollIntoView();
}

addNewsItem(news) {
  this._newsItems.push(news);
}

removeItem(newsitem: NewsItem) {
  this.dataService.removeItem(newsitem).subscribe( item => {
    this._newsItems = this._newsItems.filter(val => val.id !== item.id);
  });

}
isRegistered() {
  if (this.authService.user$.getValue()) {
    return true;
  }
}
}
