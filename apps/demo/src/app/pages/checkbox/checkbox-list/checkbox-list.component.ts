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
  selector: 'app-checkbox-list',
  standalone: true,
  imports: [CommonModule, ModalComponent],
  templateUrl: './checkbox-list.component.html',
  styleUrl: './checkbox-list.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxListComponent {
  constructor() {
    if (isPlatformBrowser(inject(PLATFORM_ID)) && checkboxElements) {
      checkboxElements(inject(DOCUMENT).defaultView as Window);
    }
  }
}
