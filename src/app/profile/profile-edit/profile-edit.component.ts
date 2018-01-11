import { UserService } from "../../user.service";
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {
//
//  updateForm = new FormGroup({
//      username: new FormControl(),
//      firstName: new FormControl(),
//      lastName: new FormControl(),
//      email: new FormControl(),
//  });
//  
//  private me: Object;
//  private userId: number;
//  private sub: Subscription;
//  private errorMessage: string;
//  guestUserRole=false;
//  
  constructor(private _router: Router,
              private _route: ActivatedRoute,
//              private _formBuilder: FormBuilder,
              private _userService: UserService
            ) { }

  ngOnInit() {
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
//  private initForm() {
//    this.updateUserForm = this._formBuilder.group({
//      id: [this.me.id, Validators.required],
//      username: [this.me.username, Validators.required],
//      password: [this.me.password, Validators.required],
//      firstName: [this.me.firstName, Validators.required],
//      lastName: [this.me.lastName, Validators.required],
//      email: [this.me.email, Validators.email],
//      role: [this.me.role, Validators.required],
//      regDate: [this.me.regDate, Validators.required]
//    });
//    
//  }
//
}
