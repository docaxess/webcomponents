/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface IpTooltip {
        "btn1AriaLabel": string;
        "btn2AriaLabel": string;
        "tooltipBtn1": string;
        "tooltipBtn2": string;
        "tooltipBtnClose": boolean;
        "tooltipContent": string;
        "tooltipTitle": string;
        "tooltipTrigger": string;
        "type": "click" | "hover";
    }
}
export interface IpTooltipCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIpTooltipElement;
}
declare global {
    interface HTMLIpTooltipElementEventMap {
        "btn1Click": any;
        "btn2Click": any;
    }
    interface HTMLIpTooltipElement extends Components.IpTooltip, HTMLStencilElement {
        addEventListener<K extends keyof HTMLIpTooltipElementEventMap>(type: K, listener: (this: HTMLIpTooltipElement, ev: IpTooltipCustomEvent<HTMLIpTooltipElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLIpTooltipElementEventMap>(type: K, listener: (this: HTMLIpTooltipElement, ev: IpTooltipCustomEvent<HTMLIpTooltipElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLIpTooltipElement: {
        prototype: HTMLIpTooltipElement;
        new (): HTMLIpTooltipElement;
    };
    interface HTMLElementTagNameMap {
        "ip-tooltip": HTMLIpTooltipElement;
    }
}
declare namespace LocalJSX {
    interface IpTooltip {
        "btn1AriaLabel"?: string;
        "btn2AriaLabel"?: string;
        "onBtn1Click"?: (event: IpTooltipCustomEvent<any>) => void;
        "onBtn2Click"?: (event: IpTooltipCustomEvent<any>) => void;
        "tooltipBtn1"?: string;
        "tooltipBtn2"?: string;
        "tooltipBtnClose"?: boolean;
        "tooltipContent"?: string;
        "tooltipTitle"?: string;
        "tooltipTrigger"?: string;
        "type"?: "click" | "hover";
    }
    interface IntrinsicElements {
        "ip-tooltip": IpTooltip;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "ip-tooltip": LocalJSX.IpTooltip & JSXBase.HTMLAttributes<HTMLIpTooltipElement>;
        }
    }
}
