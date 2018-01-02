import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';


@Injectable()
export class UserService {

  constructor (private _http:Http){}

  getUsers() {
    let url = "http://localhost:8080/api/user/all";
    return this._http.get(url, { withCredentials: true });
  }

   enableUser (username: string) {
     let url = "http://localhost:8080/api/user/"+username+"/enable";
     return this._http.get(url, { withCredentials: true });
   }

   disableUser (username: string) {
     let url = "http://localhost:8080/api/user/"+username+"/disable";
     return this._http.get(url, { withCredentials: true });
   }

}
