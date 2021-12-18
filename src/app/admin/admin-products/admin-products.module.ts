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
import {TabViewModule} from 'primeng/tabview';
import { TableModule } from 'primeng/table';
import { AdminProductCreateComponent } from './admin-product-create/admin-product-create.component';
import { ToastModule } from 'primeng/toast';
import {EditorModule} from 'primeng/editor';
import { ChipModule } from 'primeng/chip';
import { AdminProductInventoryStockCreateComponent } from './admin-product-inventory-stock-create/admin-product-inventory-stock-create.component';
import { AdminProductInventoryStockViewComponent } from './admin-product-inventory-stock-view/admin-product-inventory-stock-view.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { PanelModule } from 'primeng/panel';
import { AdminProductImagesEditComponent } from './admin-product-images-edit/admin-product-images-edit.component';

@NgModule({
  declarations: [
    AdminProductEditComponent,
    ProductOverviewComponent,
    AdminProductCreateComponent,
    AdminProductCreateComponent,
    AdminProductInventoryStockCreateComponent,
    AdminProductInventoryStockViewComponent,
    AdminProductImagesEditComponent
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
    ButtonModule,
    TabViewModule,
    TableModule,
    ToastModule,
    EditorModule,
    ChipModule,
    PanelModule
  ]
})
export class AdminProductsModule { }