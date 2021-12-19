import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';
import { CanManageCategoriesGuard } from './auth/guards/can-manage-categories.guard';
import { CanManageColorsGuard } from './auth/guards/can-manage-colors.guard';
import { CanManageProductsGuard } from './auth/guards/can-manage-products.guard';
import { CanManageSizesGuard } from './auth/guards/can-manage-sizes.guard';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  { path: 'products', loadChildren: () => import('./products/products.module').then(f => f.ProductsModule) },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'category', loadChildren: () => import('./categories/categories.module').then(f => f.CategoriesModule) },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(f => f.AdminModule),canActivate:[CanManageProductsGuard,CanManageColorsGuard,CanManageCategoriesGuard,CanManageSizesGuard] },
  { path: 'cart', loadChildren: () => import('./cart/cart.module').then(f => f.CartModule) },
  { path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule), canActivate:[AuthGuard] },
  { path: 'information', loadChildren: () => import('./information/information.module').then(m => m.InformationModule) },
  { path: '',component:HomepageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
