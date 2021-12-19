import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminOverviewComponent } from './admin-overview/admin-overview.component';
import {PanelModule} from 'primeng/panel';
import {ToolbarModule} from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import {SplitButtonModule} from 'primeng/splitbutton';
import { TableModule } from 'primeng/table';
import {PanelMenuModule} from 'primeng/panelmenu';
import { AdminSidepanelComponent } from './admin-sidepanel/admin-sidepanel.component';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { AdminProductImagesUploadComponent } from './admin-products/admin-product-images-upload/admin-product-images-upload.component';


@NgModule({
  declarations: [
    AdminOverviewComponent,
    AdminSidepanelComponent,
    AdminTemplateComponent,
    AdminProductImagesUploadComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    PanelModule,
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    TableModule,
    PanelMenuModule,
    DynamicDialogModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
  ],
  exports:[AdminTemplateComponent],
  entryComponents: [
  ]
})
export class AdminModule { }
