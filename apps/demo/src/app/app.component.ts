import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './pages/header/header.component';
import { AsideComponent } from './pages/aside/aside.component';
import { CodeSnippetComponent } from './pages/code-snippet/code-snippet.component';
import { filter } from 'rxjs';

@Component({
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    AsideComponent,
    CodeSnippetComponent,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  title = 'demo';
}
