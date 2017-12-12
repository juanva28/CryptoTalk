import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-datamodel',
  templateUrl: './datamodel.component.html',
  styleUrls: ['./datamodel.component.css']
})
export class DatamodelComponent implements OnInit {


  constructor(private dataSource : DataService) {}

  ngOnInit() {
    this.dataSource.getData("speculationData")
    .subscribe(data => {
      this.lineChartLabels = data.map(e => e.hour).reverse();
      this.lineChartData = [
        { data: data.map(e => Math.round(e.googleValue)), label: "googleValue", yAxisID: 'yAxis2'},
        { data: data.map(e => Math.round(e.ethereumValue)), label: "ethereumValue", yAxisID: 'yAxis1'}
      ]

    })
  }

  lineChartData: Array<any>;


  lineChartLabels: Array<any>;

  lineChartOptions: any = {
    scales: {
        yAxes: [
            {
                id: 'yAxis1',
                position: 'left'
            },
            {
                id: 'yAxis2',
                position: 'right',
                // ticks: {
                //     max : 100,
                //     min: 50,
                //     },
                scaleShowHorizontalLines: false,
            }
        ]
    },
    scaleShowVerticalLines: false,
    responsive: true
  };

  lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(177,219,246,0.2)',
      borderColor: '#2aa3ef',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
  ];
  lineChartLegend: boolean = true;
  lineChartType: string = 'line';

   chartClicked(e: any): void {
    console.log(e);
  }

  chartHovered(e: any): void {
    console.log(e);
  }


}
