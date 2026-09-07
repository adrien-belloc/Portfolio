import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  isOpen = signal(true);

  toggle(): void {
    this.isOpen.update((open) => !open);
  }
}