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


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    DatamodelComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartsModule
  ],
  providers: [AuthService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
