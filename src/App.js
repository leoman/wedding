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
      <FullScreen image="https://live.staticflickr.com/65535/48669287526_009e0115dc_4k.jpg" />
      <Navigation />
      <Intro />
      <WeddingDetails />
      <Parallax image="https://live.staticflickr.com/65535/49124363181_9c81445264_k.jpg" />
      <Food />
      <Gallery />
      <Travel />
      <Parallax image="https://live.staticflickr.com/65535/48978225946_220a3f92dd_3k.jpg" position='50% -377px' />
      <Parking />
      <RSVP />
      <Parallax image="https://live.staticflickr.com/65535/49564381476_3afaea2171_k.jpg" position='50% -377px' />
      <Gifts />
      
    </Layout>
  );
}

export default App;
