import React from 'react'

import {
  FoodWrapper,
} from './styles'

const Food = () => (
  <FoodWrapper id="food" className="food">
    <div className="container">
      <div className="vc_row wpb_row vc_row-fluid">
        <div className="wpb_column vc_column_container vc_col-sm-12">
          <div className="vc_column-inner">
            <div className="wpb_wrapper">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 col-xs-12">
                  <div className="section-title intro-text  text-center">
                    <h2 data-bigletter="F">Food</h2>
                    <hr />
                    <h4>Starters</h4>
                    <br />
                    <p>Chicken Caesar Salad Croquettes served with Baby Gem Leaf and a homemade Caesar Dressing</p>
                    <p>Chef's homemade Butternut Squash Soup with Chilli Creme Fraiche</p>
                    <br />
                    <h4>Main</h4>
                    <br />
                    <p>6 Hour Braised Beef Joint with a rich Holmfirth Red Wine Jus</p>
                    <p>Cod Fillet served with Samphire and a Pancetta and Lemon Butter</p>
                    <br />
                    <h4>Dessert</h4>
                    <br />
                    <p>Baked Banoffee Cheesecake with Chocolate Covered Honeycomb</p>
                    <p>Sticky Toffee Pudding with Rich Toffee Sauce and Custard</p>
                    <br />
                    <h4>Dietary Requirements:</h4>
                    <p>Please let us know of any dietary requirements; we can absolutely accommodate this.</p>
                    <p>*If for the main course you need a vegetarian or vegan option, please let us know</p>

                    <h2 data-bigletter="C">Cakes</h2>
                    <hr />
                    <p>We will of course be having a cake as part of our wedding reception, but rather than having a traditional giant fruit cake, we're going to have a cake table with lots of different options.  If you are a keen baker and would be willing to contribute to the cake table, we'd love to have a selection of cakes, biscuits desserts or sweet treats baked by our guests to everyone to share and enjoy (and go back for seconds). If you would like to contribute something to the cake table, do let us know so we can shower you with thanks; you are more than welcome to make anything you like and we will put aside some labels where you could list possible allergens so we can make other guests aware.</p>
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

export default Food;