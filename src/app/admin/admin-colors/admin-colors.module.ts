import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminColorsRoutingModule } from './admin-colors-routing.module';
import { AdminColorCreateComponent } from './admin-color-create/admin-color-create.component';
import { AdminColorsOverviewComponent } from './admin-colors-overview/admin-colors-overview.component';
import { AdminModule } from '../admin.module';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {ColorPickerModule} from 'primeng/colorpicker';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog'; 



@NgModule({
  declarations: [AdminColorCreateComponent, AdminColorsOverviewComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    FormsModule,
    AdminColorsRoutingModule,
    AdminModule,
    TableModule,
    PanelModule,
    OverlayPanelModule,
    ColorPickerModule,
    InputTextModule,
    ConfirmDialogModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class AdminColorsModule { }
