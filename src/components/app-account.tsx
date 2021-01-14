import { Component, h } from '@stencil/core';

@Component({
  tag: 'ip-app-account'
})
export class IpAppAccount {
  render() {
    return (
      <div class="container o-myaccount">
        <div class="row">
          <div class="eight columns offset-by-two">
            <h1>Mijn account</h1>
          </div>      
        </div>
        <div class="row">
          <div class="eight columns offset-by-two">
            <vaadin-tabs selected="0" class="o-tabs">
              <vaadin-tab>Gegevens</vaadin-tab>
              <vaadin-tab>Mijn inschrijvingen</vaadin-tab>
              <vaadin-tab>Mijn bestellingen</vaadin-tab>
            </vaadin-tabs>
          </div>
        </div>
        <div class="row">
          <div class="eight columns offset-by-two">
            <p>Leverage agile frameworks to provide a robust synopsis for high level overviews.</p>
          </div>      
        </div>
        <div class="row">
          <div class="eight columns offset-by-two">
            <div class="o-myaccount__section">
              <h2>Account informatie  </h2>
            </div>
          </div>      
        </div>
        <div class="row">
          <div class="four columns offset-by-two o-myaccount__address">
              <div>Gegevens</div>
              <div>
                <div>Dhr. Jacob de Fries</div>
                <div>jacob@mail.com</div>
                <div>0634092357</div>
              </div>
          </div>
          <div class="four columns">
          </div>
        </div>
        <div class="row">
          <div class="eight columns offset-by-two">
            <div class="o-myaccount__section">
              <h2>Adresgegevens</h2>
            </div>
          </div>      
        </div>
        <div class="row">
          <div class="four columns offset-by-two o-myaccount__address">
            <div>Bezorgadres</div>
            <div>
              <div>Dhr. Jacob de Fries</div>
              <div>jacob@mail.com</div>
              <div>0634092357</div>
            </div>
          </div>    
          <div class="four columns o-myaccount__address">
            <div>Factuuradres</div>
            <div>
              <div>Dhr. Jacob de Fries</div>
              <div>jacob@mail.com</div>
              <div>0634092357</div>
            </div>
          </div>  
        </div>
      </div>
    );
  }
}

