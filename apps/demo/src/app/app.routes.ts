import { Route } from '@angular/router';
export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'tooltip',
    loadComponent: () =>
      import('./pages/tooltip/tooltip.component').then(
        (m) => m.TooltipComponent,
      ),
  },
  {
    path: 'tooltip1',
    loadComponent: () =>
      import('./pages/tooltip/tooltip1/tooltip1.component').then(
        (m) => m.Tooltip1Component,
      ),
  },

  {
    path: 'dropdown',
    loadComponent: () =>
      import('./pages/dropdown/dropdown.component').then(
        (m) => m.DropdownComponent,
      ),
  },
  {
    path: 'toggle',
    loadComponent: () =>
      import('./pages/toggle/toggle.component').then((m) => m.ToggleComponent),
  },
  {
    path: 'radio-button',
    loadComponent: () =>
      import('./pages/radio-button/radio-button.component').then(
        (m) => m.RadioButtonComponent,
      ),
  },
  {
    path: 'checkbox',
    loadComponent: () =>
      import('./pages/checkbox/checkbox.component').then(
        (m) => m.CheckboxComponent,
      ),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'pagination',
    loadComponent: () =>
      import('./pages/pagination/pagination.component').then(
        (m) => m.PaginationComponent,
      ),
  },
  {
    path: 'table',
    loadComponent: () =>
      import('./pages/table/table.component').then((m) => m.TableComponent),
  },
  {
    path: 'tab-panel',
    loadComponent: () =>
      import('./pages/tab-panel/tab-panel.component').then(
        (m) => m.TabPanelComponent,
      ),
  },
  { path: '**', redirectTo: '' },
];
