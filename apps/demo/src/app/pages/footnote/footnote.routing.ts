import { Route } from '@angular/router';
import { FootnoteComponent } from './footnote.component';
import { Footnote1Component } from './footnote1/footnote1.component';

export const footnoteRoutes: Route[] = [
  {
    path: '',
    component: FootnoteComponent,
  },
  {
    path: 'footnote1',
    component: Footnote1Component,
  },
];
