import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class AuthService {
  url:string ='http://localhost:3000';
  TOKEN:string ='token';


  constructor(private http:HttpClient) { }

  getToken():string{
    return localStorage.getItem(this.TOKEN);
  }

  get isAuthenticated(){
    return !!localStorage.getItem(this.TOKEN);
  }

  logOut(){
    localStorage.removeItem(this.TOKEN);
  }

  public registerUser(registerData){
    this.http.post<any>(this.url+'/register',registerData).subscribe(res=>{
      console.log(res);
      localStorage.setItem(this.TOKEN,res.token);
    })
  }

  public loginUser(loginData){
    this.http.post<any>(this.url+'/login',loginData).subscribe(res=>{
      console.log(res);
      localStorage.setItem(this.TOKEN,res.token);
    })
  }
}
