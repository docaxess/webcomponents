import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// todo - import the custom elements in external modules, preferably in async manner
import { defineCustomElements as tooltipElements } from '@ipedis/tooltip/loader';
import { defineCustomElements as toggleElements } from '@ipedis/toggle/loader';
import { defineCustomElements as checkboxElements } from '@ipedis/checkbox/loader';
import { defineCustomElements as loginElements } from '@ipedis/login/loader';
import { defineCustomElements as dropdownElements } from '@ipedis/dropdown/loader';
import { defineCustomElements as radioElements } from '@ipedis/radio/loader';
import { defineCustomElements as paginationElements } from '@ipedis/pagination/loader';


tooltipElements(window);
toggleElements(window);
checkboxElements(window);
loginElements(window);
dropdownElements(window);
radioElements(window);
paginationElements(window);

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err),
);

