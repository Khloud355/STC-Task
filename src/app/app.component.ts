import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';
import { TranslateConfigService } from './core/services/translate/transalte-config.service';
import { AuthService } from './modules/authentication/services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  lang?: string;
  textDir?: string;
  constructor(
    private authService: AuthService,
    private router: Router,
    private translate: TranslateService,
    private LangService: TranslateConfigService,
    private transaletservice: TranslateService,
  ) {
    translate.setDefaultLang('en');
    this.lang = localStorage.getItem('language') || 'en';
    translate.use('en');
  }
  ngOnInit(): void {

    this.authService.autoLogin()
    // this.lang = localStorage.getItem('language') || 'en';
    // if (this.lang === "en") {

    //   this.textDir = 'ltr';
    //   this.transaletservice.use(this.lang)
    // }
    // else {
    //   this.textDir = 'rtl';
    //   this.transaletservice.use(this.lang)
    // }
  }
  // changeLang() {
  //   if (this.LangService.lang === 'en') {
  //     this.LangService.lang = 'ar';
  //     this.LangService.dir = 'rtl';
  //     this.LangService.changeLang(this.LangService.lang);
  //     localStorage.setItem('language', this.LangService.lang);
  //   } else {
  //     this.LangService.lang = 'en';
  //     this.LangService.dir = 'ltr';
  //     this.LangService.changeLang(this.LangService.lang);
  //     localStorage.setItem('language', this.LangService.lang);
  //   }
  // }
  title = 'stcProject';
}
