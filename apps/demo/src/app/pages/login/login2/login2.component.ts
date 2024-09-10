import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  PLATFORM_ID,
} from '@angular/core';
import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { defineCustomElements as loginElements } from '@ipedis/login/loader';
import { DocLoginComponent } from '../doc-login/doc-login.component';
import { CodeSnippetComponent } from '../../../features/code-snippet/code-snippet.component';
import { RouterLink } from '@angular/router';

import { AccordionComponent } from '../../../features/accordion/accordion.component';

@Component({
  selector: 'app-login2',
  standalone: true,
  imports: [
    CommonModule,
    DocLoginComponent,
    CodeSnippetComponent,
    RouterLink,
    AccordionComponent,
  ],
  templateUrl: './login2.component.html',
  styleUrl: './login2.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Login2Component {
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

  switcherTitle = 'Login 2';
  constructor() {
    if (isPlatformBrowser(inject(PLATFORM_ID)) && loginElements) {
      loginElements(inject(DOCUMENT).defaultView as Window);
    }
  }
}
