/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone } from '@angular/core';

import { ProxyCmp } from './angular-component-lib/utils';

import { Components } from 'toggle';


@ProxyCmp({
  inputs: ['activeLabel', 'ariaLabel', 'checked', 'inactiveLabel', 'size', 'toggleDisabled']
})
@Component({
  selector: 'ip-toggle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['activeLabel', 'ariaLabel', 'checked', 'inactiveLabel', 'size', 'toggleDisabled'],
})
export class IpToggle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IpToggle extends Components.IpToggle {}

