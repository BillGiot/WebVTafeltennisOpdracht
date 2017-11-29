import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { NewsDataService } from '../../tabletennis-data.service';
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

  constructor(private route: ActivatedRoute, private dataService: NewsDataService) {}

  ngOnInit() {
    /*this.route.paramMap.subscribe(pa =>
      this.dataService.serie(pa.get('id'))
        .subscribe(item => {
          this._serie = item;
        }));*/
  }

  /*get serie(){
    return this._serie;
  }*/
}
