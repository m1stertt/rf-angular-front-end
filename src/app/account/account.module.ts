import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserAccountManagementComponent} from "./user-account-management/user-account-management.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {AccountRoutingModule} from "./account-routing.module";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    UserAccountManagementComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    AccountRoutingModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule
  ]
})
export class AccountModule {
}
