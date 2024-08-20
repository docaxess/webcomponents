import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  PLATFORM_ID,
} from '@angular/core';
import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { defineCustomElements as tooltipElements } from '@ipedis/tooltip/loader';
import { DocTooltipComponent } from '../doc-tooltip/doc-tooltip.component';
import { CodeSnippetComponent } from '../../../features/code-snippet/code-snippet.component';
import { BreadcrumbComponent } from '../../../features/breadcrumb/breadcrumb.component';
import { ViewSwitcherComponent } from '../../../features/view-switcher/view-switcher.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tooltip1',
  standalone: true,
  imports: [
    CommonModule,
    DocTooltipComponent,
    CodeSnippetComponent,
    BreadcrumbComponent,
    ViewSwitcherComponent,
    RouterLink,
  ],
  templateUrl: './tooltip1.component.html',
  styleUrl: './tooltip1.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Tooltip1Component {
  currentView: 'preview' | 'code' | 'doc' = 'preview';
  switchView(view: 'preview' | 'code' | 'doc'): void {
    this.currentView = view;
  }
  switcherTitle = 'Tooltip 1';

  clickableCode = `
      <ip-tooltip
        tooltip-trigger="Click Me!"
        tooltip-content="Please enter a description of the tooltip. The length is 3/4 lines maximum. Arrows can be adjusted position."
        type="click"
      >
      </ip-tooltip>
  `;

  constructor() {
    if (isPlatformBrowser(inject(PLATFORM_ID)) && tooltipElements) {
      tooltipElements(inject(DOCUMENT).defaultView as Window);
    }
  }
}
