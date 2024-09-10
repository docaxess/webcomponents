import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  inject,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { CodeSnippetComponent } from '../../../features/code-snippet/code-snippet.component';
import { DocAlertComponent } from '../doc-alert/doc-alert.component';
import { RouterLink } from '@angular/router';
import { defineCustomElements as AlertElements } from '@ipedis/alert/loader';
import { AccordionComponent } from '../../../features/accordion/accordion.component';

@Component({
  selector: 'app-warning-alert',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    CodeSnippetComponent,
    DocAlertComponent,
    AccordionComponent,
  ],
  templateUrl: './warning-alert.component.html',
  styleUrl: './warning-alert.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WarningAlertComponent {
  @ViewChild('showAlertButton') showAlertButton:
    | ElementRef<HTMLButtonElement>
    | undefined;
  @ViewChild('alertComponent') alertComponent: ElementRef | undefined;
  isAlertVisible = false;

  displayAlert() {
    this.isAlertVisible = true;
    setTimeout(() => {
      if (this.alertComponent?.nativeElement?.shadowRoot) {
        const closeButton =
          this.alertComponent.nativeElement.shadowRoot.querySelector(
            '.close-button',
          ) as HTMLElement;
        closeButton.focus();
      }
    });
  }
  hideAlert() {
    this.isAlertVisible = false;
    setTimeout(() => {
      if (this.showAlertButton?.nativeElement) {
        this.showAlertButton.nativeElement.focus();
      }
    });
  }

  ngAfterViewInit(): void {
    if (this.isAlertVisible && this.alertComponent?.nativeElement?.shadowRoot) {
      const closeButton =
        this.alertComponent.nativeElement.shadowRoot.querySelector(
          '.close-button',
        ) as HTMLElement;
      if (closeButton) {
        closeButton.focus();
      }
    }
  }
  warningAlertCode = `
    <ip-alert
      type="warning"
      alert-title="Warning"
      message="You are about to permanently delete this item. This action cannot be undone."
    >
    </ip-alert>
  `;

  constructor() {
    if (isPlatformBrowser(inject(PLATFORM_ID)) && AlertElements) {
      AlertElements(inject(DOCUMENT).defaultView as Window);
    }
  }
}
