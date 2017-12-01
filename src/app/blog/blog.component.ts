import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../user/authentication.service';
import { BlogService } from './blog.service';
import { Post } from './post.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  private user;
  private _posts = [];


  constructor(private autservice: AuthenticationService, private dataService: BlogService) { }

  ngOnInit() {
    this.dataService.posts().subscribe(items => {
      this._posts = items;
    });
  }

  get posts(){
    return this._posts;
  }

  isEmpty() {
    return this._posts.length === 0;
  }

  addPost(post) {
    this._posts.push(post);
  }

  isCurrentUser(username) {
      return JSON.parse(localStorage.getItem('currentUser')).username === this.autservice.user$.value;
  }

  removePost(post: Post) {
    this.dataService.removePost(post).subscribe( item => {
      this._posts = this._posts.filter(val => val.id !== item.id);
    });

  }
}
