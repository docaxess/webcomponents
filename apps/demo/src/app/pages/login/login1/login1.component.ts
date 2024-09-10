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
  selector: 'app-login1',
  standalone: true,
  imports: [
    CommonModule,
    DocLoginComponent,
    CodeSnippetComponent,
    RouterLink,
    AccordionComponent,
  ],
  templateUrl: './login1.component.html',
  styleUrl: './login1.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Login1Component {
  withEmailCode = `
          <div class="with-email login">
            <form class="login-form">
              <div class="title">
                <h1>Log In</h1>
              </div>
              <div class="email">
                <ip-email
                  required
                  class="form-group"
                  error-message="The email entered is incorrect"
                >
                </ip-email>
              </div>
              <div class="password">
                <ip-password
                  class="form-group"
                  error-message="The password entered is incorrect"
                  forgot-password-link="#"
                >
                </ip-password>
              </div>

              <div class="submit-btn">
                <button class="btn" type="submit">
                  <label for="">Continue</label>
                  <img src="assets/images/arrow-right.svg" alt="" />
                </button>
              </div>

              <div class="social-media">
                <div class="text">
                  <span>Or sign up using</span>
                </div>
                <div class="logo-list">
                  <div class="twitter">
                    <img src="assets/images/twitter.svg" alt="" />
                  </div>
                  <div class="google">
                    <img src="assets/images/google.svg" alt="" />
                  </div>
                  <div class="facebook">
                    <img src="assets/images/facebook.svg" alt="" />
                  </div>
                </div>
              </div>
              <div class="create-account">
                <span>Don't have an account ? </span>
                <a href="#">Create Account</a>
              </div>
            </form>
          </div>
  `;

  switcherTitle = 'Login 1';
  constructor() {
    if (isPlatformBrowser(inject(PLATFORM_ID)) && loginElements) {
      loginElements(inject(DOCUMENT).defaultView as Window);
    }
  }
}
