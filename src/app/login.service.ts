import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import { ServerUrl } from "./auth.service";

@Injectable()
export class LoginService {

  constructor (private _http: Http) {}

  sendCredential(username: string, password: string) {
    let url = ServerUrl+"/index";
    let params = 'username='+username+'&password='+password;
    let headers = new Headers(
    {
      'Content-Type': 'application/x-www-form-urlencoded'
      // 'Access-Control-Allow-Credentials' : true
    });
    return this._http.post(url, params, {headers: headers, withCredentials : true});
  }

  logout() {
     let url = ServerUrl + "/logout";
     return this._http.get(url, { withCredentials: true });
   }

}
