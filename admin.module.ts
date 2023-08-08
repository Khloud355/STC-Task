import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminViewComponent } from './components/admin-view/admin-view.component';
import { AddEditComponent } from './components/add-edit-product/add-edit-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { MatTableModule } from '@angular/material/table';
import { AdminRoutingModule } from './admin-routing.module';


@NgModule({
  declarations: [
    AdminViewComponent,
    AddEditComponent
  ],
  imports: [
    CommonModule,
    MatPaginatorModule,
    HttpClientModule,
    MatTooltipModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule,
    NgbRatingModule,
    AdminRoutingModule,
    ToastrModule.forRoot(),
    TranslateModule.forChild({
      // loader: {
      //     provide: TranslateLoader,
      //     useFactory: createtranslate,
      //     deps: [HttpClient]
      // }
    }),
  ]
})
export class AdminModule { }
