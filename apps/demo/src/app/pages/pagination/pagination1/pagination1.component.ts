import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  inject,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { defineCustomElements as paginationElements } from '@ipedis/pagination/loader';
import { CodeSnippetComponent } from '../../../features/code-snippet/code-snippet.component';
import { DocPaginationComponent } from '../doc-pagination/doc-pagination.component';
import { RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../../../features/breadcrumb/breadcrumb.component';
import { ViewSwitcherComponent } from '../../../features/view-switcher/view-switcher.component';

@Component({
  selector: 'app-pagination1',
  standalone: true,
  imports: [
    CommonModule,
    CodeSnippetComponent,
    DocPaginationComponent,
    RouterLink,
    BreadcrumbComponent,
    ViewSwitcherComponent,
  ],
  templateUrl: './pagination1.component.html',
  styleUrl: './pagination1.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Pagination1Component {
  codeSnippet = `
    <ip-pagination
      total-pages="25"
      current-page="5"
      visible-pages="7"
    >
    </ip-pagination>
  `;
  currentView: 'preview' | 'code' | 'doc' = 'preview';
  switchView(view: 'preview' | 'code' | 'doc'): void {
    this.currentView = view;
  }
  switcherTitle = 'Pagination 1';
  constructor() {
    if (isPlatformBrowser(inject(PLATFORM_ID)) && paginationElements) {
      paginationElements(inject(DOCUMENT).defaultView as Window);
    }
  }
}
