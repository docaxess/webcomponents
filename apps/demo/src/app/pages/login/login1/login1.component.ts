import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  Input,
  PLATFORM_ID,
} from '@angular/core';
import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { defineCustomElements as loginElements } from '@ipedis/login/loader';
import { ModalComponent } from '../../modal/modal.component';
import { DocLoginComponent } from '../doc-login/doc-login.component';

@Component({
  selector: 'app-login1',
  standalone: true,
  imports: [CommonModule, ModalComponent, DocLoginComponent],
  templateUrl: './login1.component.html',
  styleUrl: './login1.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Login1Component {
  modalTitle = 'Login 1';
  isModalVisible = false;
  @Input() currentView: 'preview' | 'code' | 'doc' = 'preview';

  handleCloseModal() {
    this.isModalVisible = false;
  }
  openModal() {
    this.isModalVisible = true;
  }
  constructor() {
    if (isPlatformBrowser(inject(PLATFORM_ID)) && loginElements) {
      loginElements(inject(DOCUMENT).defaultView as Window);
    }
  }
}
