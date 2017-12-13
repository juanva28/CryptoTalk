import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
user:object;
  constructor(private auth:AuthService) { }
  ngOnInit() {
    this.auth.isLoggedIn().subscribe(user=>{
      this.user = user;
    })
  }

  update(){
    this.auth.update(this.user)
      .subscribe(res => console.log(res));
  }

}
