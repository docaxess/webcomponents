import {ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, inject, PLATFORM_ID} from '@angular/core';
import {CommonModule, DOCUMENT, isPlatformBrowser} from '@angular/common';
import { CodeSnippetComponent } from '../code-snippet/code-snippet.component';
import { defineCustomElements as tooltipElements } from '@ipedis/tooltip/loader';

@Component({
  selector: 'app-demo-tooltip',
  standalone: true,
  imports: [CommonModule, CodeSnippetComponent],
  templateUrl: './tooltip.component.html',
  styleUrl: './tooltip.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TooltipComponent {
  codeSnippetClick = `
                      <ip-tooltip
                    tooltip-trigger="Click Me!"
                    tooltip-content="Please enter a description of the tooltip.
                     The length is 3/4 lines maximum. Arrows can be adjusted position."
                    type="click"
                    >
                    </ip-tooltip>
  `
  codeSnippetHover = `
                      <ip-tooltip
                    tooltip-trigger="Hover over me"
                    tooltip-content="Please enter a description of the tooltip.
                     The length is 3/4 lines maximum. Arrows can be adjusted position."
                    type="hover"
                    >
                    </ip-tooltip>
  `
  codeSnippetWithButton = `
                      <ip-tooltip
                    id="clicked-tooltip"
                    tooltip-trigger="Click me !"
                    tooltip-content="Please enter a description of the tooltip. The length is 3/4 lines maximum.
                     Arrows can be adjusted position."
                    tooltip-btn-close="true"
                    tooltip-btn-1="Cancel"
                    tooltip-btn-2="Learn More"
                    type="click"
                    >
                    </ip-tooltip>
  `

  constructor() {
    if (isPlatformBrowser(inject(PLATFORM_ID)) && tooltipElements) {
      tooltipElements(inject(DOCUMENT).defaultView as Window);
    }
  }
}
