import { TabPanel1Component } from './tab-panel1/tab-panel1.component';
import { Route } from '@angular/router';

export const tabPanelRoutes: Route[] = [
  {
    path: '',
    component: TabPanel1Component,
  },
  {
    path: 'tab-panel1',
    component: TabPanel1Component,
  },
];
