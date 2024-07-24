import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeSnippetComponent } from '../code-snippet/code-snippet.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, CodeSnippetComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
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
}
