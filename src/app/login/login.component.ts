import { Component, OnInit } from '@angular/core';
import {Observable}  from 'rxjs/Observable';
import {LoginService} from '../login.service';
import { UserService } from "../user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loggedIn: boolean;
  loggedInUser: string;
  username: string;
  password: string;
  success: boolean;

  constructor (private _loginService: LoginService,
               private _userService: UserService) {
    if(localStorage.getItem('PortalAdminHasLoggedIn') == '' || localStorage.getItem('PortalAdminHasLoggedIn') === null) {
      this.loggedIn = false;
    } else {
      this.loggedIn = true;
    }
  }
  
  onSubmit() {
    this._loginService.sendCredential(this.username, this.password).subscribe(
      res => {
        this.loggedIn=true;
        localStorage.setItem('PortalAdminHasLoggedIn', 'true');
        location.reload();
        localStorage.setItem('Username', this.username)
        
//        this._userService.checkCredential(this.username, this.password).subscribe(
//          success => {
//            this.success = JSON.parse(JSON.stringify(success))._body;
//            console.log(this.success);
//          }
//        );
      },
      err => console.log(err)
    );
    
    
  }

  ngOnInit() {
  this.loggedInUser = localStorage.getItem('Username');
  }

}
