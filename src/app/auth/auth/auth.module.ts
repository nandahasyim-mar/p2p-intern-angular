import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from '../components/home/home.component';


@NgModule({
  declarations: [
  LoginComponent,
  RegisterComponent,
  HomeComponent
  ],
  imports: [
  CommonModule,
  FormsModule,
  HttpClientModule
  ],
  exports : [
  LoginComponent,
  RegisterComponent,
  HomeComponent
  ]
  })
  export class AuthModule { }
