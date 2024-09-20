import { Route } from '@angular/router';
import { Pagination1Component } from './pagination1/pagination1.component';

export const paginationRoutes: Route[] = [
  {
    path: '',
    component: Pagination1Component,
  },
  {
    path: 'pagination1',
    component: Pagination1Component,
  },
];
