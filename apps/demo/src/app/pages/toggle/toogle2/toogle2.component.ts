import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  Input,
  PLATFORM_ID,
} from '@angular/core';
import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { defineCustomElements as toggleElements } from '@ipedis/toggle/loader';
import { ModalComponent } from '../../modal/modal.component';
import { DocToogleComponent } from '../doc-toogle/doc-toogle.component';

@Component({
  selector: 'app-toogle2',
  standalone: true,
  imports: [CommonModule, ModalComponent, DocToogleComponent],
  templateUrl: './toogle2.component.html',
  styleUrl: './toogle2.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Toogle2Component {
  modalTitle = 'Toogle 2';
  isModalVisible = false;
  @Input() currentView: 'preview' | 'code' | 'doc' = 'preview';

  handleCloseModal() {
    this.isModalVisible = false;
  }
  openModal() {
    this.isModalVisible = true;
  }
  constructor() {
    if (isPlatformBrowser(inject(PLATFORM_ID)) && toggleElements) {
      toggleElements(inject(DOCUMENT).defaultView as Window);
    }
  }
}
