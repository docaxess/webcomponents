/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface IpToggle {
        "activeLabel": string;
        "ariaLabel": string;
        "checked": boolean;
        "inactiveLabel": string;
        "size": 'small' | 'medium' | 'large';
        "toggleDisabled": boolean;
    }
}
export interface IpToggleCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIpToggleElement;
}
declare global {
    interface HTMLIpToggleElementEventMap {
        "toggleChange": boolean;
    }
    interface HTMLIpToggleElement extends Components.IpToggle, HTMLStencilElement {
        addEventListener<K extends keyof HTMLIpToggleElementEventMap>(type: K, listener: (this: HTMLIpToggleElement, ev: IpToggleCustomEvent<HTMLIpToggleElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLIpToggleElementEventMap>(type: K, listener: (this: HTMLIpToggleElement, ev: IpToggleCustomEvent<HTMLIpToggleElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLIpToggleElement: {
        prototype: HTMLIpToggleElement;
        new (): HTMLIpToggleElement;
    };
    interface HTMLElementTagNameMap {
        "ip-toggle": HTMLIpToggleElement;
    }
}
declare namespace LocalJSX {
    interface IpToggle {
        "activeLabel"?: string;
        "ariaLabel"?: string;
        "checked"?: boolean;
        "inactiveLabel"?: string;
        "onToggleChange"?: (event: IpToggleCustomEvent<boolean>) => void;
        "size"?: 'small' | 'medium' | 'large';
        "toggleDisabled"?: boolean;
    }
    interface IntrinsicElements {
        "ip-toggle": IpToggle;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "ip-toggle": LocalJSX.IpToggle & JSXBase.HTMLAttributes<HTMLIpToggleElement>;
        }
    }
}
