import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanManageCategoriesGuard } from '../auth/guards/can-manage-categories.guard';
import { CanManageColorsGuard } from '../auth/guards/can-manage-colors.guard';
import { CanManageProductsGuard } from '../auth/guards/can-manage-products.guard';
import { CanManageSizesGuard } from '../auth/guards/can-manage-sizes.guard';
import { AdminOverviewComponent } from './admin-overview/admin-overview.component';

const routes: Routes = [
  { 
    path: 'products',
    loadChildren: () => import('./admin-products/admin-products.module').then(f => f.AdminProductsModule),
    canActivate:[CanManageProductsGuard]
  },
  { 
    path: 'categories', 
    loadChildren: () => import('./admin-categories/admin-categories.module').then(f => f.AdminCategoriesModule),
    canActivate:[CanManageCategoriesGuard]
  },
  { 
    path: 'colors',
    loadChildren: () => import('./admin-colors/admin-colors.module').then(f => f.AdminColorsModule),
    canActivate:[CanManageColorsGuard]
  },
  { 
    path: 'sizes',
    loadChildren: () => import('./admin-sizes/admin-sizes.module').then(f => f.AdminSizesModule),
    canActivate:[CanManageSizesGuard]
  },
  { path: '',component:AdminOverviewComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }