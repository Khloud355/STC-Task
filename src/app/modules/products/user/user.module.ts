import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ToastrModule } from 'ngx-toastr';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { UserRoutingModule } from './user-routing.module';
import { UserViewComponent } from './user-view/user-view.component';
import { ItemComponent } from './item/item.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import {MatTooltipModule} from '@angular/material/tooltip';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    UserViewComponent,
    ItemComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    MatPaginatorModule,
    HttpClientModule,
    MatTooltipModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule,
    NgbRatingModule,
    NgSelectModule,
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
export class UserModule { }
