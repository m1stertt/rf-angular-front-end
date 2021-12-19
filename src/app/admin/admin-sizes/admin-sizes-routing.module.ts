import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminSizesOverviewComponent } from './admin-sizes-overview/admin-sizes-overview.component';

const routes: Routes = [{path: '', component: AdminSizesOverviewComponent /*canActivate:[CanManageProductsGuard]*/ }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminSizesRoutingModule { }
