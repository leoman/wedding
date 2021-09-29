import React from 'react'

import {
  GalleryWrapper,
  ItemsWrapper,
  Item,
  IMG
} from './styles'

const images = [
  'https://live.staticflickr.com/65535/48888835557_62476de15a_b.jpg',
  'https://live.staticflickr.com/65535/48485354942_0667fabbe0_b.jpg',
  'https://live.staticflickr.com/65535/49496531702_ef854a683e_b.jpg',
  'https://live.staticflickr.com/65535/48662363436_3034ac61ef_b.jpg',
  'https://live.staticflickr.com/65535/48592694771_0f3ed0d064_b.jpg',
  'https://live.staticflickr.com/65535/48888835557_62476de15a_b.jpg',
  'https://live.staticflickr.com/65535/49127299608_9ef829c1d6_c.jpg',
  'https://live.staticflickr.com/65535/48976423832_6f3b03025a_c.jpg',
]

const Images = () => images.map((image, i) => (
  <Item key={i} className="portfolio-item branding">
    <IMG src={image} alt="Kirsty And Peter" />
  </Item>
))

const Gallery = () => (
  <GalleryWrapper id="photos">
    <div className="container-fluid">
      <ItemsWrapper className="row portfolio-items">
        <Images />
      </ItemsWrapper>
    </div>
  </GalleryWrapper>
)

export default Gallery;
        