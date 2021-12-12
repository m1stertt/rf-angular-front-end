import { Component } from '@angular/core';
import {AuthService} from "../shared/auth.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RegistrationDetails} from "../shared/models/registration-details";

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent{
  errorMessage?: string;

  constructor(private authService: AuthService,
              private router: Router) {
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
    )
  });

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  register() {
    let registrationDetails = this.loginForm.value as RegistrationDetails;
    this.authService.register(registrationDetails).subscribe(() => {
        this.router.navigateByUrl('auth/login')
      },
      error => {
        this.errorMessage = error.error;
      });
  }

}
