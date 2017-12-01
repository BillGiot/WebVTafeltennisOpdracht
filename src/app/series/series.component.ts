import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Serie } from './serie.model';
import { SerieService } from '../series/serie.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SeriesComponent implements OnInit {
  public serie: Serie;
  private _series: Serie[];
  constructor(private dataService: SerieService) { }

  ngOnInit() {
    this.dataService.series().subscribe(items => {
      this._series = items;
      this.serie = items[0];
    });
  }

  changeSerie(serie) {
    this.serie = serie;
  }

  get series() {
    return this._series;
  }

}
