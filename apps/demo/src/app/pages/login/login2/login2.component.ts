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
import { ModalComponent } from '../../../features/modal/modal.component';
import { DocLoginComponent } from '../doc-login/doc-login.component';
import { CodeSnippetComponent } from '../../../features/code-snippet/code-snippet.component';

@Component({
  selector: 'app-login2',
  standalone: true,
  imports: [
    CommonModule,
    ModalComponent,
    DocLoginComponent,
    CodeSnippetComponent,
  ],
  templateUrl: './login2.component.html',
  styleUrl: './login2.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Login2Component {
  modalTitle = 'Login 2';
  isModalVisible = false;
  @Input() currentView: 'preview' | 'code' | 'doc' = 'preview';
  withUsernameCode = `
  <div class="with-username login">
    <form class="login-form">
      <ip-email
        input-label="Username"
        class="form-group"
        error-message="The username entered is incorrect"
        required
      >
      </ip-email>
      <ip-password
        class="form-group"
        error-message="The password entered is incorrect"
        forgot-password-link="#"
        invalid="true"
      >
      </ip-password>
      <div class="submit-btn">
        <button class="btn" type="submit">Login</button>
      </div>
    </form>
  </div>
  `;
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
