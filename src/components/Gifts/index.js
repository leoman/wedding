import React, { useState } from 'react'
import Email from '../Email'

import {
  Wrapper,
  GiftPopUpWrapper,
  PopUpWrapper,
  Close,
  ContentWrapper,
  BankingWrapper,
  GiftsListWrapper,
  GiftWrapper,
  Title,
  Description,
  Price
} from './styles'

const giftList = [
  {
    id: 1,
    title: 'Hawaii - Stargazing Tour',
    description: 'Hawaii has some of the best stargazing on earth, and the observatories to match! We’d love the chance to gaze out into space and discover what’s out there.',
    price: '£200',
  },
  {
    id: 2,
    title: 'Hawaii - Volcanoes National Park',
    description: 'We love to hike and explore, and visiting one of the USA’s famous national parks is an absolute must! Bring on those lava flows.',
    price: '£30',
  },
  {
    id: 3,
    title: 'Hawaii - Snorkeling Tour',
    description: 'Hawaii is home to so much marine life: manta rays, dolphins and turtles can all be found in the pristine waters, and a snorkel tour is a wonderful opportunity for us to see this wildlife for ourselves.',
    price: '£100',
  },
  {
    id: 4,
    title: 'Hawaii - Sunset Dinner Cruise',
    description: 'We’d really love the chance to see some of Hawaii by boat - what better way than with a great dinner on board and a fabulous sunset?',
    price: '£100',
  },
  {
    id: 5,
    title: 'Hawaii - Cocktails',
    description: 'If you can’t enjoy a cocktail with an umbrella poking out the top in Hawaii, then where can you? We can’t wait to toast to married life.',
    price: '£20',
  },
  {
    id: 6,
    title: 'Japan - Onsen Visit',
    description: 'Japanese Onsen are baths fed by hot springs, and is a custom steeped in tradition that we\'d love to experience.',
    price: '£100',
  },
  {
    id: 7,
    title: 'Japan - Kaiseki Dinner',
    description: 'Japan’s Kaiseki Dinner tradition involves enjoying a tasting menu style meal with lots of courses featuring the best of Japanese cuisine. We’d love to give one a try!',
    price: '£100',
  },
  {
    id: 8,
    title: 'Japan - Tea Ceremony',
    description: 'Did you really think we (Kirsty) would go to Japan and not experience a traditional tea ceremony?',
    price: '£50',
  },
  {
    id: 9,
    title: 'Japan - Studio Ghibli Museum',
    description: 'The first time we went out to see a film together, we watched the Studio Ghibli film “My Neighbour Totoro”. We’ve enjoyed so many of these wonderful animations since then and we’d love to learn more about studio.',
    price: '£20',
  },
  {
    id: 10,
    title: 'Japan - Ryokan Stay',
    description: 'A Ryokan is a traditional Japanese inn famed for their tatami rooms and tasty food; they are often found in onsen towns and can give a real insight into Japanese culture. We\'d love to include a stay in a Ryonka as part of our adventure.',
    price: '£200',
  },
  {
    id: 11,
    title: 'Japan - Okonomyaki',
    description: 'Famed in Osaka, okonomyaki is type of Japanese pancake. There are loads of different kinds with many different ingredients and we\'re keen to try them for ourselves!',
    price: '£20',
  },
  {
    id: 12,
    title: 'Japan - Bamboo Forest',
    description: 'Waving bamboo groves are another sight for which Japan is renowned, and we would love to visit one of these beautiful forests.',
    price: '£30',
  },
  {
    id: 13,
    title: 'Japan - Torii Gate Visit',
    description: 'One of the most famous and iconic sights of Japan is the Fushimi Inari shrine in southern Kyoto: the red Torii gates link together to create a stunning cultural sight.',
    price: '£50',
  },
  {
    id: 14,
    title: 'Japan - Bullet Train ticket',
    description: 'Getting around Japan can be part of the experience, and we are excited to spend some out of journey time on the famous bullet trains.',
    price: '£50',
  },
  {
    id: 15,
    title: 'Japan - Izakaya Hopping',
    description: 'And izakaya is an informal Japanese bar serving small plates of food; izakaya hopping is a must-so experience, jumping between establishments for taste of different dishes.',
    price: '£75',
  },
  {
    id: 16,
    title: 'Japan - Street Food Tour',
    description: 'We\'d love to tour some of the street food markets of Japan with the helpful expertise of a local guide to lead us to the tastiest morsels.',
    price: '£50',
  },
  {
    id: 17,
    title: 'Japan - Team Lab Borderless Museum',
    description: 'A museum with surprising a colourful exhibits, no trip to Tokyo can be complete without a visit.',
    price: '£30',
  },
  {
    id: 18,
    title: 'Japan - Snow Monkeys',
    description: 'Too cute to miss, we’d love to spend a day visit the Japanese Macaques, or Snow Monkeys, hanging out in the hot pools they love.',
    price: '£100',
  },
  {
    id: 19,
    title: 'Japan - Nara Park',
    description: 'Nara Park lies just outside Kyoto and plays host to a herd of friendly dear; always happy to meet some animal friends, we think we’d really enjoy a visit! ',
    price: '£10',
  },
  {
    id: 20,
    title: 'Japan - Shimanami Kaido Cycle',
    description: 'The Shimanami Kaido area is filled with beautiful islands, linked together with bridges: perfect for taking in views from a bicycle (probably not a bicycle made for two, however).',
    price: '£50',
  },
  {
    id: 21,
    title: 'Japan - Kumano Kodo Trail Hike',
    description: 'The Kumano Kodo trail is a multi-day hike which gets off the beaten track and would allow us to explore some stunning scenery on food. Perfect!',
    price: '£40',
  },
  {
    id: 22,
    title: 'Japan - Vending Machine Ramen',
    description: 'So it’s apparently a thing: all sorts of weird and wonderful things can be purchased from vending machines in Japan and if you’re willing to treat us, we’re willing to give it a try!',
    price: '£5',
  },
  {
    id: 23,
    title: 'Vietnam - Halong Bay Boat Trip',
    description: 'Halong Bay is a unique and beautiful landscape in Northern Vietnam with towering limestone islands emerging from the water. We hope to visit and try our hands at cruising and kayaking the waters.',
    price: '£100',
  },
  {
    id: 24,
    title: 'Vietnam - Street Food Tour',
    description: 'You can learn so much about a culture through its food! By visiting local markets with a guide, we’d love to sample some of the traditional, local dishes Vietnam has to offer. YUM!',
    price: '£50',
  },
  {
    id: 25,
    title: 'Vietnam - Sapa Valley',
    description: 'Sapa is a lush, green region of Vietnam, away from the hustle and bustle of the main cities. We hope to hike among the rice fields and go in search of beautiful peaceful views.',
    price: '£100',
  },
  {
    id: 26,
    title: 'Vietnam - Cu Chi Tunnels',
    description: 'We’d love to learn a bit more about Vietnam’s history by visiting the Cu Chi Tunnels. We’d planned to visit here before the pandemic ended our round the world trip prematurely, and we’re really excited to be able to dive into Vietnam’s fascinating heritage.',
    price: '£30',
  },
  {
    id: 27,
    title: 'Vietnam - Massage ',
    description: 'As we get to the end of our honeymoon, what better way to really relax and unwind than with a massage?',
    price: '£50',
  },
  {
    id: 28,
    title: 'Vietnam - Overwater Villa',
    description: 'If we’re ever going to stay in an overwater villa, our honeymoon seems to be the right time to do it!',
    price: '£200',
  },
  {
    id: 29,
    title: 'Vietnam - Cocktails',
    description: 'A toast to the end of our honeymoon! We’d love to soak up some of the wonderful Vietnamese culture over a drink or two',
    price: '£20',
  },
  {
    id: 30,
    title: 'Vietnam - Banh Mi',
    description: 'Banh Mi is a traditional Vietnamese sandwich and while we\'ve tried them (and loved them!) before, we\'d love to sample the real deal in Vietnam!',
    price: '£10',
  }
];

