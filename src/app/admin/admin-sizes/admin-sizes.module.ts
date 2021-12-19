import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminSizesRoutingModule } from './admin-sizes-routing.module';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { FormsModule } from '@angular/forms';
import { AdminModule } from '../admin.module';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AdminSizeCreateComponent } from './admin-size-create/admin-size-create.component';
import { AdminSizesOverviewComponent } from './admin-sizes-overview/admin-sizes-overview.component';


@NgModule({
  declarations: [AdminSizeCreateComponent,AdminSizesOverviewComponent],
  imports: [
    CommonModule,
    FormsModule,
    AdminSizesRoutingModule,
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
export class AdminSizesModule { }
