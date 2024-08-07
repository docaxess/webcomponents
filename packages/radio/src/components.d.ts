/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface IpRadio {
        "defaultOptionId": string | number;
        "labelPosition": 'before' | 'after';
        "legend": string;
        "options": string;
    }
}
export interface IpRadioCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIpRadioElement;
}
declare global {
    interface HTMLIpRadioElementEventMap {
        "selectionChanged": RadioOption;
    }
    interface HTMLIpRadioElement extends Components.IpRadio, HTMLStencilElement {
        addEventListener<K extends keyof HTMLIpRadioElementEventMap>(type: K, listener: (this: HTMLIpRadioElement, ev: IpRadioCustomEvent<HTMLIpRadioElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLIpRadioElementEventMap>(type: K, listener: (this: HTMLIpRadioElement, ev: IpRadioCustomEvent<HTMLIpRadioElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLIpRadioElement: {
        prototype: HTMLIpRadioElement;
        new (): HTMLIpRadioElement;
    };
    interface HTMLElementTagNameMap {
        "ip-radio": HTMLIpRadioElement;
    }
}
declare namespace LocalJSX {
    interface IpRadio {
        "defaultOptionId"?: string | number;
        "labelPosition"?: 'before' | 'after';
        "legend"?: string;
        "onSelectionChanged"?: (event: IpRadioCustomEvent<RadioOption>) => void;
        "options"?: string;
    }
    interface IntrinsicElements {
        "ip-radio": IpRadio;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "ip-radio": LocalJSX.IpRadio & JSXBase.HTMLAttributes<HTMLIpRadioElement>;
        }
    }
}
