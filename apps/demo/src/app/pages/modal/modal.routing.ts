import { Route } from '@angular/router';
import { Modal1Component } from './modal1/modal1.component';

export const modalRoutes: Route[] = [
  {
    path: '',
    component: Modal1Component,
  },
  {
    path: 'modal1',
    component: Modal1Component,
  },
];
