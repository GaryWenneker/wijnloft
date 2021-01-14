import { Component, h } from '@stencil/core';

@Component({
  tag: 'ip-app-account'
})
export class IpAppAccount {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="twelve column">

            <h1>Hello You!</h1>
            <vaadin-tabs selected="3">
              <vaadin-tab>Page 1</vaadin-tab>
              <vaadin-tab>Page 2</vaadin-tab>
              <vaadin-tab>Page 3</vaadin-tab>
              <vaadin-tab>Page 4</vaadin-tab>
            </vaadin-tabs>
            <stencil-route-link url="/">Go to home page</stencil-route-link>

          </div>
        </div>
      </div>
    );
  }
}

