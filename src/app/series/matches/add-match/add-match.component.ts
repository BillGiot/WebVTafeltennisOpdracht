import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { SerieService } from '../../serie.service';
import { Match } from '../match.model';
import { AuthenticationService } from '../../../user/authentication.service';
import { Serie } from '../../serie.model';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl} from '@angular/forms';


@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css'],
})
export class AddMatchComponent implements OnInit {
  @Input() public serie: Serie;
  @Output() public matchAdded = new EventEmitter<Match>();
 public match: FormGroup;

 private errorMsg = '';

  constructor(private route: ActivatedRoute, private dataService: SerieService,
    authService: AuthenticationService,  private fb: FormBuilder) { }

  ngOnInit() {
      this.match = this.fb.group({
      date: ['', [Validators.required]],
      playerA: ['', [Validators.required]],
      playerB: ['', [Validators.required]],
      setsPlayerA: ['', [Validators.required]],
      setsPlayerB: ['', [Validators.required]],
    });
  }


  onSubmit() {
    const newMatch = new Match(this.match.value.date, this.match.value.playerA,
      this.match.value.playerB, this.match.value.setsPlayerA, this.match.value.setsPlayerB);

      console.log(this.match.value.date, this.match.value.playerA,
        this.match.value.playerB, this.match.value.setsPlayerA, this.match.value.setsPlayerB);
        console.log(this.serie);


    this.dataService.addMatch(newMatch, this.serie).subscribe(item => {
      this.matchAdded.emit(newMatch);
      this.match.get('playerA').setValue('');
      this.match.get('playerB').setValue('');
      this.match.get('setsPlayerA').setValue('');
      this.match.get('setsPlayerB').setValue('');
      this.errorMsg = '';
    }, err => this.errorMsg = err.json().message);
}


}
