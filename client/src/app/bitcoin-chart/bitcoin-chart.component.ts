import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-bitcoin-chart',
  templateUrl: './bitcoin-chart.component.html',
  styleUrls: ['./bitcoin-chart.component.css']
})
export class BitcoinChartComponent implements OnInit {


  constructor(private dataSource: DataService) {

  }


  ngOnInit() {
    this.barChartUpdate();
    setInterval(() => {
      this.barChartUpdate()
    }, 1000 * 60 * 15);
  }

  barChartUpdate() {

    this.dataSource.getData("bitcoinData")
      .subscribe(data => {
        switch (this.charttype) {
          case '1':
            this.barChartData = [
              { data: data.map(e => e.ethPrice), label: "Ethereum", yAxisID: 'yAxis1'},
              { data: data.map(e => e.btcPrice), label: "Bitcoin", yAxisID: 'yAxis2'}
            ]
            this.barChartType = 'line';
            this.barChartLabels = data.map(e => e.time);
            break;
          case '2':
        console.log(data);
          this.barChartData = [
            { data: data.map(e => e.ethereumChange), label: "Ethereum"},
            { data: data.map(e => e.bitcoinChange), label: "Bitcoin"}
          ]
          this.barChartType = 'bar';
          this.barChartLabels = data.map(e => e.time);
          console.log(this.barChartData);
            console.log(this.barChartLabels)
            break;

            default:
            break
        }
      })
    }

      barChartData: Array<any>;
      barChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true
      };
      barChartLabels: Array<string>;
      barChartLegend: boolean = true;
      chartClicked(e: any): void { console.log(e);}
      chartHovered(e: any): void { console.log(e);}
      charttype: string = '2';
      barChartType: string;

    }
