
import { Slider1Component } from "./slider-1/slider-1.component";
import { Routes } from "@angular/router";

export const sliderRoutes: Routes = [
    {
        path: '',
        component: Slider1Component,
    },
    {
        path: 'slider1',
        component: Slider1Component,
    }
];