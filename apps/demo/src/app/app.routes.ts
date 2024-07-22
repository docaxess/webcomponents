import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TooltipComponent } from './pages/tooltip/tooltip.component';
import { DropdownComponent } from './pages/dropdown/dropdown.component';

export const appRoutes: Route[] = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'tooltip', component: TooltipComponent },
    { path: 'dropdown', component: DropdownComponent },
    { path: '**', redirectTo: '' },
];