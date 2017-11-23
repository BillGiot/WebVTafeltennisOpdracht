import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NewsItem } from './newsitem.model';
import { NewsDataService } from './news-data.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NewsComponent implements OnInit {

  private _newsItems: NewsItem[];

  constructor(private dataService: NewsDataService) { }

  ngOnInit() {
    this.dataService.newsItems().subscribe(items => {
      this._newsItems = items;
    });
  }

  get newsItems() {
    return this._newsItems;
  }

  scroll(el) {
    el.scrollIntoView();
}

}
