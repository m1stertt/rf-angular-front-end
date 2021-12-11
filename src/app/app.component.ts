import { Component } from '@angular/core';
import {AuthService} from './auth/shared/auth.service';
import {Observable} from 'rxjs';
import {Profile} from './auth/shared/models/profile';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rf-angular-front-end';
  profile$: Observable<Profile | null> | undefined;


  constructor(private _authService: AuthService, private _router: Router) { }

  ngOnInit(): void {
    this.profile$ = this._authService.listenForProfile();
    if(this._authService.getToken()) {
      this._authService.fetchProfile()
        .subscribe();
    }
  }

  logout() {
    this._authService.logout()
      .subscribe(succes => {
        if(succes) {
          this._router.navigateByUrl('/');
        }
      });
  }
}
