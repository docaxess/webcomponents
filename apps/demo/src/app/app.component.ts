import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TooltipComponent } from './pages/tooltip/tooltip.component';
import { HeaderComponent } from './pages/header/header.component';
import { AsideComponent } from './pages/aside/aside.component';

@Component({
  standalone: true,
  imports: [ RouterOutlet,TooltipComponent, HeaderComponent , AsideComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  title = 'demo';
}
