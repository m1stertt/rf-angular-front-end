import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AppComponent} from "../../app.component";
import {Router} from "@angular/router";
import {AccountService} from "../shared/account.service";
import {UserDto} from "../shared/user.dto";
import {Profile} from "../../auth/shared/models/profile";
import {Observable} from "rxjs";
import {AuthService} from "../../auth/shared/auth.service";

@Component({
  selector: 'app-user-account-management',
  templateUrl: './user-account-management.component.html',
  styleUrls: ['./user-account-management.component.scss']
})
export class UserAccountManagementComponent implements OnInit {
  errorMessage?: string;
  profile$: Observable<Profile | null> | undefined;
  userId: any;
  hasCreatedUser: boolean = false;
  user?: UserDto | null | undefined;
  userEmail: any;

  constructor(private accountService: AccountService,
              private router: Router, public appComponent: AppComponent, private _authService: AuthService) {
  }

  ngOnInit(): void {
    this.getUserProfileId();
    this.getUserProfileEmail();
    this.getUser();

    this.email?.setValue(this.userEmail);
    {
      this.accountService.getUser(this.userId)?.subscribe(user => {
        if (this.hasCreatedUser)
        this.firstName?.setValue(user?.firstName)
        this.lastName?.setValue(user?.lastName)
        this.streetAndNumber?.setValue(user?.streetAndNumber)
        this.postalCode?.setValue(user?.postalCode)
        this.city?.setValue(user?.city)
        this.phoneNumber?.setValue(user?.phoneNumber)
      })
    }


  }

  getUserProfileId() {
    this.profile$ = this._authService.listenForProfile();
    if (this._authService.getToken()) {
      this._authService.fetchProfile()
        .subscribe();
      this.appComponent.profile$?.subscribe(pro => {
        this.userId = pro?.id;
      });
    }
  }

  getUserProfileEmail() {
    this.profile$ = this._authService.listenForProfile();
    if (this._authService.getToken()) {
      this._authService.fetchProfile()
        .subscribe();
      this.appComponent.profile$?.subscribe(pro => {
        this.userEmail = pro?.email;
      });
    }
  }

  userManagementForm = new FormGroup({

    firstName: new FormControl('',
      []),
    lastName: new FormControl('', []),
    email: new FormControl('', []),
    streetAndNumber: new FormControl('', []),
    postalCode: new FormControl('', []),
    city: new FormControl('', []),
    phoneNumber: new FormControl('', []),

  });

  get firstName() {
    return this.userManagementForm.get('firstName');
  }

  get lastName() {
    return this.userManagementForm.get('lastName');
  }

  get email() {
    return this.userManagementForm.get('email');
  }

  get streetAndNumber() {
    return this.userManagementForm.get('streetAndNumber');
  }

  get postalCode() {
    return this.userManagementForm.get('postalCode');
  }

  get city() {
    return this.userManagementForm.get('city');
  }

  get phoneNumber() {
    return this.userManagementForm.get('phoneNumber');
  }


  saveChanges() {
    if (this.hasCreatedUser) {
      this.updateUser()
    } else {
      this.createUser()
    }
  }

  createUser() {
    let userDetails = this.userManagementForm.value as UserDto;
    userDetails.id = this.userId
    this.accountService.create(userDetails).subscribe(() => {
        this.router.navigateByUrl('')
      },
      error => {
        this.errorMessage = error.error;
      });
  }

  updateUser() {
    let userDetails = this.userManagementForm.value as UserDto;
    userDetails.id = this.userId
    if (this.user) {
      this.accountService.updateUser(userDetails).subscribe(() => {
        },
        error => {
          console.log(error)
        });
    }
  }

  getUser() {
    this.accountService.getUser(this.userId)?.subscribe(user => {
      if (user != null) {
        this.hasCreatedUser = true;
        this.user = user;
      }
    })
  }

  deleteUser() {
    this.accountService.delete(this.userId).subscribe(() => {
      },
      error => {
        console.log(error)
      });
  }
}
