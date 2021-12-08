import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImagesRoutingModule } from './images-routing.module';
import { UploadComponent } from './upload/upload.component';
import { ImagesEditComponent } from './images-edit/images-edit.component';


@NgModule({
  declarations: [
    UploadComponent,
    ImagesEditComponent
  ],
  imports: [
    CommonModule,
    ImagesRoutingModule
  ]
})
export class ImagesModule { }
