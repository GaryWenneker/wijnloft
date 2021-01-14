import { Component, Prop, h } from '@stencil/core';

// import { IUser, TSignOut } from '../api/auth';

@Component({
  tag: 'app-header',
})
export class Header {
  @Prop() user?: any;
  @Prop() signOut: any;

  render() {
    // const { user } = this;
    return (
      <nav class="o-page-header" id="myHeader">
        <div class="m-page-wrap">
          <div class="o-header-bottom__inner-wrap">
            <div class="m-flex-columns__col o-header-bottom__col">
              <ul class="m-primary-navigation">
                <li class="m-primary-navigation__item ">
                <stencil-route-link url="/hoe-werkt-het">Hoe werkt het?</stencil-route-link>
                </li>
                <li class="m-primary-navigation__item ">
                <stencil-route-link url="/voordelen">Voordelen</stencil-route-link>
                </li>
                <li class="m-primary-navigation__item__logo">
                <stencil-route-link url="/"><img src="/assets/logo/logo-white.svg"></img></stencil-route-link>
                </li>
                <li class="m-primary-navigation__item ">
                  <stencil-route-link url="/onze-wijnhuizen">Onze wijnhuizen</stencil-route-link>
                </li>
                <li class="m-primary-navigation__item ">
                  <stencil-route-link url="/faq">FAQ</stencil-route-link>
                </li>
              </ul>

            </div>
            <div class="m-flex-columns__col o-header-bottom__col">
              <div class="o-header-bottom__account__button btn-ghost"><stencil-route-link url="/account">Mijn account</stencil-route-link></div>
            </div>
          </div>
        </div>

      </nav>
    );
  }
}
