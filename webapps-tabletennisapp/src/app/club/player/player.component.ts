import { Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PlayerComponent implements OnInit {

  // bar chart
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: String[] = ['Jan', 'Feb', 'Mrt', 'Apr', 'Mei', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'];
  public barChartType: String = 'bar';
  public barChartLegend: Boolean = true;

  public barChartData: any[] = [
    { data: [65, 59, 80, 81, 56, 55, 40, 76, 68, 45, 67, 23], label: 'Aantal Tussenstops' }
  ];


   // lineChart
   public lineChartData: Array<any> = [
    {data: [6219, 4321, 5139, 4678, 3214, 6786, 6987, 7100, 5678, 4578, 5432, 7243], label: 'Vloot 1'},
    {data: [1021, 800, 1246, 987, 2986, 3424, 2876, 2154, 1567, 1432, 999, 812], label: 'Vloot 2'},
    {data: [247, 167, 289, 346, 154, 123, 60, 210, 243, 282, 290, 215], label: 'Vloot 3'},
    {data: [10009, 9865, 8654, 7043, 5423, 8943, 7456, 9432, 9999, 11001, 10075, 11565], label: 'Vloot 4'},
    {data: [2064, 1017, 1896, 2017, 2018, 2226, 1809, 2018, 1999, 2001, 1997, 2002], label: 'Vloot 5'},
  ];
  public lineChartLabels: Array<any> = ['Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni', 'Juli','Augustus', 
  'September', 'Oktober', 'November', 'December' ];
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartColors: Array<any> = [
    { // red color for vloot 1
      backgroundColor: 'rgba(191,22,13,0.2)',
      borderColor: 'rgba(255,0,0,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // green
      backgroundColor: 'rgba(77,165,102,0.2)',
      borderColor: 'rgba(18,88,38,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // yellow
      backgroundColor: 'rgba(246,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // blue
      backgroundColor: 'rgba(122,147,241,0.2)',
      borderColor: 'rgba(45,83,255,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // purple
      backgroundColor: 'rgba(241,122,231,0.2)',
      borderColor: 'rgba(181,54,170,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];

  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';

   // Doughnut
   public doughnutChartLabels: String[] = ['Diesel', 'Bio-diesel', 'CNG', 'LNG', 'Waterstofgas', 'Electriciteit'];
   public doughnutChartData: number[] = [43, 13, 13, 6, 4 , 21];
   public doughnutChartType: String = 'doughnut';

  constructor() { }


  ngOnInit() {

  }



}
