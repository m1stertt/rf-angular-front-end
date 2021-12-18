import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartDeliveryComponent } from './cart-delivery/cart-delivery.component';
import { CartPageComponent } from './cart-page/cart-page.component';

const routes: Routes = [
  { path: '', component: CartPageComponent },
  { path: 'checkout', component: CartDeliveryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
