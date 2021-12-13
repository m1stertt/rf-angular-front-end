import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {ProductsGridComponent} from "./products-grid/products-grid.component";

const routes: Routes = [
  {path: '', component: ProductsGridComponent},
  {path: ':id', component: ProductDetailComponent } // Update Product
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
