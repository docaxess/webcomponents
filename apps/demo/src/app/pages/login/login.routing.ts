import { Route } from '@angular/router';
import { Login1Component } from './login1/login1.component';
import { Login2Component } from './login2/login2.component';

export const loginRoutes: Route[] = [
  {
    path: '',
    component: Login1Component,
  },
  {
    path: 'login1',
    component: Login1Component,
  },
  {
    path: 'login2',
    component: Login2Component,
  },
];
