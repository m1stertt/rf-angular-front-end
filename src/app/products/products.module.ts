import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsListComponent } from './products-list/products-list.component';
import {FormsModule} from "@angular/forms";
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProducstsGridComponent } from './producsts-grid/producsts-grid.component';


@NgModule({
  declarations: [
    ProductsListComponent,
    ProductDetailComponent,
    ProductCreateComponent,
    ProducstsGridComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
  ]
})
export class ProductsModule { }
