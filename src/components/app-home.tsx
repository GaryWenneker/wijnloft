import { Component, Prop, State, Watch, h } from '@stencil/core';

import api from '../utils/api'
import isLocalHost from '../utils/isLocalHost';

@Component({
  tag: 'ip-app-home'
})
export class IpAppHome {

  @State()
  wines: any[];

  @Prop()
  data: any[];

  componentDidLoad() {
    api.readAll().then((wines) => {
      if (wines.message === 'unauthorized') {
        if (isLocalHost()) {
          alert('FaunaDB key is not unauthorized. Make sure you set it in terminal session where you ran `npm start`. Visit http://bit.ly/set-fauna-key for more info')
        } else {
          alert('FaunaDB key is not unauthorized. Verify the key `FAUNADB_SERVER_SECRET` set in Netlify enviroment variables is correct')
        }
        return false
      }

      this.data = wines;


      console.log('all wines', wines);

    })
  }

  @Watch('data')
  watching(wines: any[]) {
    console.log('watch!', wines);
    this.wines = wines;
  }

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

          {/* <div class="row">
            <div class="one column">&nbsp;</div>
            <div class="seven columns">
              {this.wines ? `${this.wines.length} wijnen gevonden` : 'geen wijnen gevonden'}
              {
                this.wines.map((wine) => {
                  return <ip-wine-block title={wine.data.name} intro={wine.data.grapes}></ip-wine-block>
                })

              }


            </div>
            <div class="two columns"></div>
          </div> */}
        </div>

        <ip-content-block backgroundColor="#ffffff" margin="6em 0 0 0">
          <div class="row">
            <div class="ten columns offset-by-two title"><h2>Hoe werkt het?</h2></div>
          </div>
          <div class="row">
            <div class="four columns offset-by-two">Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</div>
            <div class="four columns">Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</div>
          </div>
        </ip-content-block>

        <ip-content-block backgroundColor="#F2EFE3" margin="0 0 0 0">
          <div class="row">
            <div class="ten columns offset-by-two title"><h2>Beloften</h2></div>
          </div>
          <div class="row">
            <div class="ten columns offset-by-two intro">Leverage agile frameworks to provide a robust synopsis for high level overviews.</div>
          </div>
          <div class="row">
            <div class="four columns offset-by-two">
              <ip-usp-counter count="01">Leverage agile frameworks to provide a robust synopsis for high level overviews.</ip-usp-counter>
              <ip-usp-counter count="02">Leverage agile frameworks to provide a robust synopsis for high level overviews.</ip-usp-counter>
              <ip-usp-counter count="03">Leverage agile frameworks to provide a robust synopsis for high level overviews.</ip-usp-counter>
            </div>
            <div class="four columns">
              <ip-usp-counter count="04">Leverage agile frameworks to provide a robust synopsis for high level overviews.</ip-usp-counter>
              <ip-usp-counter count="05">Leverage agile frameworks to provide a robust synopsis for high level overviews.</ip-usp-counter>
              <ip-usp-counter count="06">Leverage agile frameworks to provide a robust synopsis for high level overviews.</ip-usp-counter>
            </div>
          </div>
        </ip-content-block>

        <ip-content-block backgroundColor="#ffffff" margin="0 0 0 0">
          <div class="row">
            <div class="twelve columns title" style={{ textAlign: 'center' }}><h2>Onze wijnhuizen</h2></div>
          </div>
          <div class="row">
            <div class="twelve columns" style={{ textAlign: 'center', margin: '0 0 32px 0' }}>Leverage agile frameworks to provide a robust synopsis for high level overviews.</div>
          </div>
          <div class="row">
            <div class="two columns">&nbsp;</div>
            <div class="two columns">ANTINORI</div>
            <div class="two columns">ANTINORI</div>
            <div class="two columns">ANTINORI</div>
            <div class="two columns">ANTINORI</div>
            <div class="two columns"></div>
          </div>
          <div class="row">
            <div class="two columns">&nbsp;</div>
            <div class="two columns">ANTINORI</div>
            <div class="two columns">ANTINORI</div>
            <div class="two columns">ANTINORI</div>
            <div class="two columns">ANTINORI</div>
            <div class="two columns"></div>
          </div>
        </ip-content-block>

        <ip-content-block backgroundColor="#ffffff" margin="0 0 0 0">
          <div class="row">
            <div class="twelve columns title" style={{ textAlign: 'center' }}><h2>Veelgestelde vragen</h2></div>
          </div>
          <div class="row">
            <div class="twelve columns" style={{ textAlign: 'center', margin: '0 0 32px 0' }}>Leverage agile frameworks to provide a robust synopsis for high level overviews.</div>
          </div>
          <div class="row">
            <div class="six columns offset-by-three">
              <web-accordion>
                <web-accordion-item>
                  <h1 class="label" slot="title">item no 1 <span>test</span></h1>
                  <div id="content-1">Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</div>
                </web-accordion-item>
                <web-accordion-item>
                  <h1 slot="title">item no 2</h1>
                  <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                </web-accordion-item>
                <web-accordion-item>
                  <h1 slot="title">item no 3</h1>
                  <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                </web-accordion-item>
              </web-accordion>
            </div>
            <div class="three columns"></div>
          </div>
        </ip-content-block>

      </div>
    );
  }
}
