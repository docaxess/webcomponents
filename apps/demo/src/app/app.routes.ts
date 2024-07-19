import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TooltipComponent } from './pages/tooltip/tooltip.component';
import { NgModule } from '@angular/core';

export const appRoutes: Route[] = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    {path:'tooltip', component: TooltipComponent},
    { path: '**', redirectTo: '' },
];
