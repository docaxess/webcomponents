import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  PLATFORM_ID,
} from '@angular/core';
import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { defineCustomElements as radioElements } from '@ipedis/radio/loader';
import { ModalComponent } from '../../modal/modal.component';
import { DocRadioComponent } from '../doc-radio/doc-radio.component';

@Component({
  selector: 'app-radio1-button',
  standalone: true,
  imports: [CommonModule, ModalComponent, DocRadioComponent],
  templateUrl: './radio1-button.component.html',
  styleUrl: './radio1-button.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Radio1ButtonComponent {
  constructor() {
    if (isPlatformBrowser(inject(PLATFORM_ID)) && radioElements) {
      radioElements(inject(DOCUMENT).defaultView as Window);
    }
  }
}
