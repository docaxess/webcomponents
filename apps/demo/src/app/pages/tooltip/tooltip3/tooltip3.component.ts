import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  PLATFORM_ID,
} from '@angular/core';
import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { defineCustomElements as tooltipElements } from '@ipedis/tooltip/loader';
import { ModalComponent } from '../../../features/modal/modal.component';
import { DocTooltipComponent } from '../doc-tooltip/doc-tooltip.component';
import { CodeSnippetComponent } from '../../../features/code-snippet/code-snippet.component';
import { ViewSwitcherComponent } from '../../../features/view-switcher/view-switcher.component';
import { RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../../../features/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-tooltip3',
  standalone: true,
  imports: [
    CommonModule,
    ModalComponent,
    DocTooltipComponent,
    CodeSnippetComponent,
    ViewSwitcherComponent,
    RouterLink,
    BreadcrumbComponent,
  ],
  templateUrl: './tooltip3.component.html',
  styleUrl: './tooltip3.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Tooltip3Component {
  currentView: 'preview' | 'code' | 'doc' = 'preview';
  switchView(view: 'preview' | 'code' | 'doc'): void {
    this.currentView = view;
  }
  switcherTitle = 'Tooltip 3';
  withButtonCode = `
      <ip-tooltip
        id="clicked-tooltip"
        tooltip-trigger="Click me !"
        tooltip-content="Please enter a description of the tooltip. The length is 3/4 lines maximum. Arrows can be adjusted position."
        tooltip-btn-close="true"
        tooltip-btn-1="Cancel"
        tooltip-btn-2="Learn More"
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
