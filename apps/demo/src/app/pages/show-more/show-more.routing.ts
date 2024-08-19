import { ShowMoreComponent } from './show-more.component';
import { ShowMore1Component } from './show-more1/show-more1.component';
import { Routes } from '@angular/router';

export const showMoreRoutes: Routes = [
  {
    path: '',
    component: ShowMoreComponent,
  },
  {
    path: 'show-more1',
    component: ShowMore1Component,
  },
];
