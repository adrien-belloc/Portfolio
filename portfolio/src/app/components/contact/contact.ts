import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  imports: [],
  selector: 'app-contact',
  styleUrl: './contact.css',
  templateUrl: './contact.html',
})
export class Contact {
  languageService = inject(LanguageService);
}
