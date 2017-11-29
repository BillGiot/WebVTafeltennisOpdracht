import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthenticationService } from '../user/authentication.service';
import { NewsDataService } from '../tabletennis-data.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BlogComponent implements OnInit {
  private user;
  private posts;

  constructor(private autservice: AuthenticationService, private service: NewsDataService) { }

  ngOnInit() {
  }

}
