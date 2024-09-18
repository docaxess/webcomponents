import { Route } from '@angular/router';
import { Footnote1Component } from './footnote1/footnote1.component';

export const footnoteRoutes: Route[] = [
  {
    path: '',
    component: Footnote1Component,
  },
  {
    path: 'footnote1',
    component: Footnote1Component,
  },
];
