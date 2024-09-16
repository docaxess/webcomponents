/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';

import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from 'login';


@ProxyCmp({
  inputs: ['emptyFieldErrorMessage', 'errorMessage', 'inputLabel', 'inputPlaceholder', 'invalid', 'required']
})
@Component({
  selector: 'ip-email',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['emptyFieldErrorMessage', 'errorMessage', 'inputLabel', 'inputPlaceholder', 'invalid', 'required'],
})
export class IpEmail {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['inputChange']);
  }
}


export declare interface IpEmail extends Components.IpEmail {

  inputChange: EventEmitter<CustomEvent<string>>;
}


@ProxyCmp({
  inputs: ['forgotPasswordLabel', 'forgotPasswordLink', 'hidePasswordAriaLabel', 'indicationLabel', 'loginTitle', 'passwordDigitErrorMsg', 'passwordLabel', 'passwordLengthErrorMsg', 'passwordLowercaseErrorMsg', 'passwordUppercaseErrorMsg', 'pwdPlaceholder', 'showPasswordAriaLabel', 'submitBtnAriaLabel', 'submitButtonLabel', 'usernameErrorMsg', 'usernameInvalidEmailMsg', 'usernameLabel', 'usernamePlaceholder', 'usernameRequired', 'usernameType']
})
@Component({
  selector: 'ip-login',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['forgotPasswordLabel', 'forgotPasswordLink', 'hidePasswordAriaLabel', 'indicationLabel', 'loginTitle', 'passwordDigitErrorMsg', 'passwordLabel', 'passwordLengthErrorMsg', 'passwordLowercaseErrorMsg', 'passwordUppercaseErrorMsg', 'pwdPlaceholder', 'showPasswordAriaLabel', 'submitBtnAriaLabel', 'submitButtonLabel', 'usernameErrorMsg', 'usernameInvalidEmailMsg', 'usernameLabel', 'usernamePlaceholder', 'usernameRequired', 'usernameType'],
})
export class IpLogin {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['formSubmitted']);
  }
}


export declare interface IpLogin extends Components.IpLogin {

  formSubmitted: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['emptyFieldErrorMessage', 'errorMessage', 'forgotPasswordLink', 'hidePasswordAriaLabel', 'inputPlaceholder', 'invalid', 'showPasswordAriaLabel']
})
@Component({
  selector: 'ip-password',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['emptyFieldErrorMessage', 'errorMessage', 'forgotPasswordLink', 'hidePasswordAriaLabel', 'inputPlaceholder', 'invalid', 'showPasswordAriaLabel'],
})
export class IpPassword {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['passwordChange']);
  }
}


export declare interface IpPassword extends Components.IpPassword {

  passwordChange: EventEmitter<CustomEvent<string>>;
}


