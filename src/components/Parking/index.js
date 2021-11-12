import React from 'react'

import {
  Wrapper,
} from './styles'

const Parking = () => (
  <Wrapper id="parking" className="travel">
    <div className="container">
      <div className="vc_row wpb_row vc_row-fluid">
        <div className="wpb_column vc_column_container vc_col-sm-12">
          <div className="vc_column-inner">
            <div className="wpb_wrapper">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 col-xs-12">
                  <div className="section-title intro-text text-center">
                    <h2 data-bigletter="P">Parking</h2>
                    <hr />
                    <p>Street parking on the roads around the church is free. The reception venue has it's own car park with plenty of space available.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Wrapper>
)

export default Parking;