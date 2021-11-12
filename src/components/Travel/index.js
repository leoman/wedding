import React from 'react'

import {
  FoodWrapper,
} from './styles'

const Travel = () => (
  <FoodWrapper id="travel" className="travel">
    <div className="container">
      <div className="vc_row wpb_row vc_row-fluid">
        <div className="wpb_column vc_column_container vc_col-sm-12">
          <div className="vc_column-inner">
            <div className="wpb_wrapper">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 col-xs-12">
                  <div className="section-title intro-text text-center">
                    <h2 data-bigletter="T">Travel</h2>
                    <hr />
                    <p>If you are planning on using a taxi we suggest you pre-book one for the end of the reception.</p>
                    <p>The following accommodations are suggested by the venue:</p>
                    <p><a href="https://thenookbrewhouse.co.uk/rooms-at-the-nook/">The Nook Inn</a></p>
                    <p><a href="https://www.oldbridgeholmfirth.co.uk">The Old Bridge Inn</a></p>
                    <p><a href="https://www.the-huntsman-inn.com">The Huntsman Inn</a></p>
                    <p><a href="https://thepickledpheasant.com">The Pickled Pheasant</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </FoodWrapper>
)

export default Travel;