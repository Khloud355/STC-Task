import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditComponent } from './components/add-edit-product/add-edit-product.component';
import { AdminViewComponent } from './components/admin-view/admin-view.component';

const routes: Routes = [
  {path:'', component:AdminViewComponent},
  // {path:'edit',component:AddEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
