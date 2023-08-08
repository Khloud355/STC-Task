import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemComponent } from './item/item.component';
import { UserViewComponent } from './user-view/user-view.component';

const routes: Routes = [
  {path:'',component:UserViewComponent},
  // {path:'/item',component:ItemComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
