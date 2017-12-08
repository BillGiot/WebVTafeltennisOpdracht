import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { SerieService } from '../../series/serie.service';
import { ActivatedRoute } from '@angular/router';
import { Serie } from '../serie.model';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MatchesComponent implements OnInit {
  @Input() public serie: Serie;
  private _matches = [];

  constructor(private route: ActivatedRoute, private dataService: SerieService) {}

  ngOnInit() {
  }

  get matches(){
    return this.serie.matches;
  }

  addMatch(match) {
    this.serie.matches.push(match);

  }

}
