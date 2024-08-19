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
        <p slot="content" class="content">
          Join thousands getting emails in their inbox. Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Hic, unde ipsa quam quo aperiam
          nostrum repellat laboriosam praesentium atque saepe, obcaecati,
          perferendis molestias delectus? Maiores, cupiditate tempora.
          Obcaecati, omnis sunt!
        </p>
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
