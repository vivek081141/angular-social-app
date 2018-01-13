import { Component, OnInit } from '@angular/core';
import {ApiService} from "../services/api.service";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styles: []
})
export class PostsComponent implements OnInit {
  postMsg='';

  constructor(private apiService:ApiService,private authService:AuthService) { }

  ngOnInit(){
  }

  post(){
    console.log(this.postMsg);
    this.apiService.postMessage({post:this.postMsg});
  }
  
}
