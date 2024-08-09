import { Route } from '@angular/router';
import { ModalComponent } from './modal.component';
import { Modal1Component } from './modal1/modal1.component';

export const modalRoutes: Route[] = [
  {
    path: '',
    component: ModalComponent,
  },
  {
    path: 'modal1',
    component: Modal1Component,
  },
];
