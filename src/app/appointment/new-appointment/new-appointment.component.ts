import { AppointmentService } from "../../appointment.service";
import { UserObj } from "../../user";
import { UserService } from "../../user.service";
import { AppointmentObj } from "../appointment";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-appointment',
  templateUrl: './new-appointment.component.html',
  styleUrls: ['./new-appointment.component.css']
})
export class NewAppointmentComponent implements OnInit {

  date: Date;
  minDate = new Date();
  maxDate = new Date();
  username: string;
  me: UserObj;
  appointment: AppointmentObj;
  
  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }
  
  constructor(private _userService: UserService,
              private _appointmentService: AppointmentService) { 
    this.username = localStorage.getItem('Username');
    this._userService.getUser(this.username).subscribe(
      user => {this.me = JSON.parse(JSON.parse(JSON.stringify(user))._body);
        });
    if(this.minDate.getMonth()==12){
      this.maxDate.setMonth(1);
      this.maxDate.setFullYear(this.maxDate.getFullYear()+1); 
    } else {
      this.maxDate.setMonth(this.minDate.getMonth()+1);
    }
  }
  ngOnInit() {
  }
  
  onCreate() {
//    this.appointment.confirmed = 'false';
//    this.appointment.date = this.date;
//    this.appointment.doctorUsername = this.me.doctorUsername;
//    this.appointment.patient = this.me;
    return this._appointmentService.createAppointment(this.date, this.me);
  }
  
  onCancel() {
    
  }

}
