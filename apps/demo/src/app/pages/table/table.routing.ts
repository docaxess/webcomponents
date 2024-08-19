import { TableComponent } from './table.component';
import { Table1Component } from './table1/table1.component';
import { Routes } from '@angular/router';

export const tableRoutes: Routes = [
  {
    path: '',
    component: TableComponent,
  },
  {
    path: 'table1',
    component: Table1Component,
  },
];
