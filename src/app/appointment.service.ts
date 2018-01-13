import { AppointmentObj } from "./appointment/appointment";
import { ServerUrl } from "./auth.service";
import { UserObj } from "./user";
import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';


@Injectable()
export class AppointmentService {

  constructor (private _http:Http){}

  getAppointmentList() {
    let url = "http://localhost:8080/api/appointment/all";
    return this._http.get(url, { withCredentials: true });
  }

  confirmAppointment(id: number) {
    let url = "http://localhost:8080/api/appointment/"+id+"/confirm";
    return this._http.get(url, { withCredentials: true });
  }
  
  getDoctorAppointments(username: string) {
    let url = "http://localhost:8080/api/appointment/"+username;
    return this._http.get(url, { withCredentials: true });
  }
  
  getUserAppointments(id: number) {
    let url = "http://localhost:8080/api/appointment/me/"+id;
    return this._http.get(url, { withCredentials: true });
  }
  
  createAppointment(dateString: string, username: string) {
    let url = ServerUrl+"/api/appointment/new/"+username+"/"+dateString;
    return this._http.post(url, dateString, { withCredentials: true });
  }
  
  updateDescription(id: number, description: string) {
    let url = ServerUrl+"/api/appointment/description/"+id+"/"+description;
    return this._http.post(url, description, {withCredentials: true });
  }
  
}

