import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeSnippetComponent } from '../code-snippet/code-snippet.component';

@Component({
  selector: 'app-toggle',
  standalone: true,
  imports: [CommonModule, CodeSnippetComponent],
  templateUrl: './toggle.component.html',
  styleUrl: './toggle.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
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
}