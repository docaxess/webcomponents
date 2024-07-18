import { Route } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TooltipComponent } from './pages/tooltip/tooltip.component';

export const appRoutes: Route[] = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: '**', redirectTo: '' },
    {path:'tooltip', component: TooltipComponent}
];
