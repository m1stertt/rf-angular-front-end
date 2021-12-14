import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminCategoriesOverviewComponent } from './admin-categories-overview/admin-categories-overview.component';
import { AdminCategoryCreateComponent } from './admin-category-create/admin-category-create.component';

const routes: Routes = [
  {path: '', component: AdminCategoriesOverviewComponent},
  {path: 'create', component: AdminCategoryCreateComponent, /*canActivate:[CanManageProductsGuard]*/ }, // Create Product
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminCategoriesRoutingModule { }
