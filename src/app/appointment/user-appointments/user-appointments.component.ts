  import { AppointmentService } from "../../appointment.service";
import { UserObj } from "../../user";
import { UserService } from "../../user.service";
import { AppointmentObj } from "../appointment";
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-user-appointments',
  templateUrl: './user-appointments.component.html',
  styleUrls: ['./user-appointments.component.css']
})
export class UserAppointmentsComponent implements OnInit {

  date: Date;
  dateString: string;
  minDate = new Date();
  maxDate = new Date();
  appointment: AppointmentObj;
  
  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }
  
  username: string;
  me: UserObj;
  appointmentList: AppointmentObj[];
  haveActiveAppointment: boolean;
  
  constructor(private _appointmentService: AppointmentService,
              private _userService: UserService,
              private _router: Router,
              private _route: ActivatedRoute) {
    this.username = localStorage.getItem('Username');
    this._userService.getUser(this.username).subscribe(
      user => {this.me = JSON.parse(JSON.parse(JSON.stringify(user))._body);
        this.getAppointmentList(this.me.userId);
      });
    
    if(this.minDate.getMonth()==12){
      this.maxDate.setMonth(1);
      this.maxDate.setFullYear(this.maxDate.getFullYear()+1); 
    } else {
      this.maxDate.setMonth(this.minDate.getMonth()+1);
    }
    
    
  }

  haveActiveApp() {
  
  	this._appointmentService.getActiveAppointment(this.username).subscribe(
      appointment => {
        this.haveActiveAppointment = JSON.parse(JSON.stringify(appointment))._body;
	    return (this.haveActiveAppointment);
      }
    );
  }
  
  haveDate() {
    if(this.date){
      return true;
    } else {
      return false;
    }
  }
  
  disableButton() {
    if(!this.haveActiveAppointment&&this.haveDate()){
      return true;
    } else if(this.haveDate()){
      return false;
    } else {
      return true;
    }
  }
  
  getAppointmentList(id: number) {
    this._appointmentService.getUserAppointments(id).subscribe(
      res => {
            this.appointmentList = JSON.parse(JSON.parse(JSON.stringify(res))._body);
            
          },
          error => console.log(error)
    )
  } 

  ngOnInit() {
  
  }
  
  onNew() {
    this.dateString = this.date.getFullYear() + "-" +this.date.getMonth()+1 + "-" + this.date.getDate();
    return this._appointmentService.createAppointment(this.dateString, this.username).subscribe(
        (data: any) => {
          location.reload();
        }
        );
//    console.log(this.dateString);
//    console.log("Schedule An Appointment");
//    this._router.navigate(['appointment/new']);
    
  }
  
  
  
  onDelete(id: number) {
    if (confirm('Do you realy want to delete an appointment?')){
	    return this._appointmentService.deleteAppointment(id).subscribe(
	      (data: any) => {
	        location.reload();
	      }
	    );
    }
  }

}
