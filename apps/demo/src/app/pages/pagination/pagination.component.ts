import {ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, inject, PLATFORM_ID} from '@angular/core';
import {CommonModule, DOCUMENT, isPlatformBrowser} from '@angular/common';
import { CodeSnippetComponent } from '../code-snippet/code-snippet.component';
import { defineCustomElements as paginationElements } from '@ipedis/pagination/loader';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule, CodeSnippetComponent],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent {
  codeSnippet = `
<ip-pagination
  total-pages="25"
  current-page="5"
  visible-pages="7">
</ip-pagination>
  `
  constructor() {
    if (isPlatformBrowser(inject(PLATFORM_ID)) && paginationElements) {
      paginationElements(inject(DOCUMENT).defaultView as Window);
    }
  }
}
