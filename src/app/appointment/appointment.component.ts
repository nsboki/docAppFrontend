import { Component, OnInit } from '@angular/core';
import {AppointmentService} from '../appointment.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  appointmentList: Object[];
  
  constructor(private _appointmentService: AppointmentService) {
    this.getAppointmentList();
  }

  getAppointmentList() {
    this._appointmentService.getAppointmentList().subscribe(
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

}



