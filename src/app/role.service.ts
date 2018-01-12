import { ServerUrl } from "./auth.service";
import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class RoleService {

  constructor(private _http: Http) { }
  
  getRole(userId: number){
    let url = ServerUrl + '/api/role/{userId}';
    return this._http.get(url, { withCredentials: true});
  }

}
