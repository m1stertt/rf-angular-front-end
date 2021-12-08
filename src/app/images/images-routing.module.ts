import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImagesEditComponent } from './images-edit/images-edit.component';
import { UploadComponent } from './upload/upload.component';

const routes: Routes = [
  { path: 'upload',component:UploadComponent},
  { path: 'edit',component:ImagesEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImagesRoutingModule { }
