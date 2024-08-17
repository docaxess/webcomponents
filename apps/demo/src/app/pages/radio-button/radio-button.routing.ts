import { Route } from '@angular/router';
import { RadioButtonComponent } from './radio-button.component';
import { Radio1ButtonComponent } from './radio1/radio1.component';

export const radioButtonRoutes: Route[] = [
  {
    path: '',
    component: RadioButtonComponent,
  },
  {
    path: 'radio-button1',
    component: Radio1ButtonComponent,
  },
];
