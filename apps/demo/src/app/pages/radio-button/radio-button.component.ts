import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  PLATFORM_ID,
} from '@angular/core';
import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { CodeSnippetComponent } from '../code-snippet/code-snippet.component';
import { defineCustomElements as radioElements } from '@ipedis/radio/loader';

@Component({
  selector: 'app-radio-button',
  standalone: true,
  imports: [CommonModule, CodeSnippetComponent],
  templateUrl: './radio-button.component.html',
  styleUrl: './radio-button.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioButtonComponent {
  codeSnippet = `
<ip-radio
  id="radio"
  legend="What is your gender"
  default-option-id="Female"
  options='[
    {"id": "Male", "label": "Male"}, 
    {"id": "Female", "label": "Female"},
    {"id": "Other", "label": "Other", "disabled": true}
  ]'
></ip-radio>
  `;
  constructor() {
    if (isPlatformBrowser(inject(PLATFORM_ID)) && radioElements) {
      radioElements(inject(DOCUMENT).defaultView as Window);
    }
  }
}
