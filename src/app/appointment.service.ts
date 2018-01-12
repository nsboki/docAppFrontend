import { AppointmentObj } from "./appointment/appointment";
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
  
  createAppointment(date: Date, me: UserObj) {
    let url = "http://localhost:8080/api/appointment/new/"+date;
    return this._http.post(url, me, { withCredentials: true });
  }
  
}

