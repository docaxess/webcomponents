import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  Input,
  PLATFORM_ID,
} from '@angular/core';
import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { defineCustomElements as radioElements } from '@ipedis/radio/loader';
import { ModalComponent } from '../../../features/modal/modal.component';
import { DocRadioComponent } from '../doc-radio/doc-radio.component';
import { CodeSnippetComponent } from '../../../features/code-snippet/code-snippet.component';

@Component({
  selector: 'app-radio1-button',
  standalone: true,
  imports: [
    CommonModule,
    ModalComponent,
    DocRadioComponent,
    CodeSnippetComponent,
  ],
  templateUrl: './radio1.component.html',
  styleUrl: './radio1.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Radio1ButtonComponent {
  modalTitle = 'Radio-button 1';
  isModalVisible = false;
  @Input() currentView: 'preview' | 'code' | 'doc' = 'preview';
  radioCode = `
  <div class="radio-wrapper">
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
  </div>
  `;
  handleCloseModal() {
    this.isModalVisible = false;
  }
  openModal() {
    this.isModalVisible = true;
  }
  constructor() {
    if (isPlatformBrowser(inject(PLATFORM_ID)) && radioElements) {
      radioElements(inject(DOCUMENT).defaultView as Window);
    }
  }
}
