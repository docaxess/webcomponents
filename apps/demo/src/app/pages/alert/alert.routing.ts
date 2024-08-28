import { Route } from '@angular/router';
import { AlertComponent } from './alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { InfoAlertComponent } from './info-alert/info-alert.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { DangerAlertComponent } from './danger-alert/danger-alert.component';

export const alertRouting: Route[] = [
  {
    path: '',
    component: AlertComponent,
  },
  {
    path: 'success-alert',
    component: SuccessAlertComponent,
  },
  {
    path: 'info-alert',
    component: InfoAlertComponent,
  },
  {
    path: 'warning-alert',
    component: WarningAlertComponent,
  },
  {
    path: 'danger-alert',
    component: DangerAlertComponent,
  },
];
