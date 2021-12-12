import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import {ProductsGridComponent} from "./products-grid/products-grid.component";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatPaginatorModule} from "@angular/material/paginator";
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {GalleriaModule} from 'primeng/galleria';
import {PanelModule} from 'primeng/panel';


@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductCreateComponent,
    ProductsGridComponent,
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
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    ButtonModule,
    ToastModule,
    GalleriaModule,
    PanelModule
  ],
  exports:[ProductsGridComponent]
})
export class ProductsModule { }
