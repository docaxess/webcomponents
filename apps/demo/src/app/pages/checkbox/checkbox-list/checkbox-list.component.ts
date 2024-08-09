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
  modalTitle = 'Checkbox List';
  isModalVisible = false;
  @Input() currentView: 'preview' | 'code' | 'doc' = 'preview';

  handleCloseModal() {
    this.isModalVisible = false;
  }
  openModal() {
    this.isModalVisible = true;
  }
  constructor() {
    if (isPlatformBrowser(inject(PLATFORM_ID)) && checkboxElements) {
      checkboxElements(inject(DOCUMENT).defaultView as Window);
    }
  }
}
