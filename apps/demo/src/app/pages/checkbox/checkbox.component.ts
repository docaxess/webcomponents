import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeSnippetComponent } from '../code-snippet/code-snippet.component';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [CommonModule, CodeSnippetComponent],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
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
              &#123;"id": "agree", "label": "I agree to the terms and conditions.", "defaultChecked": true , "disabled": true&#125;,
              &#123;"id": "remember", "label": "Remember me on this device", "disabled": true&#125;, 
              &#123;"id": "newsletter", "label": "subscribe to our newsletter for updates.","defaultChecked": true&#125;,
              &#123;"id": "send", "label": "Send me promotional offers and discounts."&#125;,
              &#123;"id": "participate", "label": "Participate in our user feddback program."&#125;
              ]'
                    >
                    </ip-checkbox-list>
  `
}
