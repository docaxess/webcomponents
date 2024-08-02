import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  PLATFORM_ID,
} from '@angular/core';
import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { defineCustomElements as paginationElements } from '@ipedis/pagination/loader';

@Component({
  selector: 'app-pagination1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination1.component.html',
  styleUrl: './pagination1.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Pagination1Component {
  constructor() {
    if (isPlatformBrowser(inject(PLATFORM_ID)) && paginationElements) {
      paginationElements(inject(DOCUMENT).defaultView as Window);
    }
  }
}
