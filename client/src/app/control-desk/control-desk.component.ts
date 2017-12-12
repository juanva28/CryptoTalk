import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-control-desk',
  templateUrl: './control-desk.component.html',
  styleUrls: ['./control-desk.component.css']
})
export class ControlDeskComponent implements OnInit {

  constructor(private dataSource : DataService) { }

  ngOnInit() {
      this.updateValues()
      setInterval(() => {
        this.updateValues()
      }, 1000 * 60*10);
  }

  google: number;
  ethereum: number;
  difference: number;
  sentiment: number

  updateValues(){
    this.dataSource.getData("speculationDataControler")
    .subscribe(data => {
      this.google = Math.round(((((data[0].googleValue)-(data[1].googleValue))/data[1].googleValue)*100)*10)/10;
      this.ethereum = Math.round(((((data[0].ethereumValue)-(data[1].ethereumValue))/data[1].ethereumValue)*100)*10)/10;
      this.difference = Math.round((this.google-this.ethereum)*10)/10;
    });
    this.dataSource.getData("sentimentData")
      .subscribe(data => {
        this.sentiment = data.minutes60[0]-data.minutes60[1]
      })
  }
}
