import { Component, OnInit } from '@angular/core';
import {ApiService} from "../services/api.service";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  loginData={}

  constructor(private authService:AuthService) { }

  post(){
    console.log(this.loginData);
    this.authService.loginUser(this.loginData);
  }
  
  ngOnInit() {
  }


}
