import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminCategoriesRoutingModule } from './admin-categories-routing.module';
import { AdminCategoriesOverviewComponent } from './admin-categories-overview/admin-categories-overview.component';
import { AdminCategoryCreateComponent } from './admin-category-create/admin-category-create.component';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import { AdminModule } from '../admin.module';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    AdminCategoriesOverviewComponent,
    AdminCategoryCreateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdminCategoriesRoutingModule,
    AdminModule,
    TableModule,
    PanelModule,
    InputTextModule,
    ConfirmDialogModule,
    ToastModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class AdminCategoriesModule { }
