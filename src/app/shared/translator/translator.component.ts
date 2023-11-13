import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'tweempus-translator',
  templateUrl: './translator.component.html',
  styleUrls: ['./translator.component.scss']
})
export class TranslatorComponent {
  showLanguageMenu = false;
  lang = this._translocoService.getActiveLang();

  constructor(private _translocoService: TranslocoService) {}
  toggleLanguageMenu() {
    this.showLanguageMenu = !this.showLanguageMenu;
  }

  clickTranslate(lang: string) {
    this._translocoService.setActiveLang(lang);
    this.showLanguageMenu = false;
  }
}