const Gift = ({ id, title, description, price, onClick }) => (
  <GiftWrapper id={id} onClick={onClick}>
    <Title>{title}</Title>
    <Description>{description}</Description>
    <Price>{price}</Price>
  </GiftWrapper>
)

const GiftsList = ({ showGiftPopup }) => (
  <GiftsListWrapper>
    {giftList.map((giftItem) => <Gift {...giftItem} onClick={() => showGiftPopup(giftItem)} />)}
  </GiftsListWrapper>
);

const GiftPopUp = ({ showPopup, closeGiftPopup, giftItem: { title, description, price } }) => (
  <GiftPopUpWrapper display={showPopup}>
    <PopUpWrapper>
      <Close onClick={closeGiftPopup}>X</Close>
      <ContentWrapper>
        <Title>{title}</Title>
        <Description>
          {description}
          <br /><br />
          <p><b>Please make a bank transfer to the following details:</b></p>
          <p><b>Name:</b> Kirsty and Peter<br />
          <b>Account:</b> 123456789<br />
          <b>Sort Code:</b> 01-23-56<br />
          <b>Ref:</b> Your Name</p>
        </Description>
        <Price>{price}</Price>
      </ContentWrapper>
      <BankingWrapper>
        
        <Email title={title} price={price} />
      </BankingWrapper>
    </PopUpWrapper>
  </GiftPopUpWrapper>
)

const Gifts = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [giftItem, setGiftItem] = useState({});

  const showGiftPopup = (giftItem) => {
    setShowPopup(true);
    setGiftItem(giftItem);
  }

  const closeGiftPopup = () => {
    setShowPopup(false);
    setGiftItem({});
  }

  return (
    <Wrapper id="gifts" className="gifts">
      <GiftPopUp
        showPopup={showPopup}
        closeGiftPopup={closeGiftPopup}
        giftItem={giftItem}
      />
      <div className="container">
        <div className="vc_row wpb_row vc_row-fluid">
          <div className="wpb_column vc_column_container vc_col-sm-12">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="row">
                  <div className="col-md-12 col-xs-12">
                    <div className="section-title  text-center">
                      <h2 data-bigletter="G">Gifts</h2>
                      <hr />
                      <p>Vestibulum ante ipsum primis in faucibus orci. Morbi tincidunt urna imperdiet tincidunt rhoncus. Sed mollis ligula non massa aliquam faucibus.</p>
                    
                      <GiftsList showGiftPopup={showGiftPopup} />
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
};

export default Gifts;