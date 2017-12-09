import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-datamodel',
  templateUrl: './datamodel.component.html',
  styleUrls: ['./datamodel.component.css']
})
export class DatamodelComponent implements OnInit {


  constructor(private dataSource : DataService) {

  }

  ngOnInit() {
    this.dataSource.getData("speculationData")
    .subscribe(data => {
      this.lineChartLabels = data.map(e => e.hour);
      this.lineChartData = [{ data: data.map(e => Math.round(e.googleValue)), label: "googleValue"}]
      console.log(this.lineChartLabels);
    })
  }

  lineChartData: Array<any>;


  lineChartLabels: Array<any>;
  lineChartOptions: any = {
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
