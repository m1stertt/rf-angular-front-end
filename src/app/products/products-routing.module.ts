import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsListComponent} from "./products-list/products-list.component";

const routes: Routes = [
  {path: '', component: ProductsListComponent},
  // {path: 'create', component: ProductCreateComponent, canActivate:[WriteProductsGuard] }, //Create route
  // {path: ':id', component: ProductDetailComponent, canActivate:[WriteProductsGuard] } //Update

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
