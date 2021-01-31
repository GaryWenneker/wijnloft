import { Component, h } from '@stencil/core';

@Component({
  tag: 'ip-app-wijn-overzicht'
})
export class IpAppWijnOverzicht {

  componentDidLoad() {
    // force video to paste onto viewport
    let elem = (document.compatMode === "CSS1Compat") ?
        document.documentElement :
        document.body;
      let height = elem.clientHeight -88;
      let item = document.getElementsByClassName('product-picture').item(0);
      (item as any).style.height = `${height}px`;
  }

  render() {
    return (
      <div class="container o-wine-overview">
          <div class="row">
            <div class="ten columns offset-by-one title">
              <div class="a-backbutton">
                <stencil-route-link url="/hoe-werkt-het"><ion-icon name="chevron-back"></ion-icon>Terug naar de wijnlofts</stencil-route-link>
              </div>
              <h2>Italiaanse wijnen maart 2021</h2>
            </div>
            <div class="ten columns offset-by-one title o-wine-overview__products">

              <div class="o-wine-overview__product">
                
              <stencil-route-link url="/wijn-detail">
                <div class="o-wine-overview__product-image">
                  <img src="/assets/image/wine/antinori/vermentino/background/boxed.png" />
                </div>
                <div class="o-wine-overview__product-description">
                  <div>
                    <div class="product__title">Vermentino 2019</div>
                    <div class="product__price">€18,25</div>
                  </div>
                  <div class="product__payoff">Ideale voorjaars- en zomerwijn</div>
                </div>
              </stencil-route-link>

              </div>
      
              <div class="o-wine-overview__product">
                
                <stencil-route-link url="/wijn-detail">
                  <div class="o-wine-overview__product-image">
                    <img src="/assets/image/wine/antinori/cuvee-royale/background/boxed.png" />
                  </div>
                  <div class="o-wine-overview__product-description">
                    <div>
                      <div class="product__title">Cuvee Royale</div>
                      <div class="product__price">€25,25</div>
                    </div>
                    <div class="product__payoff">De 'Champagne' van Antinori</div>
                  </div>
                </stencil-route-link>
  
                </div>

                <div class="o-wine-overview__product">
                
                <stencil-route-link url="/wijn-detail">
                  <div class="o-wine-overview__product-image">
                    <img src="/assets/image/wine/antinori/scalabrone/background/boxed.png" />
                  </div>
                  <div class="o-wine-overview__product-description">
                    <div>
                      <div class="product__title">Scalabrone 2019</div>
                      <div class="product__price">€21,25</div>
                    </div>
                    <div class="product__payoff">Top rosé uit Bolgheri</div>
                  </div>
                </stencil-route-link>
  
                </div>



            </div>
          </div>
      </div>
    );
  }
}

