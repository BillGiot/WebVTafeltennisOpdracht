import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthenticationService } from '../user/authentication.service';
import { BlogService } from './blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BlogComponent implements OnInit {
  private user;
  private _posts;

  constructor(private autservice: AuthenticationService, private dataService: BlogService) { }

  ngOnInit() {
    this.dataService.posts().subscribe(items => {
      this._posts = items;
    });
  }

  get posts(){
    return this._posts;
  }

  addPost(post) {
    this._posts.push(post);
  }

}
