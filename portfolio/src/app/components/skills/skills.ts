import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  imports: [],
  selector: 'app-skills',
  styleUrl: './skills.css',
  templateUrl: './skills.html',
})
export class Skills {
  languageService = inject(LanguageService);
}
