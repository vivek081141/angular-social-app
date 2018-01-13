import { Component } from '@angular/core';
import {ApiService} from "./services/api.service";
import {AuthService} from "./services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';

  constructor(private authService:AuthService){

  }
   

}
