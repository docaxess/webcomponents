import { Route } from '@angular/router';
import { Checkbox1Component } from './checkbox1/checkbox1.component';
import { CheckboxListComponent } from './checkbox-list/checkbox-list.component';

export const checkboxRoutes: Route[] = [
  {
    path: '',
    component: Checkbox1Component,
  },
  {
    path: 'checkbox1',
    component: Checkbox1Component,
  },
  {
    path: 'checkbox-list',
    component: CheckboxListComponent,
  },
];
