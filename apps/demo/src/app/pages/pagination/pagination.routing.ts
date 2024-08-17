import { Route } from '@angular/router';
import { PaginationComponent } from './pagination.component';
import { Pagination1Component } from './pagination1/pagination1.component';

export const paginationRoutes: Route[] = [
  {
    path: '',
    component: PaginationComponent,
  },
  {
    path: 'pagination1',
    component: Pagination1Component,
  },
];
