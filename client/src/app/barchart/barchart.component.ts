import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {

    timespan: number = 1;

  constructor(private dataSource : DataService) {

   }


  ngOnInit() {
    this.barChartUpdate()
  }



  barChartUpdate(){

    this.dataSource.getData("sentimentData")
    .subscribe(data => {
      console.log(this.timespan);
      // const range = data.minutes1[0];
      // const range1 = data.minutes1[1];

        this.barChartData = [
        { data:  [Math.round(data.minutes1[0])], label: "Buy Sentiment"},
        { data:[Math.round(data.minutes1[1])], label: "Sell Sentiment"}
      ]
    })
  }


  barChartData: Array<any>;

  barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

 barChartLabels:string[] = ['buy', 'sell']


  barChartType:string = 'bar';
  barChartLegend:boolean = true;


  // events
  chartClicked(e:any):void {
    console.log(e);
  }

  chartHovered(e:any):void {
    console.log(e);
  }
}
