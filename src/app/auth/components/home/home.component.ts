import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../../services/api.service'
import { AuthService } from './../../../services/auth.service'
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLogin: boolean = false

  constructor(
    private _api: ApiService,
    private _auth: AuthService,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  onGet() {
    this._api.getTypeRequest('/amounts').subscribe((res: any) => {
      if (res) {
        console.log(res)
      } 
    }, err => {
      console.log(err)
    })
  }

  isUserLogin(){
    if(this._auth.getUserDetails() != null){
      this.isLogin = true;
    }
  }
}
