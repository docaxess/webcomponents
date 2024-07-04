/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface IpDropdown {
        "dropdownTitle": string;
        "itemsOptions": string;
        "placeholder": string;
    }
}
export interface IpDropdownCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIpDropdownElement;
}
declare global {
    interface HTMLIpDropdownElementEventMap {
        "itemSelected": string;
    }
    interface HTMLIpDropdownElement extends Components.IpDropdown, HTMLStencilElement {
        addEventListener<K extends keyof HTMLIpDropdownElementEventMap>(type: K, listener: (this: HTMLIpDropdownElement, ev: IpDropdownCustomEvent<HTMLIpDropdownElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLIpDropdownElementEventMap>(type: K, listener: (this: HTMLIpDropdownElement, ev: IpDropdownCustomEvent<HTMLIpDropdownElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLIpDropdownElement: {
        prototype: HTMLIpDropdownElement;
        new (): HTMLIpDropdownElement;
    };
    interface HTMLElementTagNameMap {
        "ip-dropdown": HTMLIpDropdownElement;
    }
}
declare namespace LocalJSX {
    interface IpDropdown {
        "dropdownTitle"?: string;
        "itemsOptions"?: string;
        "onItemSelected"?: (event: IpDropdownCustomEvent<string>) => void;
        "placeholder"?: string;
    }
    interface IntrinsicElements {
        "ip-dropdown": IpDropdown;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "ip-dropdown": LocalJSX.IpDropdown & JSXBase.HTMLAttributes<HTMLIpDropdownElement>;
        }
    }
}