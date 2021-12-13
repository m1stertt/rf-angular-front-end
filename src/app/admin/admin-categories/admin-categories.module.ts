import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminCategoriesRoutingModule } from './admin-categories-routing.module';
import { AdminCategoriesOverviewComponent } from './admin-categories-overview/admin-categories-overview.component';
import { AdminCategoryEditComponent } from './admin-category-edit/admin-category-edit.component';
import { AdminCategoryCreateComponent } from './admin-category-create/admin-category-create.component';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import { AdminModule } from '../admin.module';


@NgModule({
  declarations: [
    AdminCategoriesOverviewComponent,
    AdminCategoryEditComponent,
    AdminCategoryCreateComponent
  ],
  imports: [
    CommonModule,
    AdminCategoriesRoutingModule,
    TableModule,
    PanelModule,
    AdminModule,
  ]
})
export class AdminCategoriesModule { }
