import {
  AfterViewInit,
  Component,
  DestroyRef,
  inject,
  signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';

import { LanguageService } from '../../services/language.service';
import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements AfterViewInit {
  languageService = inject(LanguageService);
  navbarService = inject(NavbarService);

  private platformId = inject(PLATFORM_ID);
  private destroyRef = inject(DestroyRef);

  activeSection = signal('header');

  ngAfterViewInit(): void {
    // document only exists in the browser
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const main = document.querySelector('main');

    if (!main) {
      return;
    }

    const sections = main.querySelectorAll(':scope > section');

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          this.activeSection.set(
            visibleSections[0].target.id
          );
        }
      },
      {
        root: main,
        threshold: 0.6,
      }
    );

    sections.forEach((section) => observer.observe(section));

    this.destroyRef.onDestroy(() => {
      observer.disconnect();
    });
  }
}