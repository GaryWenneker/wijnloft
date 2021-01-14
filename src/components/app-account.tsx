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
            <stencil-route-link url="/">Go to home page</stencil-route-link>

          </div>
        </div>
      </div>
    );
  }
}

