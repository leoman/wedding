import React from 'react'

import {
  ParallaxWrapper,
} from './styles'

const Parallax = ({ image, position = '50% 50%' }) => (
  <ParallaxWrapper
    mage={image}
    style={{ 
      opacity: 1, 
      backgroundImage: `url(${image})`,
      backgroundPosition: position,
    }}
  >
    <div className="parallax-container">
      <div className="container">
          <p style={{height: '400px'}}>&nbsp;</p>
        </div>
      </div>
  </ParallaxWrapper>
)

export default Parallax;

