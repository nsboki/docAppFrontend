import { UserObj } from "../user";
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../user.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {
    
  userList: UserObj[];

  constructor(private _userService: UserService, private _router: Router) {
    this.getUsers();
  }

  getUsers() {
    this._userService.getUsers().subscribe(
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
