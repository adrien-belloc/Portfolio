import { Injectable, signal } from '@angular/core';

import { en } from '../i18n/en';
import { fr } from '../i18n/fr';

type Language = 'en' | 'fr';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  language = signal<Language>('en');

  translations = signal(en);

  setLanguage(language: Language) {
    this.language.set(language);

    this.translations.set(
      language === 'en' ? en : fr
    );
  }
}