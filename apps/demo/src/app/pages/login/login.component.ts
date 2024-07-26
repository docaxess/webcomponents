import {ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, inject, PLATFORM_ID} from '@angular/core';
import {CommonModule, DOCUMENT, isPlatformBrowser} from '@angular/common';
import { CodeSnippetComponent } from '../code-snippet/code-snippet.component';
import { defineCustomElements as loginElements } from '@ipedis/login/loader';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, CodeSnippetComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  codeSnippetWithUsername = `
<form class="login-form">
<ip-email
  class="form-group"
  error-message="The username entered is incorrect"
  input-label="User name"
>
</ip-email>
<ip-password
  class="form-group"
  error-message="The password entered is incorrect"
  invalid="true"
  forgot-password-link="#"
>
</ip-password>
<div class="submit-btn">
<button class="btn" type="submit">Login</button>
</div>
</form>
  `;

  codeSnippetWithEmail = `
<form class="login-form">
  <ip-email
    class="form-group"
    error-message="The email entered is incorrect"
  >
  </ip-email>
  <ip-password
    class="form-group"
    error-message="The password entered is incorrect"
    forgot-password-link="#"
  >
  </ip-password>
  <div class="submit-btn">
  <button class="btn" type="submit">Login</button>
  </div>
</form>
  `
    constructor() {
      if (isPlatformBrowser(inject(PLATFORM_ID)) && loginElements) {
        loginElements(inject(DOCUMENT).defaultView as Window);
      }
    }
}
