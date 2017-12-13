import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { AuthService } from '../services/auth.service';
import { DataService } from '../services/data.service';
import { ChartsModule } from 'ng2-charts';
import { DatamodelComponent } from './datamodel/datamodel.component';
import { BarchartComponent } from './barchart/barchart.component';
import { ControlDeskComponent } from './control-desk/control-desk.component';
import { BitcoinChartComponent } from './bitcoin-chart/bitcoin-chart.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';

import {routes} from './routes';


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    DatamodelComponent,
    BarchartComponent,
    ControlDeskComponent,
    BitcoinChartComponent,
    UserProfileComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
