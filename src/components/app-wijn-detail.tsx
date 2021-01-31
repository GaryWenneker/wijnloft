import { Component, h } from '@stencil/core';

@Component({
  tag: 'ip-app-wijn-detail'
})
export class IpAppWijnDetail {

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
      <div class="container o-wine-detail">
          <div class="product-picture">
            <img src="" />
          </div>     
          <div class="product-details">
            <div class="a-backbutton">
              <stencil-route-link url="/wijn-overzicht"><ion-icon name="chevron-back"></ion-icon>Terug naar de wijnlofts</stencil-route-link>
            </div>

            <div class="product-details__description">
              <h1>Antinori Cuvee Royale</h1>
              <p>De 'Champagne' van Antinori komt uit Franciacorta, een gebied in Noord-Italië dat beroemd is om zijn prachtige mousserende wijnen op de Champagne manier gemaakt. Dus met een tweede gisting op fles, waardoor er een rijk aroma en delicate bubbels ontstaan.</p>
              <p>De gebroeders Antinori waren begin 1900 ware pioniers in het produceren van mousserende wijn met 2e rijping op fles. Giacomo Puccini was fan en de wijn werd destijds op koninklijke banketten geschonken. Hij verdween tijdelijk van de radar, maar met de komst van Franciacorta als officiële appellatie, is Cuvée Royale niet meer weg te denken in de prachtige portfolio van de familie.</p>
            </div>

            <div class="product-details__stock">
              8 flessen over
            </div>
            <div class="product-details__price">
              <div>€25,25</div>
            </div>
            <div class="product-details__amount">
              <vaadin-number-field value="1" min="1" max="10" has-controls></vaadin-number-field>
            </div>
            <div class="product-details__table">
              <span>Specificaties</span>
            </div>
          </div>
      </div>
    );
  }
}

