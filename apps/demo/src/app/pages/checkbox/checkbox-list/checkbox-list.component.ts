import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  Input,
  PLATFORM_ID,
} from '@angular/core';
import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { ModalComponent } from '../../../features/modal/modal.component';
import { defineCustomElements as checkboxElements } from '@ipedis/checkbox/loader';
import { CodeSnippetComponent } from '../../../features/code-snippet/code-snippet.component';

@Component({
  selector: 'app-checkbox-list',
  standalone: true,
  imports: [CommonModule, ModalComponent, CodeSnippetComponent],
  templateUrl: './checkbox-list.component.html',
  styleUrl: './checkbox-list.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxListComponent {
  checkboxListCode = `
    <ip-checkbox-list
      legend="Select the options below:"
      options='[
          {"id": "agree", "label": "I agree to the terms and conditions.", "defaultChecked": true , "disabled": true},
          {"id": "remember", "label": "Remember me on this device", "disabled": true}, 
          {"id": "newsletter", "label": "subscribe to our newsletter for updates.","defaultChecked": true},
          {"id": "send", "label": "Send me promotional offers and discounts."},
          {"id": "participate", "label": "Participate in our user feddback program."}
          ]'
    >
    </ip-checkbox-list>
  `;
  @Input() currentView: 'preview' | 'code' | 'doc' = 'preview';

  constructor() {
    if (isPlatformBrowser(inject(PLATFORM_ID)) && checkboxElements) {
      checkboxElements(inject(DOCUMENT).defaultView as Window);
    }
  }
}
