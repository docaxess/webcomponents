/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';

import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from 'tooltip';


@ProxyCmp({
  inputs: ['btn1AriaLabel', 'btn2AriaLabel', 'tooltipBtn1', 'tooltipBtn2', 'tooltipBtnClose', 'tooltipContent', 'tooltipTitle', 'tooltipTrigger', 'type']
})
@Component({
  selector: 'ip-tooltip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['btn1AriaLabel', 'btn2AriaLabel', 'tooltipBtn1', 'tooltipBtn2', 'tooltipBtnClose', 'tooltipContent', 'tooltipTitle', 'tooltipTrigger', 'type'],
})
export class IpTooltip {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['btn1Click', 'btn2Click']);
  }
}


export declare interface IpTooltip extends Components.IpTooltip {

  btn1Click: EventEmitter<CustomEvent<any>>;

  btn2Click: EventEmitter<CustomEvent<any>>;
}


