import React from 'react';

import Layout from './components/Layout'
import FullScreen from './components/FullScreen'
import Navigation from './components/Navigation'
import Intro from './components/Intro'
import WeddingDetails from './components/WeddingDetails'
import Parallax from './components/Parallax'
import Food from './components/Food'
import Gallery from './components/Gallery'
import Travel from './components/Travel'
import Parking from './components/Parking'
import RSVP from './components/RSVP'
import Gifts from './components/Gifts'

import './App.css';

function App() {
  return (
    <Layout>
      <FullScreen image="https://live.staticflickr.com/65535/48668920908_2c6c9c3c0f_h.jpg" />
      <Navigation />
      <Intro />
      <WeddingDetails />
      <Parallax image="https://live.staticflickr.com/65535/49124363181_71351d15c1_h.jpg" />
      <Food />
      <Gallery />
      <Travel />
      <Parallax image="https://live.staticflickr.com/65535/48976266966_d4491b15c5_h.jpg" />
      <Parking />
      <RSVP />
      <Parallax image="https://live.staticflickr.com/65535/49564381476_56afcc5dbd_h.jpg" position='50% -377px' />
      <Gifts />
      
    </Layout>
  );
}

export default App;
