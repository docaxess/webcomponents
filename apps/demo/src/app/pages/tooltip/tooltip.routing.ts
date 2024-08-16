import { Route } from '@angular/router';
import { TooltipComponent } from './tooltip.component';
import { Tooltip1Component } from './tooltip1/tooltip1.component';

export const tooltipRoutes: Route[] = [
    {
        path: '',
        component: TooltipComponent,
    },
    {
        path: 'tooltip1',
        component: Tooltip1Component
    }
]
