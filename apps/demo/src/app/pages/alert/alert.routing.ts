import { Route } from '@angular/router';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { InfoAlertComponent } from './info-alert/info-alert.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { DangerAlertComponent } from './danger-alert/danger-alert.component';

export const alertRouting: Route[] = [
  {
    path: '',
    component: SuccessAlertComponent,
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
