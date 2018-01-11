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
  
  constructor(private _userService: UserService,
              private _router: Router) { }
  
  
  ngOnInit() {
    
    this.pageTitle = "Welcome "+this.username;
    this.username = localStorage.getItem('Username');
    this._userService.getUser(this.username).subscribe(
      user => {this.me = JSON.parse(JSON.parse(JSON.stringify(user))._body);
        console.log(this.me);
        if(!this.me.doctorUsername===null){
          this.hasDoctor = true;
        } else {
          this.hasDoctor = false;
        }
        this.firstName = this.me.firstName;
        this.lastName = this.me.lastName;
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
  
  onCancel() {
    this.editMode = false;
    this.ngOnInit();
//    this._router.navigate(['/me']);  
  }
  
  

}
