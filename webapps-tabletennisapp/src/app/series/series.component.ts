import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Serie } from './serie.model';
import { NewsDataService } from '../tabletennis-data.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SeriesComponent implements OnInit {
  public serie: Serie;
  private _series: Serie[];
  constructor(private dataService: NewsDataService) { }

  ngOnInit() {
    this.dataService.series().subscribe(items => {
      this._series = items;
    });
  }

  changeSerie(serie) {
    this.serie = serie;
  }

  get series() {
    return this._series;
  }

}
