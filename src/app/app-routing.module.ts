import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/services/guard/auth.guard';
const routes: Routes = [
  {
    path: 'login',
        loadChildren: () =>
          import('./modules/authentication/authentication.module')
            .then(m => m.AuthenticationModule)
  } ,
  {
  path:'products',
    canActivate: [AuthGuard],
      loadChildren: () =>
        import('./modules/products/product.module')
          .then(m => m.ProductModule)
} ,

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
