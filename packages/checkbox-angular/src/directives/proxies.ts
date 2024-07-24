/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';

import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from 'checkbox';


@ProxyCmp({
  inputs: ['checked', 'disabled', 'identifier', 'name']
})
@Component({
  selector: 'ip-checkbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['checked', 'disabled', 'identifier', 'name'],
})
export class IpCheckbox {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['checkboxChange']);
  }
}


export declare interface IpCheckbox extends Components.IpCheckbox {

  checkboxChange: EventEmitter<CustomEvent<{ name: string; checked: boolean }>>;
}


@ProxyCmp({
  inputs: ['legend', 'options']
})
@Component({
  selector: 'ip-checkbox-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['legend', 'options'],
})
export class IpCheckboxList {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['selectionChanged']);
  }
}


export declare interface IpCheckboxList extends Components.IpCheckboxList {

  selectionChanged: EventEmitter<CustomEvent<string[]>>;
}


