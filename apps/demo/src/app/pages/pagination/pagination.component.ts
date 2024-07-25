import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeSnippetComponent } from '../code-snippet/code-snippet.component';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule, CodeSnippetComponent],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PaginationComponent {
  codeSnippet = `
  <ip-pagination
    total-pages="25"
    current-page="5"
    visible-pages="7">
  </ip-pagination>
  `
}
