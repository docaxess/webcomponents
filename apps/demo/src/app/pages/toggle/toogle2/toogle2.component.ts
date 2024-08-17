import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  Input,
  PLATFORM_ID,
} from '@angular/core';
import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { defineCustomElements as toggleElements } from '@ipedis/toggle/loader';
import { ModalComponent } from '../../../features/modal/modal.component';
import { DocToogleComponent } from '../doc-toogle/doc-toogle.component';
import { CodeSnippetComponent } from '../../../features/code-snippet/code-snippet.component';
import { RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../../../features/breadcrumb/breadcrumb.component';
import { ViewSwitcherComponent } from '../../../features/view-switcher/view-switcher.component';

@Component({
  selector: 'app-toogle2',
  standalone: true,
  imports: [
    CommonModule,
    ModalComponent,
    DocToogleComponent,
    CodeSnippetComponent,
    RouterLink,
    BreadcrumbComponent,
    ViewSwitcherComponent,
  ],
  templateUrl: './toogle2.component.html',
  styleUrl: './toogle2.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Toogle2Component {
  toggleWithTextCode = `
  <div class="toggle">
    <ip-toggle
      active-label="ON"
      inactive-label="OFF"
      aria-label="Toggle notifications on or off"
      size="small"
      checked="true"
    >
    </ip-toggle>

    <ip-toggle
      active-label="ON"
      inactive-label="OFF"
      aria-label="Toggle notifications on or off"
      checked="false"
    >
    </ip-toggle>
  </div>
  `;
  currentView: 'preview' | 'code' | 'doc' = 'preview';
  switchView(view: 'preview' | 'code' | 'doc'): void {
    this.currentView = view;
  }
  switcherTitle = 'Toggle 2';

  constructor() {
    if (isPlatformBrowser(inject(PLATFORM_ID)) && toggleElements) {
      toggleElements(inject(DOCUMENT).defaultView as Window);
    }
  }
}
