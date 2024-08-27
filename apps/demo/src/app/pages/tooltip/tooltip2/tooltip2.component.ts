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
import { ViewSwitcherComponent } from '../../../features/view-switcher/view-switcher.component';
import { RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../../../features/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-tooltip2',
  standalone: true,
  imports: [
    CommonModule,
    DocTooltipComponent,
    CodeSnippetComponent,
    ViewSwitcherComponent,
    RouterLink,
    BreadcrumbComponent,
  ],
  templateUrl: './tooltip2.component.html',
  styleUrl: './tooltip2.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Tooltip2Component {
  currentView: 'preview' | 'code' | 'doc' = 'preview';
  switchView(view: 'preview' | 'code' | 'doc'): void {
    this.currentView = view;
  }
  switcherTitle = 'Tooltip 2';
  hoverCode = `
      <ip-tooltip
        tooltip-trigger="Hover Me!"
        tooltip-content="Please enter a description of the tooltip.
         The length is 3/4 lines maximum. Arrows can be adjusted position."
      >
      </ip-tooltip>
  `;
  constructor() {
    if (isPlatformBrowser(inject(PLATFORM_ID)) && tooltipElements) {
      tooltipElements(inject(DOCUMENT).defaultView as Window);
    }
  }
}
