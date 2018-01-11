import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { UserAccountComponent } from "./user-account/user-account.component";
import { AppointmentComponent } from "./appointment/appointment.component";
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
    component: UserAccountComponent
  },
  {
    path: 'userAccount/doctor',
    component: DoctorPatientsComponent
  },
  {
    path: 'appointment/all',
    component: AppointmentComponent
  },
  {
    path: 'appointment/doctor',
    component: AppointmentComponent
  },
  {
    path: 'appointment/user',
    component: AppointmentComponent
  },
  {
    path: 'me',
    component: ProfileComponent
  },
  {
    path: 'me/edit',
    component: ProfileEditComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
