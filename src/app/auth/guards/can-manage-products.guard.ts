import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../shared/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CanManageProductsGuard implements CanActivate {
  constructor(private _authService: AuthService,private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let profile=this._authService.getProfile();
      if(profile==null) return this.router.parseUrl('/');
      if(!profile.permissions.includes("CanManageProducts")) return this.router.parseUrl('/');
      console.log("hello world",profile);
      return true;
  }

}
