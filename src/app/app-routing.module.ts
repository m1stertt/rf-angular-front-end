import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{path: 'auth',
loadChildren: () => import('./auth/auth.module')
  .then(m => m.AuthModule)
},{path: 'category', loadChildren: () =>
    import('./categories/categories.module')
      .then(f => f.CategoriesModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
