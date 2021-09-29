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
    title: 'Hot Air Balloon ride',
    description: 'Vestibulum ante ipsum primis in faucibus orci. Morbi tincidunt urna imperdiet tincidunt rhoncus. Sed mollis ligula non massa aliquam faucibus.',
    price: '£100',
  },
  {
    id: 2,
    title: 'Hot Air Balloon ride',
    description: 'Vestibulum ante ipsum primis in faucibus orci. Morbi tincidunt urna imperdiet tincidunt rhoncus. Sed mollis ligula non massa aliquam faucibus.',
    price: '£100',
  },
  {
    id: 3,
    title: 'Hot Air Balloon ride',
    description: 'Vestibulum ante ipsum primis in faucibus orci. Morbi tincidunt urna imperdiet tincidunt rhoncus. Sed mollis ligula non massa aliquam faucibus.',
    price: '£100',
  },
  {
    id: 4,
    title: 'Hot Air Balloon ride',
    description: 'Vestibulum ante ipsum primis in faucibus orci. Morbi tincidunt urna imperdiet tincidunt rhoncus. Sed mollis ligula non massa aliquam faucibus.',
    price: '£100',
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
        <Description>{description}</Description>
        <Price>{price}</Price>
      </ContentWrapper>
      <BankingWrapper>
        <p>Please make a bank transfer to the following details:</p>

        <p>Name: Kirsty and Peter</p>
        <p>Account: 123456789</p>
        <p>Sort Code: 01-23-56</p>
        <p>Ref: Your Name</p>
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
                  <div className="col-md-8 col-md-offset-2 col-xs-12">
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