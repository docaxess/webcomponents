import { Menu1Component } from './menu1/menu1.component';
import { Route } from '@angular/router';

export const menuRoutes: Route[] = [
  {
    path: '',
    component: Menu1Component,
  },
  {
    path: 'burger-menu',
    component: Menu1Component,
  },
];
