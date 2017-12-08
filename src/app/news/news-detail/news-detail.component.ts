import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NewsDataService } from '../news-data.service';
import { NewsItem } from '../newsitem.model';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../user/authentication.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NewsDetailComponent implements OnInit {
  private _newsItem: NewsItem;
  constructor(private route: ActivatedRoute, private dataService: NewsDataService, private authService: AuthenticationService) { }

  ngOnInit() {
    this.route.data.subscribe(item =>
      this._newsItem = item['newsItem']);
  }
  get newsItem() {
    return this._newsItem;
  }

  editNewsItem(newsItem) {

  }
}
