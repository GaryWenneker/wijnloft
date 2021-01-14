import '@vaadin/vaadin-tabs/vaadin-tabs.js';

import { registerStyles, css } from '@vaadin/vaadin-themable-mixin/register-styles.js';

// Register your custom CSS rules for vaadin-button
registerStyles('vaadin-tabs', css`
  :host([orientation="horizontal"]) [part="tabs"] {
    margin: 0;
  }
  :host::after {
    box-shadow: 0 0 0 0 red;
    opacity: 0.15;
    transition: 0.15s 0.02s transform, 0.8s 0.17s opacity;
  }
`);

import { Component, Listen, State, h } from '@stencil/core';

import { LocationSegments } from '@stencil/router';

@Component({
  tag: 'ip-app-root'
})
export class IpAppRoot {
  @State()
  pageState: string[] = [];

  @Listen('pageEnter')
  onPageEnter(e: CustomEvent<LocationSegments>) {
    this.pageState = [...this.pageState, `Page enter ${e.detail.pathname}`];
  }

  @Listen('pageLeave')
  onPageLeave(e: CustomEvent<LocationSegments>) {
    this.pageState = [...this.pageState, `Page leave ${e.detail.pathname}`];
  }

  render() {
    return (
      <main>
        <app-header></app-header>
        <stencil-router>
          <stencil-route-switch scrollTopOffset={0}>
            <stencil-route
              url="/"
              component="ip-app-home"
              exact={true}
              routeRender={props => <ip-stencil-route-listener props={props} />}
            />
            <stencil-route
              url="/aanmelden"
              component="ip-app-aanmelden"
              exact={true}
              routeRender={props => <ip-stencil-route-listener props={props} />}
            />
            <stencil-route
              url="/about"
              exact={true}
              component="ip-app-about"
              routeRender={props => <ip-stencil-route-listener props={props} />}
            />
            <stencil-route
              url="/hoe-werkt-het"
              exact={true}
              component="ip-app-hoe"
              routeRender={props => <ip-stencil-route-listener props={props} />}
            />
            <stencil-route
              url="/voordelen"
              exact={true}
              component="ip-app-voordelen"
              routeRender={props => <ip-stencil-route-listener props={props} />}
            />
            <stencil-route
              url="/onze-wijnhuizen"
              exact={true}
              component="ip-app-onze-wijnhuizen"
              routeRender={props => <ip-stencil-route-listener props={props} />}
            />
            <stencil-route
              url="/faq"
              exact={true}
              component="ip-app-faq"
              routeRender={props => <ip-stencil-route-listener props={props} />}
            />
            <stencil-route
              url="/account"
              exact={true}
              component="ip-app-account"
              routeRender={props => <ip-stencil-route-listener props={props} />}
            />
          </stencil-route-switch>
        </stencil-router>
        <ip-app-footer></ip-app-footer>
      </main>
    );
  }
}
