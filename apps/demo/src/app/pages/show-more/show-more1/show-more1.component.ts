import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  PLATFORM_ID,
} from '@angular/core';
import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { CodeSnippetComponent } from '../../../features/code-snippet/code-snippet.component';
import { RouterLink } from '@angular/router';
import { ViewSwitcherComponent } from '../../../features/view-switcher/view-switcher.component';
import { BreadcrumbComponent } from '../../../features/breadcrumb/breadcrumb.component';
import { defineCustomElements as showMoreElements } from '@ipedis/show-more/loader';
import { DocShowMoreComponent } from '../doc-show-more/doc-show-more.component';

@Component({
  selector: 'app-show-more1',
  standalone: true,
  imports: [
    CommonModule,
    CodeSnippetComponent,
    RouterLink,
    ViewSwitcherComponent,
    BreadcrumbComponent,
    DocShowMoreComponent,
  ],
  templateUrl: './show-more1.component.html',
  styleUrl: './show-more1.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowMore1Component {
  showMoreCode = `
    <ip-show-more
      show-less-text="Voir moins"
      show-more-text="Voir plus"
    >
        <div slot="content" class="show-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          blanditiis itaque deserunt ab ad eum, voluptas animi non quos esse
          modi voluptate nemo temporibus? Voluptates excepturi asperiores
          autem quisquam provident!
        </div>
    </ip-show-more>
  `;
  currentView: 'preview' | 'code' | 'doc' = 'preview';
  switchView(view: 'preview' | 'code' | 'doc'): void {
    this.currentView = view;
  }
  switcherTitle = 'Show-more 1 ';
  constructor() {
    if (isPlatformBrowser(inject(PLATFORM_ID)) && showMoreElements) {
      showMoreElements(inject(DOCUMENT).defaultView as Window);
    }
  }
}