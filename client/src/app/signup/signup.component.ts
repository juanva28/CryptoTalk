import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import { RouterModule, Routes } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  username: string;
  email: string;
  password: string;



  constructor(private auth:AuthService, private route: ActivatedRoute, private router: Router) { }


  signup(){
    this.auth.signup(this.username,this.password,this.email).subscribe();
    this.router.navigateByUrl('/login');
  }


  ngOnInit() {}

}
