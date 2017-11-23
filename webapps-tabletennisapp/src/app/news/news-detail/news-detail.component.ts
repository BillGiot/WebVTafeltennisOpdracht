import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NewsDataService } from '../../tabletennis-data.service';
import { NewsItem } from '../newsitem.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NewsDetailComponent implements OnInit {
  private _newsItem: NewsItem;
  constructor(private route: ActivatedRoute, private dataService: NewsDataService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(pa =>
      this.dataService.newsItem(pa.get('id'))
        .subscribe(item => {
          this._newsItem = item;
        }));
  }
  get newsItem() {
    return this._newsItem;
  }

}
