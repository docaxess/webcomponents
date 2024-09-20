import { Route } from '@angular/router';
import { SearchBar1Component } from './search-bar1/search-bar1.component';

export const searchBarRouting: Route[] = [
  {
    path: '',
    component: SearchBar1Component,
  },
  {
    path: 'search-bar1',
    component: SearchBar1Component,
  },
];
