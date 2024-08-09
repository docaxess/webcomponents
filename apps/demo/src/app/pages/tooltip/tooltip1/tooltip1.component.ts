import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  Input,
  PLATFORM_ID,
} from '@angular/core';
import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { defineCustomElements as tooltipElements } from '@ipedis/tooltip/loader';
import { ModalComponent } from '../../../features/modal/modal.component';

@Component({
  selector: 'app-tooltip1',
  standalone: true,
  imports: [CommonModule, ModalComponent],
  templateUrl: './tooltip1.component.html',
  styleUrl: './tooltip1.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Tooltip1Component {
  modalTitle = 'Tooltip 1';
  isModalVisible = false;
  @Input() currentView: 'preview' | 'code' | 'doc' = 'preview';

  handleCloseModal() {
    this.isModalVisible = false;
  }
  openModal() {
    this.isModalVisible = true;
  }
  constructor() {
    if (isPlatformBrowser(inject(PLATFORM_ID)) && tooltipElements) {
      tooltipElements(inject(DOCUMENT).defaultView as Window);
    }
  }
}
