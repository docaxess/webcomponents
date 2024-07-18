import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { defineCustomElements as tooltipElements } from '../../../dist/packages/tooltip/loader';
import { defineCustomElements as toggleElements } from '../../../dist/packages/toggle/loader';
import { defineCustomElements as checkboxElements } from '../../../dist/packages/checkbox/loader';
import { defineCustomElements as loginElements } from '../../../dist/packages/login/loader';
import { defineCustomElements as dropdownElements } from '../../../dist/packages/dropdown/loader';

tooltipElements(window);
toggleElements(window);
checkboxElements(window);
loginElements(window);
dropdownElements(window);


bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err),
);
