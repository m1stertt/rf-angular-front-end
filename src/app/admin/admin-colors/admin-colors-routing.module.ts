import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminColorsOverviewComponent } from './admin-colors-overview/admin-colors-overview.component';

const routes: Routes = [{path: '', component: AdminColorsOverviewComponent /*canActivate:[CanManageProductsGuard]*/ }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminColorsRoutingModule { }