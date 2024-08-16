import { Route } from '@angular/router';
import { AccordionComponent } from './accordion.component';
import { Accordion1Component } from './accordion1/accordion1.component';

export const accordionRoutes: Route[] = [
  {
    path: '',
    component: AccordionComponent,
  },
  {
    path: 'accordion1',
    component: Accordion1Component,
  },
];
