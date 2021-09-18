import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getUserDetails() {
    return JSON.parse(localStorage.getItem('access_token')!);
  }

  setDataInLocalStorage(variableName: string, data:string) {
    localStorage.setItem(variableName, data)
  }

  getToken() {
    return localStorage.getItem('token');
  }

  clearStorage() {
    localStorage.clear();
  }
}
