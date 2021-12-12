import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminProductsRoutingModule } from './admin-products-routing.module';
import { AdminProductEditComponent } from './admin-product-edit/admin-product-edit.component';
import { ProductOverviewComponent } from './product-overview/product-overview.component';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminModule } from '../admin.module';
import {InputTextModule} from 'primeng/inputtext';
import {MatButtonModule} from '@angular/material/button'; 
import {CheckboxModule} from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    AdminProductEditComponent,
    ProductOverviewComponent
  ],
  imports: [
    CommonModule,
    AdminProductsRoutingModule,
    MatOptionModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    AdminModule,
    InputTextModule,
    MatButtonModule,
    CheckboxModule,
    ButtonModule
  ]
})
export class AdminProductsModule { }