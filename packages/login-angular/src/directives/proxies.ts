/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';

import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from 'login';


@ProxyCmp({
  inputs: ['errorMessage', 'inputLabel', 'invalid', 'required']
})
@Component({
  selector: 'ip-email',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['errorMessage', 'inputLabel', 'invalid', 'required'],
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
  inputs: ['errorMessage', 'forgotPasswordLink', 'invalid']
})
@Component({
  selector: 'ip-password',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['errorMessage', 'forgotPasswordLink', 'invalid'],
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


