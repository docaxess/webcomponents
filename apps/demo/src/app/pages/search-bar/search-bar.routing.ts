import { SearchBarComponent } from './search-bar.component';
import { Route } from '@angular/router';
import { SearchBar1Component } from './search-bar1/search-bar1.component';

export const searchBarRouting: Route[] = [
  {
    path: '',
    component: SearchBarComponent,
  },
  {
    path: 'search-bar1',
    component: SearchBar1Component,
  },
];
