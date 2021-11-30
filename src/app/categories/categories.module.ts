import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { CategoriesDetailComponent } from './categories-detail/categories-detail.component';


@NgModule({
  declarations: [
    CategoriesListComponent,
    CategoriesDetailComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    FormsModule
  ]
})
export class CategoriesModule { }
