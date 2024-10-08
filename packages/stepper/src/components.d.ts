/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface IpStepper {
        "backBtnAriaLabel": string;
        "backBtnText": string;
        "continueBtnAriaLabel": string;
        "continueBtnText": string;
        "finishBtnAriaLabel": string;
        "finishBtnText": string;
        "indicatorText": string;
        "simulatorAria": string;
        "steps": number;
    }
}
export interface IpStepperCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIpStepperElement;
}
declare global {
    interface HTMLIpStepperElementEventMap {
        "finishButtonClick": void;
    }
    interface HTMLIpStepperElement extends Components.IpStepper, HTMLStencilElement {
        addEventListener<K extends keyof HTMLIpStepperElementEventMap>(type: K, listener: (this: HTMLIpStepperElement, ev: IpStepperCustomEvent<HTMLIpStepperElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLIpStepperElementEventMap>(type: K, listener: (this: HTMLIpStepperElement, ev: IpStepperCustomEvent<HTMLIpStepperElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLIpStepperElement: {
        prototype: HTMLIpStepperElement;
        new (): HTMLIpStepperElement;
    };
    interface HTMLElementTagNameMap {
        "ip-stepper": HTMLIpStepperElement;
    }
}
declare namespace LocalJSX {
    interface IpStepper {
        "backBtnAriaLabel"?: string;
        "backBtnText"?: string;
        "continueBtnAriaLabel"?: string;
        "continueBtnText"?: string;
        "finishBtnAriaLabel"?: string;
        "finishBtnText"?: string;
        "indicatorText"?: string;
        "onFinishButtonClick"?: (event: IpStepperCustomEvent<void>) => void;
        "simulatorAria"?: string;
        "steps"?: number;
    }
    interface IntrinsicElements {
        "ip-stepper": IpStepper;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "ip-stepper": LocalJSX.IpStepper & JSXBase.HTMLAttributes<HTMLIpStepperElement>;
        }
    }
}
