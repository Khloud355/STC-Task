import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCartComponent } from './product-cart/product-cart.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ProductCartComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    MatTooltipModule,
    NgbRatingModule
  ],
  exports:[
    ProductCartComponent
  ]
})
export class SharedModule { }
