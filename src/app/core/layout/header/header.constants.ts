import { NavigationItem } from '@app/core/layout/header/header.model';

export const HEADER_NAVIGATION: readonly NavigationItem[] = [
  {
    label: 'Home',
    route: '/'
  },
  {
    label: 'Perfis',
    route: '/profiles'
  },
  {
    label: 'Catálogo',
    route: '/catalog'
  },
  {
    label: 'Projetos',
    route: '/projects'
  },
  {
    label: 'Case Studies',
    route: '/case-studies'
  }
];