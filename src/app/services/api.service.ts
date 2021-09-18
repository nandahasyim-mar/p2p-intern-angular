import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) { 

  }

  getTypeRequest(url: string) {
    return this._http.get(`http://localhost:3000/${url}`).pipe(map(res => {
      return res;
    }));
  }

  postTypeRequest(url:string, payload: any) {
    console.log(url, payload)
    return this._http.post(`http://localhost:3001/${url}`, payload).pipe(map(res => {
      console.log(res, 'cek res')
      return res;
    }))
  }
}
