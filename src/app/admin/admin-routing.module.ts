import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminImagesUploadComponent } from './admin-images-upload/admin-images-upload.component';
import { AdminOverviewComponent } from './admin-overview/admin-overview.component';

const routes: Routes = [
  { path: 'products', loadChildren: () => import('./admin-products/admin-products.module').then(f => f.AdminProductsModule)},
  { path: 'categories', loadChildren: () => import('./admin-categories/admin-categories.module').then(f => f.AdminCategoriesModule)},
  { path: 'colors', loadChildren: () => import('./admin-colors/admin-colors.module').then(f => f.AdminColorsModule)},
  { path: 'sizes', loadChildren: () => import('./admin-sizes/admin-sizes.module').then(f => f.AdminSizesModule)},
  { path: 'accounts', loadChildren: () => import('./admin-accounts/admin-accounts.module').then(f => f.AdminAccountsModule)},
  { path: '',component:AdminOverviewComponent},
  { path: 'imageupload',component:AdminImagesUploadComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }