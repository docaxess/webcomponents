import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  PLATFORM_ID,
} from '@angular/core';
import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { defineCustomElements as toggleElements } from '@ipedis/toggle/loader';
import { ModalComponent } from '../../modal/modal.component';
import { DocToogleComponent } from '../doc-toogle/doc-toogle.component';

@Component({
  selector: 'app-toogle3',
  standalone: true,
  imports: [CommonModule, ModalComponent, DocToogleComponent],
  templateUrl: './toogle3.component.html',
  styleUrl: './toogle3.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Toogle3Component {
  constructor() {
    if (isPlatformBrowser(inject(PLATFORM_ID)) && toggleElements) {
      toggleElements(inject(DOCUMENT).defaultView as Window);
    }
  }
}
