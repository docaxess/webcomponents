import { Route } from '@angular/router';
import { Stepper1Component } from './stepper1/stepper1.component';

export const stepperRouting: Route[] = [
  {
    path: '',
    component: Stepper1Component,
  },
  {
    path: 'stepper1',
    component: Stepper1Component,
  },
];
