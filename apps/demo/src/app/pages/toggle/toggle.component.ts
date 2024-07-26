import {ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, inject, PLATFORM_ID} from '@angular/core';
import {CommonModule, DOCUMENT, isPlatformBrowser} from '@angular/common';
import { CodeSnippetComponent } from '../code-snippet/code-snippet.component';
import { defineCustomElements as toggleElements } from '@ipedis/toggle/loader';

@Component({
  selector: 'app-toggle',
  standalone: true,
  imports: [CommonModule, CodeSnippetComponent],
  templateUrl: './toggle.component.html',
  styleUrl: './toggle.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToggleComponent {
  codeSnippetWithText = `
<ip-toggle
  active-label="ON"
  inactive-label="OFF"
  aria-label="Toggle notifications on or off"
  size="small"
  checked="true"
>
</ip-toggle>

<ip-toggle
  active-label="ON"
  inactive-label="OFF"
  aria-label="Toggle notifications on or off"
  checked="false"
>
</ip-toggle>
  `
  codeSnippetWithoutText = `
<ip-toggle
  aria-label="Toggle notifications on or off"
  checked="true"
>
</ip-toggle>

<ip-toggle
  aria-label="Toggle notifications on or off"
  size="large"
  checked="false"
>
</ip-toggle>
  `

  codeSnippetWithIndication = `
<ip-toggle size="small">
  <label class="switch-label" slot="switch-label">Activate strong authentication</label>
  <p class="helper-text" slot="helper-text">This is the helper text.</p>
</ip-toggle>
  `

  constructor() {
    if (isPlatformBrowser(inject(PLATFORM_ID)) && toggleElements) {
      toggleElements(inject(DOCUMENT).defaultView as Window);
    }
  }
}
