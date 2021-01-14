import { Component, Prop, h } from '@stencil/core';

@Component({
    tag: 'ip-app-footer'
})
export class IpAppFooter {
    @Prop()
    backgroundColor: string = '#F2EFE3';
    @Prop()
    margin: string = '6em 0 6em 0';
    render() {
        return (
            <div class="o-footer">
                <div class="container">
                    <div class="row">
                        <div class="twelve column">
                            <div class="row">
                                <div class="four columns offset-by-two">
                                    <div class="row">
                                        <div class="six columns o-footer__menu">
                                            <div class="twelve columns label-standard">Klantenservice</div>
                                            <div class="twelve columns label-standard">Privacy</div>
                                            <div class="twelve columns label-standard">Algemene voorwaarden</div>
                                        </div>
                                        <div class="six columns o-footer__menu">
                                            <div class="twelve columns label-standard">Klantenservice</div>
                                            <div class="twelve columns label-standard">Privacy</div>
                                            <div class="twelve columns label-standard">Algemene voorwaarden</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="four columns">
                                    <div class="twelve columns label-standard o-footer__copyright">Copyright © 2020 WijnLoft. Alle rechten voorbehouden</div>
                                    <div class="twelve columns label-standard o-footer__payoff">Gratis verzending vanaf 12 flessen of 100 euro – Op werkdagen besteld voor 11 uur is morgen in huis</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

