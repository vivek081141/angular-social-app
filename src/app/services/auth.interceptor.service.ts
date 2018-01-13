import { Injectable,Injector } from '@angular/core';
import {HttpInterceptor} from "@angular/common/http";
import {AuthService} from "./auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

  constructor(private injector : Injector){}

  intercept(req,next){
    var authService= this.injector.get(AuthService);
    var authRequest = req.clone({
      headers: req.headers.set('Authorization','token '+authService.getToken())
    });

    console.log(authRequest);
    return next.handle(authRequest);
  }



}
