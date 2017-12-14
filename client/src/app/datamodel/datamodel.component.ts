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
    { //green
      backgroundColor: 'rgba(51,205,148,0.1)',
      borderColor: '#33cd94',
      pointBackgroundColor: 'rgba(51,205,148,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#33cd94',
      pointHoverBorderColor: 'rgba(51,205,148,0.8)'
    },
    { //purple
      backgroundColor: 'rgba(97,77,163,0.2)',
      borderColor: '#6550b2',
      pointBackgroundColor: 'rgba(97,67,163,1)',
      pointBorderColor: '#6550b2',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(97,67,163,1)'
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
