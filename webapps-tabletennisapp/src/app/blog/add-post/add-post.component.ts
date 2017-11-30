import { Component, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from '../../user/authentication.service';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import {Post} from '../post.model';
import { BlogService } from '../blog.service';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  public post: FormGroup;
  private errorMsg = '';
  @Output() public postAdded = new EventEmitter<Post>();
  constructor(private dataService: BlogService, private authService: AuthenticationService, private fb: FormBuilder ) { }

  ngOnInit() {
    this.post = this.fb.group({
      text: ['', [Validators.required, Validators.minLength(20)]]
    });
  }

  get currentUser(): Observable<String> {
    return this.authService.user$;
  }
    onSubmit() {
      const currentDate = new Date();
      const currentUser = this.authService.user$.value;
      const text =  this.post.value.text;

      const newPost =   new Post(currentDate, currentUser, text);
      this.dataService.addPost(newPost).subscribe(item => {
        this.postAdded.emit(item);
        this.post.get('text').setValue('');
        this.errorMsg = '';
      }, err => this.errorMsg = err.json().message);
  }
}
