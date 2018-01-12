import { AppointmentService } from "../../appointment.service";
import { UserObj } from "../../user";
import { UserService } from "../../user.service";
import { AppointmentObj } from "../appointment";
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-user-appointments',
  templateUrl: './user-appointments.component.html',
  styleUrls: ['./user-appointments.component.css']
})
export class UserAppointmentsComponent implements OnInit {

  private username: string;
  me: UserObj;
  appointmentList: AppointmentObj[];
  
  constructor(private _appointmentService: AppointmentService,
              private _userService: UserService,
              private _router: Router) {
    this.username = localStorage.getItem('Username');
    this._userService.getUser(this.username).subscribe(
      user => {this.me = JSON.parse(JSON.parse(JSON.stringify(user))._body);
        this.getAppointmentList(this.me.userId);
      });
  }

  getAppointmentList(id: number) {
    this._appointmentService.getUserAppointments(id).subscribe(
      res => {
            this.appointmentList = JSON.parse(JSON.parse(JSON.stringify(res))._body);
          },
          error => console.log(error)
    )
  } 

  confirmAppointment(id: number) {
      this._appointmentService.confirmAppointment(id).subscribe();
      location.reload();
    }
  
  ngOnInit() {
  }
  
  onNew() {
    this._router.navigate(['appointment/new']);
    
  }

}
