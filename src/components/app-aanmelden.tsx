import { Component, h } from '@stencil/core';

@Component({
  tag: 'ip-app-aanmelden'
})
export class IpAppAanmelden {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="twelve column">

            <h1>Aanmelden</h1>

            <div class="container">
              <div id="mc_embed_signup">
                <form action="https://koesveld.us7.list-manage.com/subscribe/post?u=2a91a33d2ac968f3cba847e84&amp;id=dd9cbbad75" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                  <div id="mc_embed_signup_scroll">
                    <h2>Subscribe</h2>
                    <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
                    <div class="mc-field-group">
                      <label htmlFor="mce-EMAIL">Email Address  <span class="asterisk">*</span>
                      </label>
                      <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" />
                    </div>
                    <div class="mc-field-group">
                      <label htmlFor="mce-FNAME">First Name </label>
                      <input type="text" value="" name="FNAME" class="" id="mce-FNAME" />
                    </div>
                    <div class="mc-field-group">
                      <label htmlFor="mce-LNAME">Last Name </label>
                      <input type="text" value="" name="LNAME" class="" id="mce-LNAME" />
                    </div>
                    <div class="mc-field-group size1of2">
                      <label htmlFor="mce-BIRTHDAY-month">Birthday </label>
                      <div class="datefield">
                        <span class="subfield monthfield"><input class="birthday " type="text" pattern="[0-9]*" value="" placeholder="MM" size={2} maxlength="2" name="BIRTHDAY[month]" id="mce-BIRTHDAY-month" /></span> /
		                <span class="subfield dayfield"><input class="birthday " type="text" pattern="[0-9]*" value="" placeholder="DD" size={2} maxlength="2" name="BIRTHDAY[day]" id="mce-BIRTHDAY-day" /></span>
                        <span class="small-meta nowrap">( mm / dd )</span>
                      </div>
                    </div>	<div id="mce-responses" class="clear">
                      <div class="response" id="mce-error-response" style={{ display: 'none' }}></div>
                      <div class="response" id="mce-success-response" style={{ display: 'none' }}></div>
                    </div>
                    <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true"><input type="text" name="b_2a91a33d2ac968f3cba847e84_dd9cbbad75" tabindex="-1" value="" /></div>
                    <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button" /></div>
                  </div>
                </form>
              </div>
            </div>
            <stencil-route-link url="/">Go to home page</stencil-route-link>

          </div>
        </div>
      </div>
    );
  }
}

