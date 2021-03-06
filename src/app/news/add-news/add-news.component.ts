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
    const description = this.newsItem.value.description;
    const text = this.newsItem.value.text;
    const newItem = new NewsItem(title, description, text);
    this.dataService.addNewsItem(newItem).subscribe(item => {
      this.newsAdded.emit(item);
      this.clearFormText();
    });
  }

  clearFormText() {
    this.newsItem.get('description').setValue('');
    this.newsItem.get('title').setValue('');
    this.newsItem.get('text').setValue('');
  }

}
