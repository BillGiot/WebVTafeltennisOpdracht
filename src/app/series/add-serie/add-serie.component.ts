import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Serie } from '../serie.model';
import { SerieService } from '../serie.service';
import { AuthenticationService } from '../../user/authentication.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-add-serie',
  templateUrl: './add-serie.component.html',
  styleUrls: ['./add-serie.component.css']
})
export class AddSerieComponent implements OnInit {

  public serie: FormGroup;
  @Output() public serieAdded = new EventEmitter<Serie>();
  constructor(private dataService: SerieService, private authService: AuthenticationService, private fb: FormBuilder ) { }

  ngOnInit() {
    this.serie = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

    onSubmit() {
      const name =  this.serie.value.name;
      const newSerie = new Serie(name);
      this.dataService.addSerie(newSerie).subscribe(item => {
        this.serieAdded.emit(item);
        this.serie.get('name').setValue('');
      });
  }

}
