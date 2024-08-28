import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  PLATFORM_ID,
} from '@angular/core';
import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { CodeSnippetComponent } from '../../../features/code-snippet/code-snippet.component';
import { DocAlertComponent } from '../doc-alert/doc-alert.component';
import { ViewSwitcherComponent } from '../../../features/view-switcher/view-switcher.component';
import { BreadcrumbComponent } from '../../../features/breadcrumb/breadcrumb.component';
import { RouterLink } from '@angular/router';
import { defineCustomElements as AlertElements } from '@ipedis/alert/loader';

@Component({
  selector: 'app-danger-alert',
  standalone: true,
  imports: [
    CommonModule,
    BreadcrumbComponent,
    RouterLink,
    CodeSnippetComponent,
    DocAlertComponent,
    ViewSwitcherComponent,
  ],
  templateUrl: './danger-alert.component.html',
  styleUrl: './danger-alert.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DangerAlertComponent {
  dangerAlertCode = `
    <ip-alert
      type="danger"
      alert-title="Danger"
      message="Here is somme supporting text for the user to how to resolve alert."
    >
    </ip-alert>
  `;
  currentView: 'preview' | 'code' | 'doc' = 'preview';
  switchView(view: 'preview' | 'code' | 'doc'): void {
    this.currentView = view;
  }
  switcherTitle = 'Danger Alert';

  constructor() {
    if (isPlatformBrowser(inject(PLATFORM_ID)) && AlertElements) {
      AlertElements(inject(DOCUMENT).defaultView as Window);
    }
  }
}
