import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminOverviewComponent } from './admin-overview/admin-overview.component';

const routes: Routes = [
  {path: 'products', loadChildren: () =>
    import('./admin-products/admin-products.module')
      .then(f => f.AdminProductsModule)},
  { path: '',component:AdminOverviewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
