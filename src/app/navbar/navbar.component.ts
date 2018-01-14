import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { UserService } from "../user.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private loggedIn: boolean;
  private isAdmin: boolean;
  private isDoctor: boolean;
  private isPatient: boolean;
  private userRole: string;
  localStorage.clear();
  localStorage.setItem('PortalAdminHasLoggedIn', '');
  
  constructor(private _loginService: LoginService, 
              private _router : Router,
              private _userService: UserService) {
    if(localStorage.getItem('PortalAdminHasLoggedIn') == ''||localStorage.getItem('PortalAdminHasLoggedIn')==null) {
      this.loggedIn = false;
    } else {
      this.loggedIn = true;
      this._userService.getUserRole(localStorage.getItem('Username')).subscribe(
        role => {
          this.userRole = JSON.parse(JSON.stringify(role))._body;
      if(this.userRole == 'ROLE_ADMIN') {
        this.isAdmin = true;
        this.isDoctor = false;
        this.isPatient = false;
        localStorage.setItem('Role','ADMIN');
      } else if(this.userRole == 'ROLE_DOCTOR') {
        this.isAdmin = false;
        this.isDoctor = true;
        this.isPatient = false;
        localStorage.setItem('Role','DOCTOR');    
      } else {
        this.isAdmin = false;
        this.isDoctor = false;
        this.isPatient = true;
        localStorage.setItem('Role','USER');
      }
        }
      );
    }
  }
  
  logout(){
    this._loginService.logout().subscribe(
      res => {
        localStorage.setItem('PortalAdminHasLoggedIn', '');
        localStorage.removeItem('Username');
        localStorage.removeItem('Role');
        location.reload();
        this._router.navigate(['/login']);
      },
      err => console.log(err)
      );
  }

  getDisplay() {
    if(!this.loggedIn){
      return "none";
    } else {
      return "";
    }
  }

  ngOnInit() {
  	
  }

}
