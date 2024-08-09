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
import { DocModalComponent } from '../doc-modal/doc-modal.component';
import { BreadcrumbComponent } from '../../../features/breadcrumb/breadcrumb.component';
import { defineCustomElements as dropdownElements } from '@ipedis/dropdown/loader';

@Component({
  selector: 'app-modal1',
  standalone: true,
  imports: [
    CommonModule,
    CodeSnippetComponent,
    ViewSwitcherComponent,
    DocModalComponent,
    BreadcrumbComponent,
  ],
  templateUrl: './modal1.component.html',
  styleUrl: './modal1.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Modal1Component {
  ModalCodeSnippet = `
  <ip-dropdown
    dropdown-title="Country"
    placeholder="Select a country:"
    items-options='["Mauritius", "France", "Germany", "Zimbabwe"]'
  >
  </ip-dropdown>
  `;
  currentView: 'preview' | 'code' | 'doc' = 'preview';
  switchView(view: 'preview' | 'code' | 'doc'): void {
    this.currentView = view;
  }
  switcherTitle = 'Modal 1';
  constructor() {
    if (isPlatformBrowser(inject(PLATFORM_ID)) && dropdownElements) {
      dropdownElements(inject(DOCUMENT).defaultView as Window);
    }
  }
}
