/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface IpPagination {
        "currentPage": number;
        "totalPages": number;
        "visiblePages": number;
    }
}
export interface IpPaginationCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIpPaginationElement;
}
declare global {
    interface HTMLIpPaginationElementEventMap {
        "pageChanged": number;
    }
    interface HTMLIpPaginationElement extends Components.IpPagination, HTMLStencilElement {
        addEventListener<K extends keyof HTMLIpPaginationElementEventMap>(type: K, listener: (this: HTMLIpPaginationElement, ev: IpPaginationCustomEvent<HTMLIpPaginationElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLIpPaginationElementEventMap>(type: K, listener: (this: HTMLIpPaginationElement, ev: IpPaginationCustomEvent<HTMLIpPaginationElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLIpPaginationElement: {
        prototype: HTMLIpPaginationElement;
        new (): HTMLIpPaginationElement;
    };
    interface HTMLElementTagNameMap {
        "ip-pagination": HTMLIpPaginationElement;
    }
}
declare namespace LocalJSX {
    interface IpPagination {
        "currentPage"?: number;
        "onPageChanged"?: (event: IpPaginationCustomEvent<number>) => void;
        "totalPages"?: number;
        "visiblePages"?: number;
    }
    interface IntrinsicElements {
        "ip-pagination": IpPagination;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "ip-pagination": LocalJSX.IpPagination & JSXBase.HTMLAttributes<HTMLIpPaginationElement>;
        }
    }
}
