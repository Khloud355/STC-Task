import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import {TranslateLoader, TranslateModule, TranslateStore} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { ProductModule } from './modules/products/product.module';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
     BrowserAnimationsModule,
    CoreModule,
    AppRoutingModule,
    TranslateModule,
    HttpClientModule,
    ProductModule,
    TranslateModule.forChild({
      loader: {
          provide: TranslateLoader,
          useFactory: createtranslate,
          deps: [HttpClient]
      }
    }),
  ],
  providers: [TranslateStore],
  exports:[MatSlideToggleModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function createtranslate(http:HttpClient){
  return new TranslateHttpLoader(http,'./assets/i18n/','.json')
}

