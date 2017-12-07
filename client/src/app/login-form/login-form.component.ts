import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent{



  constructor(private auth:AuthService) { }
  signup(username, password){
    this.auth.signup(username,password).subscribe();
  }

  login(username, password){
    this.auth.login(username,password).subscribe();
  }

  logout() {
    this.auth.logout().subscribe();
  }

    ngOnInit() { }

    public lineChartData: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Tweet Volume' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Ether Volume' }
  ];;

    public lineChartLabels: Array<any> = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    public lineChartOptions: any = {
      scaleShowVerticalLines: false,
      responsive: true
    };
    public lineChartColors: Array<any> = [
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
    public lineChartLegend: boolean = true;
    public lineChartType: string = 'line';


    // events
    public chartClicked(e: any): void {
      console.log(e);
    }

    public chartHovered(e: any): void {
      console.log(e);
    }


};
