import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartDeliveryComponent } from './cart-delivery/cart-delivery.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { CartViewComponent } from './cart-view/cart-view.component';
import { TableModule } from 'primeng/table';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ButtonModule } from 'primeng/button';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [CartDeliveryComponent,CartPageComponent,CartSummaryComponent,CartViewComponent],
  imports: [
    CommonModule,
    CartRoutingModule,
    TableModule,
    MatStepperModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    ButtonModule,
    MatInputModule
  ]
})
export class CartModule { }
