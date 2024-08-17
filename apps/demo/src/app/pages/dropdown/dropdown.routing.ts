import { Route } from '@angular/router';
import { DropdownComponent } from './dropdown.component';
import { Dropdown1Component } from './dropdown1/dropdown1.component';

export const dropdownRoutes: Route[] = [
  {
    path: '',
    component: DropdownComponent,
  },
  {
    path: 'dropdown1',
    component: Dropdown1Component,
  },
];
