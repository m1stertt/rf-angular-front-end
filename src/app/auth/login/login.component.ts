import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginUser} from '../shared/models/login-user';
import {AuthService} from '../shared/auth.service';
import {Router} from '@angular/router';
import { MenuService } from 'src/app/menu/shared/menu.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  errorMessage?: string;

  constructor(private _auth: AuthService,
              private _router: Router,private menuService:MenuService) {}

  ngOnInit(): void {
    this.menuService.breadcrumb=[
      {icon:'pi pi-home',routerLink:"/"},
      {label:"Login",routerLink:"/auth/login"}
    ]
  }
  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    ]),

    password: new FormControl('',
      [
        Validators.required,
        Validators.minLength(6)
      ]
    ),
  });

  get email() {return this.loginForm.get('email');}
  get password() {return this.loginForm.get('password');}

  login() {
    let loginInfo = this.loginForm.value as LoginUser;
    this._auth.login(loginInfo)
      .then(token => {
        if(token) {
          this._auth.fetchProfile()
            .toPromise().then(() => {
            this._router.navigateByUrl('');
          });
        } else {
          console.log('Oh no! ')
        }
      })
      .catch(error => {
      this.errorMessage = error.error;
      });
  }

  register(){

  }

}
