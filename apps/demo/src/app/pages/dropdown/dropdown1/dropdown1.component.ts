import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  Input,
  PLATFORM_ID,
} from '@angular/core';
import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { defineCustomElements as dropdownElements } from '@ipedis/dropdown/loader';
import { ModalComponent } from '../../modal/modal.component';

@Component({
  selector: 'app-dropdown1',
  standalone: true,
  imports: [CommonModule, ModalComponent],
  templateUrl: './dropdown1.component.html',
  styleUrl: './dropdown1.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Dropdown1Component {
  modalTitle = 'Dropdown 1';
  isModalVisible = false;
  @Input() currentView: 'preview' | 'code' | 'doc' = 'preview';
  handleCloseModal() {
    this.isModalVisible = false;
  }
  openModal() {
    this.isModalVisible = true;
  }
  constructor() {
    if (isPlatformBrowser(inject(PLATFORM_ID)) && dropdownElements) {
      dropdownElements(inject(DOCUMENT).defaultView as Window);
    }
  }
}
