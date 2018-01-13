import { Component, OnInit } from '@angular/core';
import {ApiService} from "../services/api.service";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {

  registerData={}

  constructor(private authService:AuthService) { }

  post(){
    console.log(this.registerData);
    this.authService.registerUser(this.registerData);
  }
  ngOnInit() {
  }

}
