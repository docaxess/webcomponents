import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeSnippetComponent } from '../code-snippet/code-snippet.component';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CommonModule, CodeSnippetComponent],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
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
}
