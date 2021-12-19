import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../shared/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CanManageColorsGuard implements CanActivate {
  constructor(private _authService: AuthService,private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(!this._authService.getToken()) return this.router.navigateByUrl('/auth/login');
    if(this._authService.hasPermission('CanManageColors')||this._authService.hasPermission('Admin')) return true;
    return this.router.navigateByUrl('/auth/login');
  }

}
