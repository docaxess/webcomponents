import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './pages/header/header.component';
import { AsideComponent } from './pages/aside/aside.component';
import { CodeSnippetComponent } from './pages/code-snippet/code-snippet.component';

@Component({
  standalone: true,
  imports: [ RouterOutlet, HeaderComponent , AsideComponent, CodeSnippetComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  title = 'demo';
}
