import { AuthenticatedUser } from "./authenticated-user";
import { RoleService } from "./role.service";
import { UserObj } from "./user";
import { UserService } from "./user.service";
import { Injectable } from '@angular/core';

// Devolopment settings
const GeneralServerIp: string = "localhost";
export const ServerUrl: string = "http://" + GeneralServerIp + ":8080";
export const AngularServerUrl: string = "http://" + GeneralServerIp + ":4200";

@Injectable()
export class AuthService {

  private authenticated: boolean;
  private headers: Headers = new Headers({'Content-Type': 'application/json'});
  private loggedInUser = new AuthenticatedUser();
  private username: string;
  private password: string;
  private userRole: string;
  private me: UserObj;
  
  
  constructor() { }
  
  login() {
    this.getLoggedInUser();
    
  }
  
  getLoggedInUser() {
//    this.username = localStorage.getItem('Username');
////    this._userService.getUser(this.username).subscribe(
//      user => {this.me = JSON.parse(JSON.parse(JSON.stringify(user))._body);
//      });
//    this._roleService.getRole(this.me.userId).subscribe(
//      userRole => {this.userRole = JSON.parse(JSON.parse(JSON.stringify(userRole))._body);
////      this.loggedInUser = new AuthenticatedUser(this.me.username, this.me.password, this.userRole);
//      });
  }
  
  getRole(userId: number) {
//    let userRole;
//    this._roleService.getRole(this.me.userId).subscribe(
//      role => {userRole = JSON.parse(JSON.parse(JSON.stringify(role))._body); 
//           this.loggedInUser.role = userRole;
//      });
//    return userRole;
  }
  
  isAuthenticated() {
    return this.authenticated;
  }

}
