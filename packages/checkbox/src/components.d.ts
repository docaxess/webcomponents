/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface IpCheckbox {
        "checked": boolean;
        "disabled": boolean;
        "identifier": string;
        "name": string;
    }
    interface IpCheckboxList {
        "legend": string;
        "options": string;
    }
}
export interface IpCheckboxCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIpCheckboxElement;
}
export interface IpCheckboxListCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIpCheckboxListElement;
}
declare global {
    interface HTMLIpCheckboxElementEventMap {
        "checkboxChange": { name: string; checked: boolean };
    }
    interface HTMLIpCheckboxElement extends Components.IpCheckbox, HTMLStencilElement {
        addEventListener<K extends keyof HTMLIpCheckboxElementEventMap>(type: K, listener: (this: HTMLIpCheckboxElement, ev: IpCheckboxCustomEvent<HTMLIpCheckboxElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLIpCheckboxElementEventMap>(type: K, listener: (this: HTMLIpCheckboxElement, ev: IpCheckboxCustomEvent<HTMLIpCheckboxElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLIpCheckboxElement: {
        prototype: HTMLIpCheckboxElement;
        new (): HTMLIpCheckboxElement;
    };
    interface HTMLIpCheckboxListElementEventMap {
        "selectionChanged": string[];
    }
    interface HTMLIpCheckboxListElement extends Components.IpCheckboxList, HTMLStencilElement {
        addEventListener<K extends keyof HTMLIpCheckboxListElementEventMap>(type: K, listener: (this: HTMLIpCheckboxListElement, ev: IpCheckboxListCustomEvent<HTMLIpCheckboxListElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLIpCheckboxListElementEventMap>(type: K, listener: (this: HTMLIpCheckboxListElement, ev: IpCheckboxListCustomEvent<HTMLIpCheckboxListElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLIpCheckboxListElement: {
        prototype: HTMLIpCheckboxListElement;
        new (): HTMLIpCheckboxListElement;
    };
    interface HTMLElementTagNameMap {
        "ip-checkbox": HTMLIpCheckboxElement;
        "ip-checkbox-list": HTMLIpCheckboxListElement;
    }
}
declare namespace LocalJSX {
    interface IpCheckbox {
        "checked"?: boolean;
        "disabled"?: boolean;
        "identifier"?: string;
        "name"?: string;
        "onCheckboxChange"?: (event: IpCheckboxCustomEvent<{ name: string; checked: boolean }>) => void;
    }
    interface IpCheckboxList {
        "legend"?: string;
        "onSelectionChanged"?: (event: IpCheckboxListCustomEvent<string[]>) => void;
        "options"?: string;
    }
    interface IntrinsicElements {
        "ip-checkbox": IpCheckbox;
        "ip-checkbox-list": IpCheckboxList;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "ip-checkbox": LocalJSX.IpCheckbox & JSXBase.HTMLAttributes<HTMLIpCheckboxElement>;
            "ip-checkbox-list": LocalJSX.IpCheckboxList & JSXBase.HTMLAttributes<HTMLIpCheckboxListElement>;
        }
    }
}
