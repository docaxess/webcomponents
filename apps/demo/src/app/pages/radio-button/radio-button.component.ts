import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeSnippetComponent } from '../code-snippet/code-snippet.component';

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
  `
}
