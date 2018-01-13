import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {ApiService} from "./services/api.service";
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule,MatCheckboxModule,MatCardModule,MatToolbarModule,} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';

import { MessageComponent } from './component/message.component';
import { RegisterComponent } from './component/register.component'
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {FormsModule} from "@angular/forms";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './component/login.component';
import { AuthService } from './services/auth.service';
import { UsersComponent } from './component/users.component';
import { ProfileComponent } from './component/profile.component';
import { PostsComponent } from './component/posts.component';
import { AuthInterceptor } from './services/auth.interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


const ROUTES =[
  {path: '',component:PostsComponent},
  {path: 'register',component:RegisterComponent},
  {path: 'login',component:LoginComponent},
  {path: 'users',component:UsersComponent},
  {path: 'profile/:id',component:ProfileComponent}


];

const INTERCEPTOR ={
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true
};

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    RegisterComponent,
    LoginComponent,
    UsersComponent,
    ProfileComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,MatListModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ApiService, AuthService, AuthInterceptor,INTERCEPTOR],
  bootstrap: [AppComponent]
})
export class AppModule { }
