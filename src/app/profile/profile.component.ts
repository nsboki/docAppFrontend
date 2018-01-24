import { UserObj } from "../user";
import { UserService } from "../user.service";
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private pageTitle: string;
  private me: UserObj;
  private username: string;
  private editMode: boolean;
  private firstName: string;
  private lastName: string;
  private hasDoctor: boolean;
  private userRole: string;
  
  constructor(private _userService: UserService,
              private _router: Router) { }
  
  
  ngOnInit() {
    
    this.pageTitle = "Welcome "+this.username;
    this.username = localStorage.getItem('Username');
    this._userService.getUser(this.username).subscribe(
      user => {this.me = JSON.parse(JSON.parse(JSON.stringify(user))._body);
//        console.log(this.me);
//        this._userService.getUserRole(this.me.username).subscribe(
//          role => { this.userRole = JSON.parse(JSON.parse(JSON.stringify(role))._body);
//          }
//        );
        if(!this.me.doctorUsername===null){
          this.hasDoctor = true;
        } else {
          this.hasDoctor = false;
        }
        this.firstName = this.me.firstName;
        this.lastName = this.me.lastName;
      }
    
    );
    this._userService.getUserRole(this.username).subscribe(
      (role: any)=> {
        this.userRole = JSON.parse(JSON.stringify(role))._body;
      }
      );
  }
  
  
  
  onSubmit() {
    
//    this.me.firstName = this.firstName;
//    this.me.lastName = this.lastName;
//    this._userService.updateUser(this.me).subscribe(
//        (data => {
//          this.editMode = false;
//          this.ngOnInit();
////          this._router.navigate(['/me']);
//        })      
//    );
  }
  
  onEdit() {
    this.editMode=true;
    this._router.navigate(['/me']);
    
  }
  
  onChangeSettings() {
  	this._router.navigate(['/me/change']);
  }
  
  onCancel() {
    this.editMode = false;
    this.ngOnInit();
//    this._router.navigate(['/me']);  
  }
  
  

}
