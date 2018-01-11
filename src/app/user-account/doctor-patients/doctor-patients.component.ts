import { UserObj } from "../../user";
import { UserService } from "../../user.service";
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-doctor-patients',
  templateUrl: './doctor-patients.component.html',
  styleUrls: ['./doctor-patients.component.css']
})
export class DoctorPatientsComponent implements OnInit {
  
  private username: string;
  me: UserObj;
  userList: UserObj[];

  constructor(private _userService: UserService, private _router: Router) {
    this.username = localStorage.getItem('Username');
    this._userService.getUser(this.username).subscribe(
      user => {this.me = JSON.parse(JSON.parse(JSON.stringify(user))._body);
        this.getPatients(this.me.username);
      });
  }

  getPatients(username: string) {
    this._userService.getPatients(username).subscribe(
      res => {
            this.userList = JSON.parse(JSON.parse(JSON.stringify(res))._body);
          },
          error => console.log(error)
    )
  }
   
  enableUser(username: string) {
    this._userService.enableUser(username).subscribe();
    location.reload();
  }

  disableUser(username: string) {
    this._userService.disableUser(username).subscribe();
    location.reload();
  }
  
  ngOnInit() {
  }

}
