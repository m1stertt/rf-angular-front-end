import { Injectable } from '@angular/core';
import {LoginUser} from './models/login-user';
import {HttpClient} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';
import {TokenInfo} from './models/token-info';
import {Profile} from './models/profile';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {RegistrationDetails} from "./models/registration-details";
import { UserDto } from 'src/app/account/shared/user.dto';
import { AccountService } from 'src/app/account/shared/account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  redirectUrl: string | undefined;
  profile$ = new BehaviorSubject<Profile | null>(null);
  user:UserDto|undefined;
  constructor(private _http: HttpClient,private accountService:AccountService) { }

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

  register(registrationDetails: RegistrationDetails): Observable<RegistrationDetails> {
    return this._http.post<RegistrationDetails>('https://localhost:5001/api' + '/auth/registeruser', registrationDetails)
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
          this.accountService.getUser(p.id)?.subscribe(e=>{
            if(e){
              localStorage.setItem("User",JSON.stringify(e));
            }
          });
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

 getUser(): UserDto {
    let user = localStorage.getItem('User');
    if(user) {
      return JSON.parse(user) as UserDto;
    }else if(!this.user){
      this.user={firstName:"",lastName:"",phoneNumber:"",streetAndNumber:"",email:"",postalCode:"",city:""};
    }
    return this.user;
  }

  hasPermission(permission: string): Observable<boolean> {
    if(localStorage.getItem('Profile')?.includes(permission)) return of(true);
    return of(false);
  }
}
