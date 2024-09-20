import { Route } from '@angular/router';
import { Tooltip1Component } from './tooltip1/tooltip1.component';
import { Tooltip2Component } from './tooltip2/tooltip2.component';
import { Tooltip3Component } from './tooltip3/tooltip3.component';

export const tooltipRoutes: Route[] = [
  {
    path: '',
    component: Tooltip1Component,
  },
  {
    path: 'tooltip1',
    component: Tooltip1Component,
  },
  {
    path: 'tooltip2',
    component: Tooltip2Component,
  },
  {
    path: 'tooltip3',
    component: Tooltip3Component,
  },
];
