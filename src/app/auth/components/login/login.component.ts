import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { ApiService } from './../../../services/api.service'
import { AuthService } from './../../../services/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLogin: boolean = false
  // errorMessage: string
  constructor(
    private _api: ApiService,
    private _auth: AuthService,
    private _router:Router
  ) { }
  
  ngOnInit() {
    this.isUserLogin();
  }
  onSubmit(form: NgForm) {
    console.log('Your form data : ', form.value);
    this._api.postTypeRequest('login', form.value).subscribe((res: any) => {
      console.log(res, 'ini din localstrore ')
      if (res.message == "Success") {
        this._auth.setDataInLocalStorage('token', res.access_token);
        this._router.navigate(['home']);
      } else {
      }
    }, err => {
      console.log(err)
      err['error'].message;
    });
  }

  isUserLogin(){
      console.log(this._auth.getUserDetails())
      if(this._auth.getUserDetails() != null){
      this.isLogin = true;
    }
  }

  logout(){
    this._auth.clearStorage()
    this._router.navigate(['']);
  }
}