import { UserObj } from "../user";
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../user.service';
import { forEachChild } from "typescript";

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {
    
//  private me: UserObj;
//  private userRole: string;
  private username: string;
  userList: UserObj[];
  constructor(private _userService: UserService, private _router: Router) {
    this.getUsers();
//    this._userService.getUser(this.username).subscribe(
//      user => {this.me = JSON.parse(JSON.parse(JSON.stringify(user))._body);
//      });
  }

  getUsers() {
    this._userService.getUsers().subscribe(
      res => {
            this.userList = JSON.parse(JSON.parse(JSON.stringify(res))._body);
          },
          error => console.log(error)
    )
  }
  
//  getUserRole(username: string) {
//    this._userService.getUserRole(this.username).subscribe(
//      (role: any)=> {
//        this.userRole = JSON.parse(JSON.stringify(role))._body;
//        return this.userRole;
//      }
//      );
//   
//  }
   
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
