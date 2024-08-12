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
  selector: 'app-toogle3',
  standalone: true,
  imports: [
    CommonModule,
    ModalComponent,
    DocToogleComponent,
    CodeSnippetComponent,
  ],
  templateUrl: './toogle3.component.html',
  styleUrl: './toogle3.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Toogle3Component {
  toggleWithIndicCode = `
    <ip-toggle size="small">
      <label class="switch-label" slot="switch-label"
        >Activate strong authentication</label
      >
      <p class="helper-text" slot="helper-text">This is the helper text.</p>
    </ip-toggle>
  `;
  @Input() currentView: 'preview' | 'code' | 'doc' = 'preview';

  constructor() {
    if (isPlatformBrowser(inject(PLATFORM_ID)) && toggleElements) {
      toggleElements(inject(DOCUMENT).defaultView as Window);
    }
  }
}
