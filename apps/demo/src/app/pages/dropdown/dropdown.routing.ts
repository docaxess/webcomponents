import { Route } from '@angular/router';
import { Dropdown1Component } from './dropdown1/dropdown1.component';

export const dropdownRoutes: Route[] = [
  {
    path: '',
    component: Dropdown1Component,
  },
  {
    path: 'dropdown1',
    component: Dropdown1Component,
  },
];
