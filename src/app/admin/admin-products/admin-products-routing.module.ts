import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminProductEditComponent } from './admin-product-edit/admin-product-edit.component';
import { ProductOverviewComponent } from './product-overview/product-overview.component';

const routes: Routes = [
{path: '', component: ProductOverviewComponent},
{path: ':id', component: AdminProductEditComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminProductsRoutingModule { }
