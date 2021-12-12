import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';
import { CartViewComponent } from './cart/cart-view/cart-view.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {
    path: 'products', loadChildren: () =>
      import('./products/products.module')
        .then(f => f.ProductsModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module')
      .then(m => m.AuthModule)
  },
  {path: 'category', loadChildren: () =>
    import('./categories/categories.module')
      .then(f => f.CategoriesModule)},
  {path: 'images', loadChildren: () =>
    import('./images/images.module')
    .then(f => f.ImagesModule)},
  {path: 'admin', loadChildren: () =>
    import('./admin/admin.module')
      .then(f => f.AdminModule)},
  { path: '',component:HomepageComponent},
  { path: 'cart', component: CartViewComponent },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module')
      .then(m => m.AccountModule), canActivate:[AuthGuard]
  },
  {
    path: 'information',
    loadChildren: () => import('./information/information.module').then(m => m.InformationModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
