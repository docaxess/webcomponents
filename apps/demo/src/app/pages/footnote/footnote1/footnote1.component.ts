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
import { DocFootnoteComponent } from '../doc-footnote/doc-footnote.component';
import { defineCustomElements as footnoteElements } from '@ipedis/footnote/loader';

@Component({
  selector: 'app-footnote1',
  standalone: true,
  imports: [
    CommonModule,
    CodeSnippetComponent,
    ViewSwitcherComponent,
    BreadcrumbComponent,
    DocFootnoteComponent,
  ],
  templateUrl: './footnote1.component.html',
  styleUrl: './footnote1.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footnote1Component {
  codeSnippet = `
    <p>
      Here is a sentence with a footnote reference<sup><a href="#footnote-1" id="ref1">1</a></sup
      >.
    </p>
    <ip-footnote id="footnote-1" identifier="1" text="This is a detailed explanation or reference for the footnote."></ip-footnote>
  `;
  currentView: 'preview' | 'code' | 'doc' = 'preview';
  switchView(view: 'preview' | 'code' | 'doc'): void {
    this.currentView = view;
  }
  switcherTitle = 'Footnote 1';

  constructor() {
    if (isPlatformBrowser(inject(PLATFORM_ID)) && footnoteElements) {
      footnoteElements(inject(DOCUMENT).defaultView as Window);
    }
  }
}
