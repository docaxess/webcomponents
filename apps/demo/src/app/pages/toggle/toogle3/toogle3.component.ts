import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  PLATFORM_ID,
} from '@angular/core';
import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { defineCustomElements as toggleElements } from '@ipedis/toggle/loader';
import { DocToogleComponent } from '../doc-toogle/doc-toogle.component';
import { CodeSnippetComponent } from '../../../features/code-snippet/code-snippet.component';
import { ViewSwitcherComponent } from '../../../features/view-switcher/view-switcher.component';
import { RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../../../features/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-toogle3',
  standalone: true,
  imports: [
    CommonModule,
    DocToogleComponent,
    CodeSnippetComponent,
    ViewSwitcherComponent,
    RouterLink,
    BreadcrumbComponent,
  ],
  templateUrl: './toogle3.component.html',
  styleUrl: './toogle3.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Toogle3Component {
  toggleWithIndicCode = `
    <ip-toggle size="small">
      <label class="switch-label" slot="switch-label"
        >Activate strong authentication</label
      >
      <p class="helper-text" slot="helper-text">This is the helper text.</p>
    </ip-toggle>
  `;
  currentView: 'preview' | 'code' | 'doc' = 'preview';
  switchView(view: 'preview' | 'code' | 'doc'): void {
    this.currentView = view;
  }
  switcherTitle = 'Toggle 3';

  constructor() {
    if (isPlatformBrowser(inject(PLATFORM_ID)) && toggleElements) {
      toggleElements(inject(DOCUMENT).defaultView as Window);
    }
  }
}