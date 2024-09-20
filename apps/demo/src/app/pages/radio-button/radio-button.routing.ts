import { Route } from '@angular/router';
import { Radio1ButtonComponent } from './radio1/radio1.component';

export const radioButtonRoutes: Route[] = [
  {
    path: '',
    component: Radio1ButtonComponent,
  },
  {
    path: 'radio-button1',
    component: Radio1ButtonComponent,
  },
];
