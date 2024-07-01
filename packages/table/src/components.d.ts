/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface IpTable {
        "currency": string;
        "options": string;
        "state1": string;
        "state2": string;
        "state3": string;
    }
}
declare global {
    interface HTMLIpTableElement extends Components.IpTable, HTMLStencilElement {
    }
    var HTMLIpTableElement: {
        prototype: HTMLIpTableElement;
        new (): HTMLIpTableElement;
    };
    interface HTMLElementTagNameMap {
        "ip-table": HTMLIpTableElement;
    }
}
declare namespace LocalJSX {
    interface IpTable {
        "currency"?: string;
        "options"?: string;
        "state1"?: string;
        "state2"?: string;
        "state3"?: string;
    }
    interface IntrinsicElements {
        "ip-table": IpTable;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "ip-table": LocalJSX.IpTable & JSXBase.HTMLAttributes<HTMLIpTableElement>;
        }
    }
}
