import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  imports: [],
  selector: 'app-background',
  styleUrl: './background.css',
  templateUrl: './background.html',
})
export class Background {
  languageService = inject(LanguageService);
}
