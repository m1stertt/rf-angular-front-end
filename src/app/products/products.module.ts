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
import {MatGridListModule} from "@angular/material/grid-list";
import { ProductsGridComponent } from './products-grid/products-grid.component';
import {MatPaginatorModule} from "@angular/material/paginator";


@NgModule({
  declarations: [
    ProductsListComponent,
    ProductsGridComponent,
    ProductDetailComponent,
    ProductCreateComponent,

  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatGridListModule,
    MatPaginatorModule,
  ]
})
export class ProductsModule { }
