import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent{
username: string;
email: string;
password: string;

  constructor(private auth:AuthService) { }
  signup(){
    this.auth.signup(this.username,this.password,this.email).subscribe();
  }

  login(username, password){
    this.auth.login(username,password).subscribe();
  }

  logout() {
    this.auth.logout().subscribe();
  }

    ngOnInit() { }


};
