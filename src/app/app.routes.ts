import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./core/layout/shell/shell.component').then(
        (m) => m.ShellComponent
      ),
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./features/home-page/home-page.component').then(
            (m) => m.HomePageComponent
          ),
      },
      {
        path: 'profiles',
        loadComponent: () =>
          import('./features/profile-switcher/profile-switcher.component').then(
            (m) => m.ProfileSwitcherComponent
          ),
      },
      {
        path: 'catalog',
        loadComponent: () =>
          import('./features/catalog-row/catalog-row.component').then(
            (m) => m.CatalogRowComponent
          ),
      },
      {
        path: 'projects',
        loadComponent: () =>
          import('./features/project-card/project-card.component').then(
            (m) => m.ProjectCardComponent
          ),
      },
      {
        path: 'case-studies',
        loadComponent: () =>
          import('./features/case-study-card/case-study-card.component').then(
            (m) => m.CaseStudyCardComponent
          ),
      },
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];