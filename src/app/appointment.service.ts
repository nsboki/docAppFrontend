import { AppointmentObj } from "./appointment/appointment";
import { ServerUrl } from "./auth.service";
import { UserObj } from "./user";
import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';



@Injectable()
export class AppointmentService {

  constructor (private _http:Http){}

  getAppointmentList() {
    let url = ServerUrl + "/api/appointment/all";
    return this._http.get(url, { withCredentials: true });
  }

  confirmAppointment(id: number) {
    let url = ServerUrl + "/appointment/"+id+"/confirm";
    return this._http.get(url, { withCredentials: true });
  }
  
  getDoctorAppointments(username: string) {
    let url = ServerUrl + "/api/appointment/"+username;
    return this._http.get(url, { withCredentials: true });
  }
  
  getUserAppointments(id: number) {
    let url = ServerUrl + "/api/appointment/me/"+id;
    return this._http.get(url, { withCredentials: true });
  }
  
  createAppointment(dateString: string, username: string) {
    let url = ServerUrl+"/api/appointment/new/"+username+"/"+dateString;
    return this._http.post(url, dateString, { withCredentials: true });
  }
  
  updateDescription(id: number, description: string) {
    let url = ServerUrl+"/api/appointment/description/"+id;
    return this._http.post(url, description, {withCredentials: true });
  }
  
  deleteAppointment(id: number) {
    let url = ServerUrl+"/api/appointment/delete/"+id;
    return this._http.delete(url, { withCredentials: true });
  }
  
  getActiveAppointment(username: string) {
    let url = ServerUrl + "/api/appointment/active/"+username;
    return this._http.get(url, { withCredentials: true });
  }
  
}

