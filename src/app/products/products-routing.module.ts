import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductCreateComponent} from "./product-create/product-create.component";
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {ProductsGridComponent} from "./products-grid/products-grid.component";
import { CanManageProductsGuard } from '../auth/guards/can-manage-products.guard';

const routes: Routes = [
  {path: '', component: ProductsGridComponent},
  {path: 'gridview', component: ProductsGridComponent},
  {path: 'create', component: ProductCreateComponent, canActivate:[CanManageProductsGuard] }, // Create Product
  {path: ':id', component: ProductDetailComponent } // Update Product
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
