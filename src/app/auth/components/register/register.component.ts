import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../../services/api.service'
import { AuthService } from './../../../services/auth.service'
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  isLogin: boolean = false

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

    this._api.postTypeRequest('register', form.value).subscribe((res: any) => {
      console.log(res, 'res')
      if (res) {
        console.log(res, 'ini di register component')
        this._router.navigate(['login']);
      } else {
        console.log(res)
        alert(res.msg)
      }
    }, err => {
      console.log(err)
    });
  }

  isUserLogin(){
    if(this._auth.getUserDetails() != null){
      this.isLogin = true;
    }
  }
}
