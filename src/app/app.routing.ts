import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { UserAccountComponent } from "./user-account/user-account.component";
import { AppointmentComponent } from "./appointment/appointment.component";

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
    path: 'userAccount',
    component: UserAccountComponent
  },
  {
    path: 'appointment',
    component: AppointmentComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
