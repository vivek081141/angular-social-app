import { Component, OnInit } from '@angular/core';
import {ApiService} from "../services/api.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styles: []
})
export class MessageComponent implements OnInit {

  constructor(private apiService:ApiService,private route:ActivatedRoute) { }
 
  ngOnInit(){
    console.log(this.apiService);
    var id=this.route.snapshot.params.id;
    this.apiService.getMessages(id);
  }
}
