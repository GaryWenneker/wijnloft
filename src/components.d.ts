/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { LocationSegments, RouteRenderProps, } from "@stencil/router";
export namespace Components {
    interface AppHeader {
        "signOut": any;
        "user"?: any;
    }
    interface GlBackgroundVideo {
        "muted": boolean;
        "poster": string;
        "src": string;
    }
    interface IpAppAanmelden {
    }
    interface IpAppAbout {
    }
    interface IpAppAccount {
    }
    interface IpAppFaq {
    }
    interface IpAppFooter {
        "backgroundColor": string;
        "margin": string;
    }
    interface IpAppHoe {
    }
    interface IpAppHome {
        "data": any[];
    }
    interface IpAppOnzeWijnhuizen {
    }
    interface IpAppRoot {
    }
    interface IpAppVoordelen {
    }
    interface IpContentBlock {
        "backgroundColor": string;
        "margin": string;
    }
    interface IpStencilRouteListener {
        "props": RouteRenderProps | undefined;
    }
    interface IpUspCounter {
        "backgroundColor": string;
        "count": string;
        "margin": string;
    }
    interface IpWineBlock {
        "intro": string;
        "title": string;
    }
    interface WebAccordion {
        /**
          * close an accordion item
          * @param index
         */
        "close": (index: number) => Promise<void>;
        /**
          * Open an accordion item
          * @param index
         */
        "open": (index: number) => Promise<void>;
    }
    interface WebAccordionItem {
        /**
          * close the accordion item
         */
        "closeItem": () => Promise<void>;
        /**
          * index of accordion item from top to bottom
         */
        "index": number;
        /**
          * The mutation observer config to listen for content changes in the accordion item
         */
        "mutationObserverConfig": {
            childList: boolean;
            subtree: boolean;
        };
        /**
          * accordion item is open or opening (css transition)
         */
        "open": boolean;
        /**
          * open the accordion item
         */
        "openItem": () => Promise<void>;
    }
}
declare global {
    interface HTMLAppHeaderElement extends Components.AppHeader, HTMLStencilElement {
    }
    var HTMLAppHeaderElement: {
        prototype: HTMLAppHeaderElement;
        new (): HTMLAppHeaderElement;
    };
    interface HTMLGlBackgroundVideoElement extends Components.GlBackgroundVideo, HTMLStencilElement {
    }
    var HTMLGlBackgroundVideoElement: {
        prototype: HTMLGlBackgroundVideoElement;
        new (): HTMLGlBackgroundVideoElement;
    };
    interface HTMLIpAppAanmeldenElement extends Components.IpAppAanmelden, HTMLStencilElement {
    }
    var HTMLIpAppAanmeldenElement: {
        prototype: HTMLIpAppAanmeldenElement;
        new (): HTMLIpAppAanmeldenElement;
    };
    interface HTMLIpAppAboutElement extends Components.IpAppAbout, HTMLStencilElement {
    }
    var HTMLIpAppAboutElement: {
        prototype: HTMLIpAppAboutElement;
        new (): HTMLIpAppAboutElement;
    };
    interface HTMLIpAppAccountElement extends Components.IpAppAccount, HTMLStencilElement {
    }
    var HTMLIpAppAccountElement: {
        prototype: HTMLIpAppAccountElement;
        new (): HTMLIpAppAccountElement;
    };
    interface HTMLIpAppFaqElement extends Components.IpAppFaq, HTMLStencilElement {
    }
    var HTMLIpAppFaqElement: {
        prototype: HTMLIpAppFaqElement;
        new (): HTMLIpAppFaqElement;
    };
    interface HTMLIpAppFooterElement extends Components.IpAppFooter, HTMLStencilElement {
    }
    var HTMLIpAppFooterElement: {
        prototype: HTMLIpAppFooterElement;
        new (): HTMLIpAppFooterElement;
    };
    interface HTMLIpAppHoeElement extends Components.IpAppHoe, HTMLStencilElement {
    }
    var HTMLIpAppHoeElement: {
        prototype: HTMLIpAppHoeElement;
        new (): HTMLIpAppHoeElement;
    };
    interface HTMLIpAppHomeElement extends Components.IpAppHome, HTMLStencilElement {
    }
    var HTMLIpAppHomeElement: {
        prototype: HTMLIpAppHomeElement;
        new (): HTMLIpAppHomeElement;
    };
    interface HTMLIpAppOnzeWijnhuizenElement extends Components.IpAppOnzeWijnhuizen, HTMLStencilElement {
    }
    var HTMLIpAppOnzeWijnhuizenElement: {
        prototype: HTMLIpAppOnzeWijnhuizenElement;
        new (): HTMLIpAppOnzeWijnhuizenElement;
    };
    interface HTMLIpAppRootElement extends Components.IpAppRoot, HTMLStencilElement {
    }
    var HTMLIpAppRootElement: {
        prototype: HTMLIpAppRootElement;
        new (): HTMLIpAppRootElement;
    };
    interface HTMLIpAppVoordelenElement extends Components.IpAppVoordelen, HTMLStencilElement {
    }
    var HTMLIpAppVoordelenElement: {
        prototype: HTMLIpAppVoordelenElement;
        new (): HTMLIpAppVoordelenElement;
    };
    interface HTMLIpContentBlockElement extends Components.IpContentBlock, HTMLStencilElement {
    }
    var HTMLIpContentBlockElement: {
        prototype: HTMLIpContentBlockElement;
        new (): HTMLIpContentBlockElement;
    };
    interface HTMLIpStencilRouteListenerElement extends Components.IpStencilRouteListener, HTMLStencilElement {
    }
    var HTMLIpStencilRouteListenerElement: {
        prototype: HTMLIpStencilRouteListenerElement;
        new (): HTMLIpStencilRouteListenerElement;
    };
    interface HTMLIpUspCounterElement extends Components.IpUspCounter, HTMLStencilElement {
    }
    var HTMLIpUspCounterElement: {
        prototype: HTMLIpUspCounterElement;
        new (): HTMLIpUspCounterElement;
    };
    interface HTMLIpWineBlockElement extends Components.IpWineBlock, HTMLStencilElement {
    }
    var HTMLIpWineBlockElement: {
        prototype: HTMLIpWineBlockElement;
        new (): HTMLIpWineBlockElement;
    };
    interface HTMLWebAccordionElement extends Components.WebAccordion, HTMLStencilElement {
    }
    var HTMLWebAccordionElement: {
        prototype: HTMLWebAccordionElement;
        new (): HTMLWebAccordionElement;
    };
    interface HTMLWebAccordionItemElement extends Components.WebAccordionItem, HTMLStencilElement {
    }
    var HTMLWebAccordionItemElement: {
        prototype: HTMLWebAccordionItemElement;
        new (): HTMLWebAccordionItemElement;
    };
    interface HTMLElementTagNameMap {
        "app-header": HTMLAppHeaderElement;
        "gl-background-video": HTMLGlBackgroundVideoElement;
        "ip-app-aanmelden": HTMLIpAppAanmeldenElement;
        "ip-app-about": HTMLIpAppAboutElement;
        "ip-app-account": HTMLIpAppAccountElement;
        "ip-app-faq": HTMLIpAppFaqElement;
        "ip-app-footer": HTMLIpAppFooterElement;
        "ip-app-hoe": HTMLIpAppHoeElement;
        "ip-app-home": HTMLIpAppHomeElement;
        "ip-app-onze-wijnhuizen": HTMLIpAppOnzeWijnhuizenElement;
        "ip-app-root": HTMLIpAppRootElement;
        "ip-app-voordelen": HTMLIpAppVoordelenElement;
        "ip-content-block": HTMLIpContentBlockElement;
        "ip-stencil-route-listener": HTMLIpStencilRouteListenerElement;
        "ip-usp-counter": HTMLIpUspCounterElement;
        "ip-wine-block": HTMLIpWineBlockElement;
        "web-accordion": HTMLWebAccordionElement;
        "web-accordion-item": HTMLWebAccordionItemElement;
    }
}
declare namespace LocalJSX {
    interface AppHeader {
        "signOut"?: any;
        "user"?: any;
    }
    interface GlBackgroundVideo {
        "muted"?: boolean;
        "poster"?: string;
        "src"?: string;
    }
    interface IpAppAanmelden {
    }
    interface IpAppAbout {
    }
    interface IpAppAccount {
    }
    interface IpAppFaq {
    }
    interface IpAppFooter {
        "backgroundColor"?: string;
        "margin"?: string;
    }
    interface IpAppHoe {
    }
    interface IpAppHome {
        "data"?: any[];
    }
    interface IpAppOnzeWijnhuizen {
    }
    interface IpAppRoot {
    }
    interface IpAppVoordelen {
    }
    interface IpContentBlock {
        "backgroundColor"?: string;
        "margin"?: string;
    }
    interface IpStencilRouteListener {
        "onPageEnter"?: (event: CustomEvent<LocationSegments>) => void;
        "onPageLeave"?: (event: CustomEvent<LocationSegments>) => void;
        "props"?: RouteRenderProps | undefined;
    }
    interface IpUspCounter {
        "backgroundColor"?: string;
        "count"?: string;
        "margin"?: string;
    }
    interface IpWineBlock {
        "intro"?: string;
        "title"?: string;
    }
    interface WebAccordion {
    }
    interface WebAccordionItem {
        /**
          * index of accordion item from top to bottom
         */
        "index"?: number;
        /**
          * The mutation observer config to listen for content changes in the accordion item
         */
        "mutationObserverConfig"?: {
            childList: boolean;
            subtree: boolean;
        };
        /**
          * triggered when the content of the accordion item changes
         */
        "onContentChanged"?: (event: CustomEvent<any>) => void;
        /**
          * triggered when the accordion item is opened
         */
        "onOpenEvent"?: (event: CustomEvent<any>) => void;
        /**
          * accordion item is open or opening (css transition)
         */
        "open"?: boolean;
    }
    interface IntrinsicElements {
        "app-header": AppHeader;
        "gl-background-video": GlBackgroundVideo;
        "ip-app-aanmelden": IpAppAanmelden;
        "ip-app-about": IpAppAbout;
        "ip-app-account": IpAppAccount;
        "ip-app-faq": IpAppFaq;
        "ip-app-footer": IpAppFooter;
        "ip-app-hoe": IpAppHoe;
        "ip-app-home": IpAppHome;
        "ip-app-onze-wijnhuizen": IpAppOnzeWijnhuizen;
        "ip-app-root": IpAppRoot;
        "ip-app-voordelen": IpAppVoordelen;
        "ip-content-block": IpContentBlock;
        "ip-stencil-route-listener": IpStencilRouteListener;
        "ip-usp-counter": IpUspCounter;
        "ip-wine-block": IpWineBlock;
        "web-accordion": WebAccordion;
        "web-accordion-item": WebAccordionItem;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-header": LocalJSX.AppHeader & JSXBase.HTMLAttributes<HTMLAppHeaderElement>;
            "gl-background-video": LocalJSX.GlBackgroundVideo & JSXBase.HTMLAttributes<HTMLGlBackgroundVideoElement>;
            "ip-app-aanmelden": LocalJSX.IpAppAanmelden & JSXBase.HTMLAttributes<HTMLIpAppAanmeldenElement>;
            "ip-app-about": LocalJSX.IpAppAbout & JSXBase.HTMLAttributes<HTMLIpAppAboutElement>;
            "ip-app-account": LocalJSX.IpAppAccount & JSXBase.HTMLAttributes<HTMLIpAppAccountElement>;
            "ip-app-faq": LocalJSX.IpAppFaq & JSXBase.HTMLAttributes<HTMLIpAppFaqElement>;
            "ip-app-footer": LocalJSX.IpAppFooter & JSXBase.HTMLAttributes<HTMLIpAppFooterElement>;
            "ip-app-hoe": LocalJSX.IpAppHoe & JSXBase.HTMLAttributes<HTMLIpAppHoeElement>;
            "ip-app-home": LocalJSX.IpAppHome & JSXBase.HTMLAttributes<HTMLIpAppHomeElement>;
            "ip-app-onze-wijnhuizen": LocalJSX.IpAppOnzeWijnhuizen & JSXBase.HTMLAttributes<HTMLIpAppOnzeWijnhuizenElement>;
            "ip-app-root": LocalJSX.IpAppRoot & JSXBase.HTMLAttributes<HTMLIpAppRootElement>;
            "ip-app-voordelen": LocalJSX.IpAppVoordelen & JSXBase.HTMLAttributes<HTMLIpAppVoordelenElement>;
            "ip-content-block": LocalJSX.IpContentBlock & JSXBase.HTMLAttributes<HTMLIpContentBlockElement>;
            "ip-stencil-route-listener": LocalJSX.IpStencilRouteListener & JSXBase.HTMLAttributes<HTMLIpStencilRouteListenerElement>;
            "ip-usp-counter": LocalJSX.IpUspCounter & JSXBase.HTMLAttributes<HTMLIpUspCounterElement>;
            "ip-wine-block": LocalJSX.IpWineBlock & JSXBase.HTMLAttributes<HTMLIpWineBlockElement>;
            "web-accordion": LocalJSX.WebAccordion & JSXBase.HTMLAttributes<HTMLWebAccordionElement>;
            "web-accordion-item": LocalJSX.WebAccordionItem & JSXBase.HTMLAttributes<HTMLWebAccordionItemElement>;
        }
    }
}
