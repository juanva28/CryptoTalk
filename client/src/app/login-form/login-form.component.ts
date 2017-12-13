import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import { RouterModule, Routes } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent{
username: string;
password: string;


  constructor(private auth:AuthService, private route: ActivatedRoute, private router: Router) { }

  login(username, password){
    this.auth.login(username,password).subscribe();
  }

  logout() {
    this.auth.logout().subscribe();
  }

    ngOnInit() { }


};
