import {ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, inject, PLATFORM_ID} from '@angular/core';
import {CommonModule, DOCUMENT, isPlatformBrowser} from '@angular/common';
import { CodeSnippetComponent } from '../code-snippet/code-snippet.component';
import { defineCustomElements as dropdownElements } from '@ipedis/dropdown/loader';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CommonModule, CodeSnippetComponent],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownComponent {
  codeSnippet = `
<ip-dropdown
  dropdown-title="Country"
  placeholder="Select a country:"
  items-options='["Mauritius", "France", "Germany", "Zimbabwe"]'
>
</ip-dropdown>
  `
    constructor() {
      if (isPlatformBrowser(inject(PLATFORM_ID)) && dropdownElements) {
          dropdownElements(inject(DOCUMENT).defaultView as Window);
    }
  }
}
