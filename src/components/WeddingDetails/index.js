import React from 'react'

import {
  WeddingDetailsWrapper,
} from './styles'

const WeddingDetails = () => (
  <WeddingDetailsWrapper id="wedding">
    <div className="container">
      <div className="vc_row wpb_row vc_row-fluid">
        <div className="wpb_column vc_column_container vc_col-sm-12">
          <div className="vc_column-inner">
            <div className="wpb_wrapper">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 col-xs-12">
                  <div className="section-title  text-center">
                    <h2 data-bigletter="W">Wedding</h2>
                  </div>
                  <div className=" text-center">
                    <hr />
                    <p>
                      The wedding will be held on Saturday, March 21, 2016. We'll start with a nonsectarian ceremony, then move to the hotel for the reception. Dress code will be black tie optional.
                    </p>

                    <div className="row">
                      <div className="col-md-6">
                        <h4>CEREMONY</h4>
                        <p className="">3:00PM – 4:00PM</p>
                        <p>New Faith Church</p>
                        <p>415 Greenwich St (at Bethune St)</p>
                        <p>New York, NY 10014</p>
                        <p>(212) 555–0123</p>
                      </div>
                    
                      <div className="col-md-6">
                        <h4>RECEPTION</h4>
                        <p>5:00PM – 10:00PM</p>
                        <p>The Monarch</p>
                        <p>848 Washington St (at W 13th St)</p>
                        <p>New York, NY 10014</p>
                        <p>(212) 555–0123</p>
                      </div>
                    </div>
                    <p>We've reserved a block of rooms at the Wyatt Hotel in Greenwich Village. Just mention the Watson–Gallagher wedding when you reserve.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </WeddingDetailsWrapper>
)

export default WeddingDetails;