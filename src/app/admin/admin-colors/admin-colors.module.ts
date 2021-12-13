import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminColorsRoutingModule } from './admin-colors-routing.module';
import { AdminColorCreateComponent } from './admin-color-create/admin-color-create.component';
import { AdminColorsOverviewComponent } from './admin-colors-overview/admin-colors-overview.component';
import { AdminModule } from '../admin.module';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';


@NgModule({
  declarations: [AdminColorCreateComponent, AdminColorsOverviewComponent],
  imports: [
    CommonModule,
    AdminColorsRoutingModule,
    AdminModule,
    TableModule,
    PanelModule
  ]
})
export class AdminColorsModule { }
