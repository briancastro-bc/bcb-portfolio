import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'main'
  },
  {
    path: 'main',
    data: {
      title: 'Brian Castro'
    },
    loadComponent: () => import('./presentation/home/home.component'),
  }
];
