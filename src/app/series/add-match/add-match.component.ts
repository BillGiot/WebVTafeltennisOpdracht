import { Component, OnInit, Output } from '@angular/core';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css'],
})
export class AddMatchComponent implements OnInit {

  @Output() private _match;
  constructor(private dataService: SerieService) { }

  ngOnInit() {
  }

}
