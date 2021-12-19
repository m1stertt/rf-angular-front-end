import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable, of} from 'rxjs';
import {AuthService} from '../shared/auth.service';
import jwtDecode from "jwt-decode";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService,
              private router: Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const currentToken = this.authService.getToken();
    const isValid = this.isTokenValid(currentToken)
    return isValid? of(true) : this.authService.logout().pipe(map(() => {
      return this.router.parseUrl('/auth/login')
    }));

  }

  checkLogin(url: string): true|UrlTree {
    if (this.authService.getToken()) { return true; }
    
    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url;

    // Redirect to the login page
    return this.router.parseUrl('/auth/login');
  }


  private isTokenValid(token: string | null) {
    if (!token || token.length <= 0) {
      return false;
    }
    const decoded = jwtDecode(token) as DecodedToken;
    return Date.now() <= decoded.exp * 1000;
  }


}

interface DecodedToken {
  exp: number;
}

