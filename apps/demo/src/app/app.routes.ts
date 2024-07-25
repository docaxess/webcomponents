import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TooltipComponent } from './pages/tooltip/tooltip.component';
import { DropdownComponent } from './pages/dropdown/dropdown.component';
import { ToggleComponent } from './pages/toggle/toggle.component';
import { RadioButtonComponent } from './pages/radio-button/radio-button.component';
import { CheckboxComponent } from './pages/checkbox/checkbox.component';
import { LoginComponent } from './pages/login/login.component';
import { PaginationComponent } from './pages/pagination/pagination.component';


export const appRoutes: Route[] = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'tooltip', component: TooltipComponent },
    { path: 'dropdown', component: DropdownComponent },
    { path: 'toggle', component: ToggleComponent },
    { path: 'radio-button', component: RadioButtonComponent },
    { path: 'checkbox', component: CheckboxComponent },
    { path: 'login', component: LoginComponent },
    { path: 'pagination', component: PaginationComponent },
    { path: '**', redirectTo: '' },
];
