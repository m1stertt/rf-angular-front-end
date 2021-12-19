import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserAccountManagementComponent} from "./user-account-management/user-account-management.component";

const routes: Routes = [
  {path: '', component: UserAccountManagementComponent },

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
