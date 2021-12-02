import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsListComponent} from "./products-list/products-list.component";
import {ProductCreateComponent} from "./product-create/product-create.component";
import {WriteProductsGuard} from "../auth/guards/write-products.guard";
import {ProductDetailComponent} from "./product-detail/product-detail.component";

const routes: Routes = [
  {path: '', component: ProductsListComponent},

  {path: 'create', component: ProductCreateComponent, canActivate:[WriteProductsGuard] }, // Create Product
  {path: ':id', component: ProductDetailComponent, canActivate:[WriteProductsGuard] } // Update Product
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
