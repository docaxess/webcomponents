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
import { ModalComponent } from '../../../features/modal/modal.component';
import { DocToogleComponent } from '../doc-toogle/doc-toogle.component';
import { CodeSnippetComponent } from '../../../features/code-snippet/code-snippet.component';

@Component({
  selector: 'app-toogle1',
  standalone: true,
  imports: [
    CommonModule,
    ModalComponent,
    DocToogleComponent,
    CodeSnippetComponent,
  ],
  templateUrl: './toogle1.component.html',
  styleUrl: './toogle1.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Toogle1Component {
  toggleCode = `
  <div class="toggle">
    <ip-toggle aria-label="Toggle notifications on or off" checked="true">
    </ip-toggle>

    <ip-toggle
      aria-label="Toggle notifications on or off"
      size="large"
      checked="false"
    >
    </ip-toggle>
  </div>
  `;
  @Input() currentView: 'preview' | 'code' | 'doc' = 'preview';

  constructor() {
    if (isPlatformBrowser(inject(PLATFORM_ID)) && toggleElements) {
      toggleElements(inject(DOCUMENT).defaultView as Window);
    }
  }
}
