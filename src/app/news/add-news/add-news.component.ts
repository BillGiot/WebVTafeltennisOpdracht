import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NewsItem } from '../newsitem.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NewsDataService } from '../news-data.service';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css'],

})
export class AddNewsComponent implements OnInit {
  private newsItem: FormGroup;
@Output() private newsAdded = new EventEmitter<NewsItem >();


  constructor(private dataService: NewsDataService, private fb: FormBuilder) { }

  ngOnInit() {
    this.newsItem = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      text: ['', [Validators.required, Validators.minLength(20)]]
    });

  }

  onSubmit() {
    const title = this.newsItem.value.title;
    const text = this.newsItem.value.text;
    const description = this.newsItem.value.description;

    const newItem = new NewsItem('', title, description, text);
    this.dataService.addNewsItem(newItem).subscribe(item => {
      this.newsAdded.emit(item);
    });
  }

}
