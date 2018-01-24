import { UserService } from "../../user.service";
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";

import { UserObj } from "../../user";
import { AlertService } from "../../alert.service";
import { Alert } from "../../_models/alert";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {

  private me: UserObj;
  private username: string;
  doctorList: UserObj[];
  alert: Alert;

  // email = new FormControl('', [Validators.required, Validators.email]);


  createForm = new FormGroup({
      username: new FormControl(),
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl(),
      doctor: new FormControl()
  });

  // myControl: FormControl = new FormControl();
  // selectedDocUsername: string;
  selected: string;
  // options = [
  //   'One',
  //   'Two',
  //   'Three'
  //  ]
  
 
//  private userId: number;
//  private sub: Subscription;
//  private errorMessage: string;
//  guestUserRole=false;
	// doctorList = ['1','2','3'];
//  
  constructor(private _router: Router,  
              private _route: ActivatedRoute,
              private _formBuilder: FormBuilder,
              private _userService: UserService,
              private _alertService: AlertService,
              public snackBar: MatSnackBar
            ) {
              
              
             }

  ngOnInit() {
    this.getDoctors();
    this.getMe();
    // this.initForm();
//    
////    this.selectedUser = null;
////    this.sub = this._route.params.subscribe(
////      (params: any) => {
////          this.userId = params['id'];
////          this._userService.getUser(this.userId)
////            .subscribe(     
////              user => {this.selectedUser = user;
////                this.initForm();
////                if(this.selectedUser.role=="ROLE_GUEST"){
////                  this.guestUserRole = true;
////                } else {
////                  this.guestUserRole = false;
////                }
////                },
////              error => this.errorMessage = <any>error);
////      }
////    );
  }

  getMe(){
    this.username = localStorage.getItem('Username');
              this._userService.getUser(this.username).subscribe(
                user => {
                  this.me = JSON.parse(JSON.parse(JSON.stringify(user))._body);
                  this.initForm();
                });
  }

  getDoctors() {
    this._userService.getDoctors().subscribe(
      res => {
            this.doctorList = JSON.parse(JSON.parse(JSON.stringify(res))._body);
          },
          error => console.log(error)
    )
  }

  private initForm() {
   this.createForm = this._formBuilder.group({
     username: [this.me.username, Validators.required],
     firstName: [this.me.firstName, Validators.required],
     lastName: [this.me.lastName, Validators.required],
     email: [this.me.email, Validators.email],
     doctor: [this.me.doctorUsername, Validators.required]
   });
  }

  onSubmit() {
    let newCSR = this.createForm.value;
    newCSR.username = this.me.username;
    this._userService.createCSR(newCSR).subscribe(
      data => {
        let snackBarRef = this.snackBar.open('Successfully sent request','X', {duration: 2000});
        // this._alertService.success("radi")
        this._router.navigate(['/me']);

      }
    );
  }

  onCancel() {
    this._router.navigate(['/me']);
  }

  // getErrorMessage() {
  //   return this.email.hasError('required') ? 'You must enter a value' :
  //       this.email.hasError('email') ? 'Not a valid email' :
  //           '';
  // }

  
//  
//  onSubmit() {
////    const newUser = this.updateUserForm.value;
////    this._userService.updateUser(newUser);
////    this.navigateBack();
//  }
//  
//  onCancel() {
//    this.navigateBack();
//  }
//  
//  onSetDoctor() {
////    let newUser = this.updateUserForm.value;
////    newUser.role = "ROLE_DOCTOR";
////    this._userService.updateUser(newUser);
////    this.navigateBack();
//  }
//  
//  onSetPatient() {
////    let newUser = this.updateUserForm.value;
////    newUser.role = "ROLE_PATIENT";
////    this._userService.updateUser(newUser);
////    this.navigateBack();
//  }
//  
//  onSetAdmin() {
////    let newUser = this.updateUserForm.value;
////    newUser.role = "ROLE_ADMIN";
////    this._userService.updateUser(newUser);
////    this.navigateBack();
//  }
//
//  ngOnDestroy(): void {
//    this.sub.unsubscribe();
//  }
//  
//  private navigateBack() {
//    this._router.navigate(['/users']);
//  }
//  

   
//  }
//
}
