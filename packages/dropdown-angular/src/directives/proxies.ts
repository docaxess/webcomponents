/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';

import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from 'dropdown';


@ProxyCmp({
  inputs: ['dropdownTitle', 'itemsOptions', 'placeholder']
})
@Component({
  selector: 'ip-dropdown',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['dropdownTitle', 'itemsOptions', 'placeholder'],
})
export class IpDropdown {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['itemSelected']);
  }
}


export declare interface IpDropdown extends Components.IpDropdown {

  itemSelected: EventEmitter<CustomEvent<string>>;
}


