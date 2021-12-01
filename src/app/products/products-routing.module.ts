import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsListComponent} from "./products-list/products-list.component";
import {ProductCreateComponent} from "./product-create/product-create.component";
import {WriteProductsGuard} from "../auth/guards/write-products.guard";

const routes: Routes = [
  {path: '', component: ProductsListComponent},
  {path: 'create', component: ProductCreateComponent, canActivate:[WriteProductsGuard] },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
