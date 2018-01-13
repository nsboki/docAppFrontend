import { AppointmentService } from "../../appointment.service";
import { UserObj } from "../../user";
import { UserService } from "../../user.service";
import { AppointmentObj } from "../appointment";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-appointments',
  templateUrl: './doctor-appointments.component.html',
  styleUrls: ['./doctor-appointments.component.css']
})
export class DoctorAppointmentsComponent implements OnInit {
  
  username: string;
  appointmentList: AppointmentObj[];
  me: UserObj;
  
  constructor(private _appointmentService: AppointmentService,
              private _userService: UserService) {
    this.username = localStorage.getItem('Username');
    this._userService.getUser(this.username).subscribe(
      user => {this.me = JSON.parse(JSON.parse(JSON.stringify(user))._body);
        this.getAppointmentList(this.me.username);
      });
  }

  getAppointmentList(username: string) {
    this._appointmentService.getDoctorAppointments(username).subscribe(
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
  
  editAppointmentDescription(id: number, description: string) {
    
    this._appointmentService.updateDescription(id, description).subscribe();
    location.reload();
  }
  
  ngOnInit() {
  }

}
