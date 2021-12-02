import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsListComponent} from "./products-list/products-list.component";
import {ProductCreateComponent} from "./product-create/product-create.component";
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {ProductsGridComponent} from "./producsts-grid/products-grid.component";
import { CanManageProductsGuard } from '../auth/guards/can-manage-products.guard';

const routes: Routes = [
  {path: '', component: ProductsListComponent},
  {path: 'gridview', component: ProductsGridComponent},
  {path: 'create', component: ProductCreateComponent, canActivate:[CanManageProductsGuard] }, // Create Product
  {path: ':id', component: ProductDetailComponent, canActivate:[CanManageProductsGuard] } // Update Product
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
