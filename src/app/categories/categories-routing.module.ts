import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CategoriesListComponent} from './categories-list/categories-list.component';
import {CategoriesDetailComponent} from "./categories-detail/categories-detail.component";
import {AdminOverviewComponent} from "../admin/admin-overview/admin-overview.component";
import {AdminImagesUploadComponent} from "../admin/admin-images-upload/admin-images-upload.component";

const routes: Routes = [
  {path: '', component: CategoriesListComponent},
  {path: ':id', component: CategoriesDetailComponent }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
