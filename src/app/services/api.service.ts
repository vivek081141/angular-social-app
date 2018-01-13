import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class ApiService {
  url:string ='http://localhost:3000';

  messages=[];
  users=[];
  profile={};
  
  constructor(private http:HttpClient) { }

  public getMessages(userId){
    console.log("getMessages::" +userId);

    this.http.get<any>(this.url+'/posts/'+userId).subscribe(res=>{
      console.log("get post response" +res);
      this.messages=res;
    })
  }

  public postMessage(message){
    this.http.post(this.url+'/posts',message).subscribe(res=>{
      console.log(res);
    })
  }

  

  public getUsers(){
    this.http.get<any>(this.url+'/users').subscribe(res=>{
      console.log(res);
      this.users=res;
    })
  }
 
  public getProfile(id){
    this.http.get<any>(this.url+'/profile/'+id).subscribe(res=>{
      console.log(res);
      this.profile=res;
    })
  }
}
