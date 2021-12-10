import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserAccountManagementComponent} from "./user-account-management/user-account-management.component";
import {CanManageAccountPageGuard} from "../auth/guards/can-manage-account-page.guard";

const routes: Routes = [
  {path: '', component: UserAccountManagementComponent, canActivate:[CanManageAccountPageGuard] },

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
