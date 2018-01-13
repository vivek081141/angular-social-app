import { Component, OnInit } from '@angular/core';
import {ApiService} from "../services/api.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: []
})

export class UsersComponent implements OnInit {

  constructor(private apiService:ApiService) { }

  ngOnInit(){
    console.log(this.apiService);
    this.apiService.getUsers();
  }
}
