import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {

  timespan: string = '1';
  constructor(private dataSource: DataService) {

  }


  ngOnInit() {
    this.barChartUpdate();
    setInterval(() => {
      this.barChartUpdate()
    }, 1000 * 35);
  }

  barChartUpdate() {

    this.dataSource.getData("sentimentData")
      .subscribe(data => {
        var range;
        var range1;
        switch (this.timespan) {
          case '1':
            range = data.minutes1[0];
            range1 = data.minutes1[1];
            break;
          case '5':
            range = data.minutes5[0];
            range1 = data.minutes5[1];
            break;
          case '15':
            range = data.minutes15[0];
            range1 = data.minutes15[1];
            break;
          case '30':
          console.log('ENTRAAAAA')
            range = data.minutes30[0];
            range1 = data.minutes30[1];
            break;
          case '60':
            range = data.minutes60[0];
            range1 = data.minutes60[1];
            break;
            default:
            break
        }
        this.barChartData = [
          { data: [Math.round(range)], label: "Buy Sentiment" },
          { data: [Math.round(range1)], label: "Sell Sentiment" }
        ]
      })
  }


  barChartData: Array<any>;

  barChartOptions: any = {
    scales: {
      xAxes: [{ ticks: { min: 0, max: 100, } },]
    },
    scaleShowVerticalLines: false,
    responsive: true
  };

  barChartLabels: string[] = ['buy', 'sell']


  barChartType: string = 'bar';
  barChartLegend: boolean = true;


  // events
  chartClicked(e: any): void {
    console.log(e);
  }

  chartHovered(e: any): void {
    console.log(e);
  }
}
