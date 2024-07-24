/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone } from '@angular/core';

import { ProxyCmp } from './angular-component-lib/utils';

import { Components } from 'login';


@ProxyCmp({
  inputs: ['errorMessage', 'inputLabel', 'invalid']
})
@Component({
  selector: 'ip-email',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['errorMessage', 'inputLabel', 'invalid'],
})
export class IpEmail {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IpEmail extends Components.IpEmail {}


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
  }
}


export declare interface IpPassword extends Components.IpPassword {}


