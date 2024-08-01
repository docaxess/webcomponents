import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  PLATFORM_ID,
} from '@angular/core';
import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { CodeSnippetComponent } from '../code-snippet/code-snippet.component';
import { defineCustomElements as tooltipElements } from '@ipedis/tooltip/loader';
import { WrapperComponent } from '../wrapper/wrapper.component';

@Component({
  selector: 'app-demo-tooltip',
  standalone: true,
  imports: [CommonModule, CodeSnippetComponent, WrapperComponent],
  templateUrl: './tooltip.component.html',
  styleUrl: './tooltip.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TooltipComponent {
  constructor() {
    if (isPlatformBrowser(inject(PLATFORM_ID)) && tooltipElements) {
      tooltipElements(inject(DOCUMENT).defaultView as Window);
    }
  }
}
