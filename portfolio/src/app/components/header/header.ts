import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  imports: [],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  languageService = inject(LanguageService);
}