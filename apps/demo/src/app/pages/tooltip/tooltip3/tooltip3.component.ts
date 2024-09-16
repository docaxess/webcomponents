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

import { RouterLink } from '@angular/router';
import { AccordionComponent } from '../../../features/accordion/accordion.component';

@Component({
  selector: 'app-tooltip3',
  standalone: true,
  imports: [
    CommonModule,
    DocTooltipComponent,
    CodeSnippetComponent,
    RouterLink,
    AccordionComponent,
  ],
  templateUrl: './tooltip3.component.html',
  styleUrl: './tooltip3.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Tooltip3Component {
  switcherTitle = 'Tooltip 3';
  withButtonCode = `
      <ip-tooltip
        id="clicked-tooltip"
        tooltip-trigger="Click me !"
        tooltip-content="Please enter a description of the tooltip.
         The length is 3/4 lines maximum. Arrows can be adjusted position."
        tooltip-btn-close="true"
        tooltip-btn-1="Cancel"
        tooltip-btn-2="Learn More"
        type="click"
      >
      </ip-tooltip>
  `;

  cssTooltip3 = `
ip-tooltip::part(tooltip-trigger) {
  font-family: 'Mulish-light';
  width: 125px;
  height: 40px;
  font-size: 18px;
  &:focus,
  &:hover {
    outline: 3px solid #000;
    outline-offset: 3px;
  }
}
ip-tooltip::part(tooltip-content) {
  font-family: 'Mulish-light';
  font-size: 16px;
}

ip-tooltip::part(tooltip-btn1) {
  font-family: 'Mulish-light';
  font-size: 16px;
  color: #c21313;
}
ip-tooltip::part(tooltip-btn2) {
  font-family: 'Mulish-light';
  font-size: 16px;
}
  `;
  constructor() {
    if (isPlatformBrowser(inject(PLATFORM_ID)) && tooltipElements) {
      tooltipElements(inject(DOCUMENT).defaultView as Window);
    }
  }
}
