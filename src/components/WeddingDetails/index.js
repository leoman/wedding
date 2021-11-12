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
                  <div className="section-title intro-text text-center">
                    <hr />
                    <p>
                      The wedding will be held on Saturday, April 02, 2022.
                    </p>

                    <div className="row">
                      <div className="col-md-6">
                        <h4>CEREMONY</h4>
                        <p>12:30 arrival for 1:00pm - 1:30pm</p>
                        <p>Trinity Church</p>
                        <p>Moor Bottom</p>
                        <p>Honley, Holmfirth</p>
                        <p>West Yorkshire</p>
                        <p>HD9 6DN</p>
                      </div>
                    
                      <div className="col-md-6">
                        <h4>RECEPTION</h4>
                        <p>Arrival from 2:00pm, Carriages at 11:30pm</p>
                        <p>Holmfirth Vineyard</p>
                        <p>Holmbridge</p>
                        <p>Holmfirth</p>
                        <p>West Yorkshire</p>
                        <p>HD9 2QR</p>
                      </div>
                    </div>
                    <br />
                    <p className="intro-text"><b>2:00pm</b> Join us at the vineyard for drinks and canapes</p>
                    <p className="intro-text"><b>4:30pm</b> Speeches and Dinner</p>
                    <p className="intro-text"><b>7:45pm</b> First dance and Disco</p>
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