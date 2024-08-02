import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  PLATFORM_ID,
} from '@angular/core';
import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { ModalComponent } from '../../modal/modal.component';
import { defineCustomElements as checkboxElements } from '@ipedis/checkbox/loader';

@Component({
  selector: 'app-checkbox1',
  standalone: true,
  imports: [CommonModule, ModalComponent],
  templateUrl: './checkbox1.component.html',
  styleUrl: './checkbox1.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Checkbox1Component {
  constructor() {
    if (isPlatformBrowser(inject(PLATFORM_ID)) && checkboxElements) {
      checkboxElements(inject(DOCUMENT).defaultView as Window);
    }
  }
}
