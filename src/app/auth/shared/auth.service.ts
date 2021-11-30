import { Injectable } from '@angular/core';
import {LoginUser} from './models/login-user';
import {HttpClient} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';
import {TokenInfo} from './models/token-info';
import {Profile} from './models/profile';
import {BehaviorSubject, Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  redirectUrl: string | undefined;
  profile$ = new BehaviorSubject<Profile | null>(null);
  constructor(private _http: HttpClient) { }

  login(loginInfo: LoginUser): Promise<string> {
    return this._http
      .post<TokenInfo>('https://localhost:5001/api' + '/auth/login'
        , loginInfo)
      .pipe(
        tap(tokenInfo => {
          localStorage.setItem('token', tokenInfo.token);
        }),
        map(tokenInfo => {
          return tokenInfo.token;
        })
      )
      .toPromise();
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  fetchProfile(): Observable<Profile | null> {
    return this._http
      .get<Profile>('https://localhost:5001/api' + '/auth/getProfile')
      .pipe(
        tap(p => {
          localStorage.setItem('Profile', JSON.stringify(p))
          this.profile$.next(p);
        })
      )
  }

  listenForProfile(): Observable<Profile | null> {
    return this.profile$;
  }

  logout(): Observable<boolean> {
    localStorage.removeItem('token');
    localStorage.removeItem('Profile');
    this.profile$.next(null);
    return of(true);
  }

  getProfile(): Profile | undefined {
    let profile = localStorage.getItem('Profile');
    if(profile) {
      return JSON.parse(profile) as Profile;
    }
    return undefined;
  }

  hasPermission(permission: string): Observable<boolean> {
    return this.profile$
      .pipe(
        map(profile => {
          if(profile && profile.permissions) {
            return profile.permissions.indexOf(permission) > -1;
          }
          return false;
        })
      )
  }
}