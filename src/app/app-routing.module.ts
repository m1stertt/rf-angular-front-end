import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';

const routes: Routes = [
  {path: 'products', loadChildren: () =>
      import('./products/products.module')
        .then(f => f.ProductsModule), canActivate: [AuthGuard]},
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module')
      .then(m => m.AuthModule)
  },
  { path: '**',redirectTo: '/products/create'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
