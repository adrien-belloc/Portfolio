import { Component, computed, inject, signal } from '@angular/core';
import { LanguageService } from '../../services/language.service';

type ProjectCategory = 'professional' | 'academic';

interface ProjectTechnology {
  name: string;
  icon: string;
}

interface Project {
  id: string;
  category: ProjectCategory;
  title: string;
  description: {
    fr: string;
    en: string;
  };
  technologies: ProjectTechnology[];
  images: string[];
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  languageService = inject(LanguageService);

  activeCategory = signal<ProjectCategory>('professional');

  activeProject = signal<string | null>('printing-company');

  projects: Project[] = [
    {
      id: 'printing-company',
      category: 'professional',
      title: 'Imprimerie Trèfle',
      description:
        {
          fr: 'Un site web pour une imprimerie, incluant la gestion des commandes et de l\'inventaire ainsi que la gestion des congés des employés.',
          en: 'A website for a printing company, including order and inventory management as well as employee leave management.',
        },
      technologies: [
        {
          name: 'PHP',
          icon: 'devicon-php-plain',
        },
        {
          name: 'JavaScript',
          icon: 'devicon-javascript-plain',
        },
        {
          name: 'MySQL',
          icon: 'devicon-mysql-plain',
        },
        {
          name: 'HTML',
          icon: 'devicon-html5-plain',
        },
        {
          name: 'CSS',
          icon: 'devicon-css3-plain',
        },
      ],
      images: [
        '/images/projects/imprimerie-trefle-1.png',
        '/images/projects/imprimerie-trefle-2.png',
        '/images/projects/imprimerie-trefle-3.png',
      ],
    },

    {
      id: 'butcher-shop',
      category: 'professional',
      title: 'Showcase Website',
      description:
        {
          fr: 'Un site web de présentation pour un boucher, présentant ses produits et services.',
          en: 'A showcase website for a butcher shop presenting its products and services.',
        },
      technologies: [
        {
          name: 'Python',
          icon: 'devicon-python-plain',
        },
        {
          name: 'Flask',
          icon: 'devicon-flask-original',
        },
        {
          name: 'JavaScript',
          icon: 'devicon-javascript-plain',
        },
        {
          name: 'Vue.js',
          icon: 'devicon-vuejs-plain',
        },
        {
          name: 'HTML',
          icon: 'devicon-html5-plain',
        },
        {
          name: 'CSS',
          icon: 'devicon-css3-plain',
        },
      ],
      images: [
        '/images/projects/butcher-shop-1.png',
        '/images/projects/butcher-shop-2.png',
      ],
    },

    {
      id: 'vakna',
      category: 'academic',
      title: 'Vakna',
      description:
        {
          fr: 'Une application mobile pour gérer les activités et tâches personnelles.',
          en: 'A mobile application for managing personal activities and tasks.',
        },
      technologies: [
        {
          name: 'Kotlin',
          icon: 'devicon-kotlin-plain',
        },
        {
          name: 'Android Studio',
          icon: 'devicon-androidstudio-plain',
        },
      ],
      images: [
        '/images/projects/vakna-1.png',
        '/images/projects/vakna-2.png',
      ],
    },

    {
      id: 'e-sporter',
      category: 'academic',
      title: 'E-Sporter',
      description:
        {
          fr: 'Une plateforme pour organiser et gérer les tournois de jeux vidéo.',
          en: 'A platform for organizing and managing gaming tournaments.',
        },
      technologies: [
        {
          name: 'Java',
          icon: 'devicon-java-plain',
        },
        {
          name: 'SQLite',
          icon: 'devicon-sqlite-plain',
        },
      ],
      images: [
        '/images/projects/e-sporter-1.png',
        '/images/projects/e-sporter-2.png',
      ],
    },
  ];

  filteredProjects = computed(() =>
    this.projects.filter(
      (project) => project.category === this.activeCategory()
    )
  );

  setCategory(category: ProjectCategory): void {
    this.activeCategory.set(category);

    const firstProject = this.projects.find(
      (project) => project.category === category
    );

    this.activeProject.set(firstProject?.id ?? null);
  }

  selectProject(id: string): void {
    this.activeProject.update((current) =>
      current === id ? null : id
    );
  }
}