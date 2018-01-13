import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(localStorage.getItem('PortalAdminHasLoggedIn') == '') {
      return false;
    } else {
      return true;
    }
  }
}

@Injectable()
export class AdminAuthGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(localStorage.getItem('Role')=="ADMIN") {
      return true;
    } else {
      return false;
    }
  }
}

@Injectable()
export class DoctorAuthGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if(localStorage.getItem('Role')=="DOCTOR") {
      return true;
    } else {
      return false;
    }
  }
}

@Injectable()
export class UserAuthGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if(localStorage.getItem('Role')=="USER" || localStorage.getItem('Role')=="DOCTOR") {
      return true;
    } else {
      return false;
    }
  }
}
