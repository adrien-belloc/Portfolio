import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Header } from './components/header/header';
import { Navbar } from './components/navbar/navbar';
import { Skills } from './components/skills/skills';
import { Projects } from './components/projects/projects';
import { Background } from './components/background/background';
import { Contact } from './components/contact/contact';

import { NavbarService } from './services/navbar.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Navbar,
    Header,
    Skills,
    Projects,
    Background,
    Contact,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  navbarService = inject(NavbarService);
}