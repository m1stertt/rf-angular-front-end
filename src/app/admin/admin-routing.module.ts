import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminProductImagesUploadComponent } from './admin-products/admin-product-images-upload/admin-product-images-upload.component';
import { AdminOverviewComponent } from './admin-overview/admin-overview.component';

const routes: Routes = [
  { path: 'products', loadChildren: () => import('./admin-products/admin-products.module').then(f => f.AdminProductsModule)},
  { path: 'categories', loadChildren: () => import('./admin-categories/admin-categories.module').then(f => f.AdminCategoriesModule)},
  { path: 'colors', loadChildren: () => import('./admin-colors/admin-colors.module').then(f => f.AdminColorsModule)},
  { path: 'sizes', loadChildren: () => import('./admin-sizes/admin-sizes.module').then(f => f.AdminSizesModule)},
  { path: '',component:AdminOverviewComponent},
  { path: 'imageupload',component:AdminProductImagesUploadComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }