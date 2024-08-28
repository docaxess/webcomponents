import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  PLATFORM_ID,
} from '@angular/core';
import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { CodeSnippetComponent } from '../../../features/code-snippet/code-snippet.component';
import { ViewSwitcherComponent } from '../../../features/view-switcher/view-switcher.component';
import { BreadcrumbComponent } from '../../../features/breadcrumb/breadcrumb.component';
import { DocSearchBarComponent } from '../doc-search-bar/doc-search-bar.component';
import { defineCustomElements as SearchBarElements } from '@ipedis/combobox/loader';

@Component({
  selector: 'app-search-bar1',
  standalone: true,
  imports: [
    CommonModule,
    CodeSnippetComponent,
    ViewSwitcherComponent,
    BreadcrumbComponent,
    DocSearchBarComponent,
  ],
  templateUrl: './search-bar1.component.html',
  styleUrl: './search-bar1.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SearchBar1Component {
  currentView: 'preview' | 'code' | 'doc' = 'preview';
  switchView(view: 'preview' | 'code' | 'doc'): void {
    this.currentView = view;
  }
  switcherTitle = 'Search-bar 1';

  searchCode = `   
      <ip-search-bar
        placeholder="Please enter a keyword !"
        suggestions-data='[
          "Accessibility Web ",
          "Accessibility Website",
          "Accessibility assistive technologies",
          "Accessibility ressources",
          "Accessibility barrier-free solutions",
          "Accessibility Web content guidelines"
          ]'
      >
      </ip-search-bar>
  `;

  constructor() {
    if (isPlatformBrowser(inject(PLATFORM_ID)) && SearchBarElements) {
      SearchBarElements(inject(DOCUMENT).defaultView as Window);
    }
  }
}