import React from 'react'

const FullScreen = ({ image }) => (
  <div id="home" class="slider fullscreen">
    <div 
      class="image" 
      data-source={image} 
      style={{ 
        opacity: 1, 
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}>
    </div>
  </div>
)

export default FullScreen;