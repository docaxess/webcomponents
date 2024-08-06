import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  PLATFORM_ID,
} from '@angular/core';
import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { defineCustomElements as paginationElements } from '@ipedis/pagination/loader';
import { ModalComponent } from '../../modal/modal.component';

@Component({
  selector: 'app-pagination1',
  standalone: true,
  imports: [CommonModule, ModalComponent],
  templateUrl: './pagination1.component.html',
  styleUrl: './pagination1.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Pagination1Component {
  currentView: 'preview' | 'code' | 'doc' = 'preview';

  constructor() {
    if (isPlatformBrowser(inject(PLATFORM_ID)) && paginationElements) {
      paginationElements(inject(DOCUMENT).defaultView as Window);
    }
  }
}
