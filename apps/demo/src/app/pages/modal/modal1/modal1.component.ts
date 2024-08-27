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
import { defineCustomElements as modalElements } from '@ipedis/modal/loader';

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
          <ip-modal button-text="Open Custom Modal">
            <div slot="content" class="modal-content">
              <div class="dialog-title">
                <h1 id="dialog-reference">Subscribe to our Newsletter</h1>
                <p>Join thousands getting emails in their inbox.</p>
              </div>
              <div class="dialog-contents">
                <input
                  type="text"
                  required
                  class="input-modal"
                  aria-label="Your name"
                  title="Your name"
                  placeholder="Your Name"
                  autocomplete="full-name"
                />
              </div>
              <div>
                <button class="dialog-btn">Got it, Thanks!</button>
              </div>
            </div>
          </ip-modal>
  `;
  currentView: 'preview' | 'code' | 'doc' = 'preview';
  switchView(view: 'preview' | 'code' | 'doc'): void {
    this.currentView = view;
  }
  switcherTitle = 'Modal 1';
  constructor() {
    if (isPlatformBrowser(inject(PLATFORM_ID)) && modalElements) {
      modalElements(inject(DOCUMENT).defaultView as Window);
    }
  }
}
