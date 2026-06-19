import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('@core/layout/shell/shell.component').then(
        (m) => m.ShellComponent
      ),
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import(
            '@features/home/presentation/pages/home-page/home-page.component'
          ).then((m) => m.HomePageComponent),
      },
      {
        path: 'profiles',
        loadComponent: () =>
          import(
            '@features/home/presentation/components/profile-switcher/profile-switcher.component'
          ).then((m) => m.ProfileSwitcherComponent),
      },
      {
        path: 'catalog',
        loadComponent: () =>
          import(
            '@features/home/presentation/components/catalog-row/catalog-row.component'
          ).then((m) => m.CatalogRowComponent),
      },
      {
        path: 'projects',
        loadComponent: () =>
          import(
            '@features/home/presentation/components/project-card/project-card.component'
          ).then((m) => m.ProjectCardComponent),
      },
      {
        path: 'case-studies',
        loadComponent: () =>
          import(
            '@features/home/presentation/components/case-study-card/case-study-card.component'
          ).then((m) => m.CaseStudyCardComponent),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];