import { ServerUrl } from "./auth.service";
import { UserObj } from "./user";
import { HttpParams } from "@angular/common/http";
import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';


@Injectable()
export class UserService {
  
  headers: Headers;
  
  constructor (private _http:Http){}

  getUsers() {
    let url = "http://localhost:8080/api/user/all";
    return this._http.get(url, { withCredentials: true });
  }
  getDoctors() {
    let url = "http://localhost:8080/api/user/doctor/all";
    return this._http.get(url, { withCredentials: true });
  }
  
  getPatients(username: string) {
    let url = "http://localhost:8080/api/user/patient/"+username;
    return this._http.get(url, { withCredentials: true });
  }
  
  getDoctor(username: string) {
    let url = "http://localhost:8080/api/user/doctor/"+username;
    return this._http.get(url, { withCredentials: true });
  }
  
  getUser(username: string) {
    let url = "http://localhost:8080/api/user/"+username;
    return this._http.get(url, { withCredentials: true });
  }
  
  getUserRole(username: string) {
    let url = ServerUrl + "/api/user/role/"+username;
    return this._http.get(url, { withCredentials: true }); 
  }
  
//  checkCredential(username: string, password: string) {
//    let url = ServerUrl + "/api/user/credentials/"+username;
//    return this._http.post(url, password, { withCredentials: true });
//  }
  
//  updateUser(me: UserObj) {
//    
//    let headers = new Headers(
//    {
////      'Content-Type': 'application/x-www-form-urlencoded'
//      'Content-Type': 'application/json'
//      // 'Access-Control-Allow-Credentials' : true
//    });
////    this.headers = new Headers();
////    this.headers.set('Content-Type', 'application/json');
////    this.headers.set('withCredentials', true);
////    let params = 'firstName='+me.firstName+'&lastName='+me.lastName;
////    let params = new HttpParams;
////    params.set('firstName', me.firstName);
////    params.set('lastName', me.lastName);
//    let url = "http://localhost:8080/api/user/"+me.username;
////    let params = 'firstName='+me.firstName+'&lastName='+lastName;
//    
//    return this._http.post(url, me, {headers: headers, withCredentials : true});
//    return this._http.post(url, params, { withCredentials: true});
//  }

   enableUser (username: string) {
     let url = "http://localhost:8080/api/user/"+username+"/enable";
     return this._http.get(url, { withCredentials: true });
   }

   disableUser (username: string) {
     let url = "http://localhost:8080/api/user/"+username+"/disable";
     return this._http.get(url, { withCredentials: true });
   }
 
  

}
