import { Route } from '@angular/router';
import { Accordion1Component } from './accordion1/accordion1.component';

export const accordionRoutes: Route[] = [
  {
    path: '',
    component: Accordion1Component,
  },
  {
    path: 'accordion1',
    component: Accordion1Component,
  },
];
