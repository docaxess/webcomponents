/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface IpEmail {
        "errorMessage": string;
        "inputLabel": string;
        "invalid": boolean;
        "required": boolean;
    }
    interface IpPassword {
        "errorMessage": string;
        "forgotPasswordLink": string;
        "invalid": boolean;
    }
}
export interface IpEmailCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIpEmailElement;
}
export interface IpPasswordCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIpPasswordElement;
}
declare global {
    interface HTMLIpEmailElementEventMap {
        "inputChange": string;
    }
    interface HTMLIpEmailElement extends Components.IpEmail, HTMLStencilElement {
        addEventListener<K extends keyof HTMLIpEmailElementEventMap>(type: K, listener: (this: HTMLIpEmailElement, ev: IpEmailCustomEvent<HTMLIpEmailElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLIpEmailElementEventMap>(type: K, listener: (this: HTMLIpEmailElement, ev: IpEmailCustomEvent<HTMLIpEmailElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLIpEmailElement: {
        prototype: HTMLIpEmailElement;
        new (): HTMLIpEmailElement;
    };
    interface HTMLIpPasswordElementEventMap {
        "passwordChange": string;
    }
    interface HTMLIpPasswordElement extends Components.IpPassword, HTMLStencilElement {
        addEventListener<K extends keyof HTMLIpPasswordElementEventMap>(type: K, listener: (this: HTMLIpPasswordElement, ev: IpPasswordCustomEvent<HTMLIpPasswordElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLIpPasswordElementEventMap>(type: K, listener: (this: HTMLIpPasswordElement, ev: IpPasswordCustomEvent<HTMLIpPasswordElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLIpPasswordElement: {
        prototype: HTMLIpPasswordElement;
        new (): HTMLIpPasswordElement;
    };
    interface HTMLElementTagNameMap {
        "ip-email": HTMLIpEmailElement;
        "ip-password": HTMLIpPasswordElement;
    }
}
declare namespace LocalJSX {
    interface IpEmail {
        "errorMessage"?: string;
        "inputLabel"?: string;
        "invalid"?: boolean;
        "onInputChange"?: (event: IpEmailCustomEvent<string>) => void;
        "required"?: boolean;
    }
    interface IpPassword {
        "errorMessage"?: string;
        "forgotPasswordLink"?: string;
        "invalid"?: boolean;
        "onPasswordChange"?: (event: IpPasswordCustomEvent<string>) => void;
    }
    interface IntrinsicElements {
        "ip-email": IpEmail;
        "ip-password": IpPassword;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "ip-email": LocalJSX.IpEmail & JSXBase.HTMLAttributes<HTMLIpEmailElement>;
            "ip-password": LocalJSX.IpPassword & JSXBase.HTMLAttributes<HTMLIpPasswordElement>;
        }
    }
}
