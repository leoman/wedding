/* eslint-disable */
import React from 'react'
import {
  NavBar,
  Container,
  NavHeader,
  LogoWrapper,
  Logo,
  MenuWrapper,
  Menu,
  Item,
} from './styles'

const scrollTo = (e, id) => {
  e.preventDefault();
  const element = document.getElementById(id);
  element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
}

const menuItems = [
  {
    href: '#',
    title: 'Home',
    onClick: (e) => scrollTo(e, 'home')
  },
  {
    href: '#wedding',
    title: 'Wedding',
    onClick: (e) => scrollTo(e, 'wedding')
  },
  {
    href: '#food',
    title: 'Food',
    onClick: (e) => scrollTo(e, 'food')
  },
  {
    href: '#photos',
    title: 'Photos',
    onClick: (e) => scrollTo(e, 'photos')
  },
  {
    href: '#travel',
    title: 'Travel',
    onClick: (e) => scrollTo(e, 'travel')
  },
  {
    href: '#parking',
    title: 'Parking',
    onClick: (e) => scrollTo(e, 'parking')
  },
  {
    href: '#rsvp',
    title: 'RSVP',
    onClick: (e) => scrollTo(e, 'rsvp')
  },
  {
    href: '#gifts',
    title: 'Gifts',
    onClick: (e) => scrollTo(e, 'gifts')
  },
]

export default () => (
  <NavBar>				
     <Container className="container">
       <NavHeader>

         <LogoWrapper>
           <Logo src="/assets/images/ks-pm-logo.png" alt="Kirsty & Peter" />
         </LogoWrapper>

       </NavHeader>

       <MenuWrapper>		                  
         <Menu>
           {menuItems.map(({ href, title, onClick }, i) => (
            <Item key={i}>
              <a href={href} style={{lineHeight: '25px' }} onClick={onClick}>{title}</a>
            </Item>
          ))}
          
        </Menu>					
      </MenuWrapper>

    </Container>
  </NavBar>
);
