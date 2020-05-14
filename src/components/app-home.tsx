import { Component, h } from '@stencil/core';

@Component({
  tag: 'ip-app-home'
})
export class IpAppHome {
  render() {
    return (
      <div>
        <gl-background-video
          src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/V7hI1imKeijyy0rxl/videoblocks-napa-valley-vineyard-at-sunset-tracking-shot_smosefatg__80c8c1c56e847d27868b023963dc160a__P360.mp4"
          poster="/assets/images/homepage.jpg" class="o-video">
        </gl-background-video>
        <div class="overlay active"></div>
        <div class="container inverted text-shadow home-intro">
          <div class="row">
            <div class="one column">&nbsp;</div>
            <div class="seven columns"><h1>Exclusieve wijnen voor u geselecteerd</h1></div>
            <div class="two columns"></div>
          </div>
          <div class="row">
            <div class="one column">&nbsp;</div>
            <div class="seven columns"><p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p></div>
            <div class="two columns"></div>
          </div>
          <div class="row">
            <div class="one column">&nbsp;</div>
            <div class="seven columns"><stencil-route-link url="/aanmelden"><div class="btn-primary">Aanmelden<span class="chevron right"></span></div></stencil-route-link></div>
            <div class="two columns"></div>
          </div>
        </div>
      </div>
    );
  }
}
