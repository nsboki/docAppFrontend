import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { UserAccountComponent } from "./user-account/user-account.component";
import { AppointmentComponent } from "./appointment/appointment.component";
import { DoctorAppointmentsComponent } from "./appointment/doctor-appointments/doctor-appointments.component";
import { NewAppointmentComponent } from "./appointment/new-appointment/new-appointment.component";
import { UserAppointmentsComponent } from "./appointment/user-appointments/user-appointments.component";
import { AuthGuard, AdminAuthGuard, DoctorAuthGuard, UserAuthGuard } from "./auth.guard";
import { ProfileEditComponent } from "./profile/profile-edit/profile-edit.component";
import { ProfileComponent } from "./profile/profile.component";
import { DoctorPatientsComponent } from "./user-account/doctor-patients/doctor-patients.component";

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'userAccount/all',
    component: UserAccountComponent,
    canActivate: [AuthGuard, AdminAuthGuard]
  },
  {
    path: 'userAccount/doctor',
    component: DoctorPatientsComponent,
    canActivate: [AuthGuard, DoctorAuthGuard]
  },
  {
    path: 'appointment/all',
    component: AppointmentComponent,
    canActivate: [AuthGuard, AdminAuthGuard]
  },
  {
    path: 'appointment/doctor',
    component: DoctorAppointmentsComponent,
    canActivate: [AuthGuard, DoctorAuthGuard]
  },
  {
    path: 'appointment/user',
    component: UserAppointmentsComponent,
    canActivate: [AuthGuard, UserAuthGuard]
    
  },
//  {
//    path: 'appointment/new',
//    component: NewAppointmentComponent
//  },
  {
    path: 'me',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
//  {
//    path: 'me/edit',
//    component: ProfileEditComponent
//  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
