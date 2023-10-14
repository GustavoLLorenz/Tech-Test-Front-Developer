import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-change-lang',
  templateUrl: './change-lang.component.html',
  styleUrls: ['./change-lang.component.css']
})
export class ChangeLangComponent {
  selectLang: string = 'PT-BR';
  show: boolean = false
  constructor(
    public translate: TranslateService,
    // public localStorage: LocalStorageService,
    // public authService: AuthService,
  ) {
    translate.addLangs(['en', 'pt', 'es', 'fr']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang?.match(/en|es/) ? browserLang || '' : 'en');
    this.handlerSelectedLanguage(
      browserLang?.match(/en|es/) ? browserLang || '' : 'en'
    );
  }

  ngOnInit(): void {
    const storedLanguage = localStorage.getItem('selectedLanguage');
    if (storedLanguage) {
      this.translate.use(storedLanguage);
      this.handlerSelectedLanguage(storedLanguage);
    }

  }
  expand() {
    this.show = !this.show
  }
  changeLanguage(event: any) {
    const {target: {value} } = event

    this.translate.use(value);
    this.handlerSelectedLanguage(value);
    localStorage.setItem('selectedLanguage', value);
  }

  handlerSelectedLanguage(lang: string) {
    if (lang === 'en') {
      this.selectLang = 'EN-US';
      return;
    }
    if (lang === 'es') {
      this.selectLang = 'ES-ES';
      return;
    }


  }
  
}
