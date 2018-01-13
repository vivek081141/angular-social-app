import { Component, OnInit } from '@angular/core';
import {ApiService} from "../services/api.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {

  constructor(private apiService:ApiService,private route:ActivatedRoute) { }

  ngOnInit(){
    var id=this.route.snapshot.params.id;
    console.log(this.route);
    this.apiService.getProfile(id);
  }
}
