import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminAccountsRoutingModule } from './admin-accounts-routing.module';
import { AdminAccountsOverviewComponent } from './admin-accounts-overview/admin-accounts-overview.component';


@NgModule({
  declarations: [
    AdminAccountsOverviewComponent
  ],
  imports: [
    CommonModule,
    AdminAccountsRoutingModule
  ]
})
export class AdminAccountsModule { }
