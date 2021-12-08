import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';
import { ProductsGridComponent } from './products/products-grid/products-grid.component';

const routes: Routes = [
  {path: 'products', loadChildren: () =>
      import('./products/products.module')
        .then(f => f.ProductsModule)},
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
  { path: '',component:ProductsGridComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
