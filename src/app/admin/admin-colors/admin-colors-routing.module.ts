import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminColorCreateComponent } from './admin-color-create/admin-color-create.component';
import { AdminColorsOverviewComponent } from './admin-colors-overview/admin-colors-overview.component';

const routes: Routes = [{path: '', component: AdminColorsOverviewComponent},{path: 'create', component: AdminColorCreateComponent, /*canActivate:[CanManageProductsGuard]*/ }, ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminColorsRoutingModule { }
