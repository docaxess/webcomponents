import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  inject,
  PLATFORM_ID,
  ViewChild, AfterViewInit,
} from '@angular/core';
import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { CodeSnippetComponent } from '../../../features/code-snippet/code-snippet.component';
import { DocAlertComponent } from '../doc-alert/doc-alert.component';

import { RouterLink } from '@angular/router';
import { defineCustomElements as AlertElements } from '@ipedis/alert/loader';
import { AccordionComponent } from '../../../features/accordion/accordion.component';

@Component({
  selector: 'app-success-alert',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    CodeSnippetComponent,
    DocAlertComponent,
    AccordionComponent,
  ],
  templateUrl: './success-alert.component.html',
  styleUrl: './success-alert.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SuccessAlertComponent implements AfterViewInit {
  @ViewChild('showAlertButton') showAlertButton:
    | ElementRef<HTMLButtonElement>
    | undefined;
  @ViewChild('alertComponent') alertComponent: ElementRef | undefined;
  isAlertVisible = true;

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
  successAlertCode = `
    <ip-alert
      type="success"
      alert-title="Success"
      message="Your registration was completed successfully! You can now access your account."
    >
    </ip-alert>
  `;
  cssAlertCode = `
button {
  margin-top: 20px;
  font-family: 'Mulish-regular';
  font-size: 16px;
  display: inline-block;
  justify-content: center;
  align-items: center;
  padding: 10px 16px;
  border: none;
  border-radius: 4px;
  background-color: #b00057;
  color: #ffffff;
  cursor: pointer;
  width: 175px;
}
ip-alert {
  --alert-font-family: 'Mulish-regular';
  --alert-font-size: 18px;
}
  `;
  constructor() {
    if (isPlatformBrowser(inject(PLATFORM_ID)) && AlertElements) {
      AlertElements(inject(DOCUMENT).defaultView as Window);
    }
  }
}
