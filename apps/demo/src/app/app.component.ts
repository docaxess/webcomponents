import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './pages/header/header.component';
import { AsideComponent } from './pages/aside/aside.component';
import { FooterComponent } from './pages/footer/footer.component';

@Component({
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, AsideComponent, FooterComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  title = 'demo';
}
