import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path:'admin-view',
        loadChildren: () =>
          import('./admin/admin.module')
            .then(m => m.AdminModule)
  } ,
  {

      path:'user-view',
          loadChildren: () =>
            import('./user/user.module')
              .then(m => m.UserModule)

  }
];
@NgModule(
  {
    declarations: [],
    imports: [
      UserModule,
      RouterModule.forChild(routes),
      CommonModule,
      AdminModule
    ],
    providers: [

    ],

  })

export class ProductModule {

}
// export function createtranslate(http:HttpClient){
//   return new TranslateHttpLoader(http,'./assets/i18n/','.json')
// }
