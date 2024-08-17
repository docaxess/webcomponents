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
import { Router } from 'express';
import { RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../../../features/breadcrumb/breadcrumb.component';
import { ViewSwitcherComponent } from '../../../features/view-switcher/view-switcher.component';

@Component({
  selector: 'app-login1',
  standalone: true,
  imports: [
    CommonModule,
    ModalComponent,
    DocLoginComponent,
    CodeSnippetComponent,
    RouterLink,
    BreadcrumbComponent,
    ViewSwitcherComponent,
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
      <ip-email
        required
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
  </div>
  `;
  currentView: 'preview' | 'code' | 'doc' = 'preview';
  switchView(view: 'preview' | 'code' | 'doc'): void {
    this.currentView = view;
  }
  switcherTitle = 'Login 1';
  constructor() {
    if (isPlatformBrowser(inject(PLATFORM_ID)) && loginElements) {
      loginElements(inject(DOCUMENT).defaultView as Window);
    }
  }
}
