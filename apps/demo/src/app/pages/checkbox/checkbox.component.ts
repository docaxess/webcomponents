import {ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, inject, PLATFORM_ID} from '@angular/core';
import {CommonModule, DOCUMENT, isPlatformBrowser} from '@angular/common';
import { CodeSnippetComponent } from '../code-snippet/code-snippet.component';
import { defineCustomElements as checkboxElements } from '@ipedis/checkbox/loader';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [CommonModule, CodeSnippetComponent],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class CheckboxComponent {
  codeSnippet =`  
<ip-checkbox
    default-checked="true" id="check me"
>
    Check me !
</ip-checkbox>
`;

  codeSnippetList = `
<ip-checkbox-list
  legend="Select the options below:"
  options='[
    {"id": "agree", "label": "I agree to the terms and conditions.", "defaultChecked": true , "disabled": true},
    {"id": "remember", "label": "Remember me on this device", "disabled": true}, 
    {"id": "newsletter", "label": "subscribe to our newsletter for updates.","defaultChecked": true},
    {"id": "send", "label": "Send me promotional offers and discounts."},
    {"id": "participate", "label": "Participate in our user feedback program."}
  ]'
>
</ip-checkbox-list>
  `
    constructor() {
      if (isPlatformBrowser(inject(PLATFORM_ID)) && checkboxElements) {
         checkboxElements(inject(DOCUMENT).defaultView as Window);
      }
    }
}
