import styled from 'styled-components';

export const NavBar = styled.div`
  z-index: 9999;
  width: 100%;
  height: auto;
  min-height: 0;
  padding: 30px 0;
  margin-bottom: 0;
  border-radius: 0;
  border: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  font-family: "Poppins", sans-serif;
  -webkit-backface-visibility: hidden;
  
  

  position: fixed;
  display: block;
  padding: 0;
  background-color: #fff;
  -webkit-box-shadow: 5px 5px 15px 0 rgb(31 31 31 / 7%);
  -moz-box-shadow: 5px 5px 15px 0 rgba(31, 31, 31, 0.07);
  box-shadow: 5px 5px 15px 0 rgb(31 31 31 / 7%);

  animation-name: navSlideDown;
  animation-duration: 1s;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NavHeader = styled.div`
  display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    justify-items: center;
    height: auto!important;

    margin-right: 0;
    margin-left: 0;
`;

export const LogoWrapper = styled.a`
  height: 65px;
  width: auto;
`;

export const Logo = styled.img`
  padding: 10px 0;
  height: 65px;
  display: block;
`;

export const MenuWrapper = styled.div`
  margin-right: 0;
  margin-left: 0;

  padding-left: 0;
  padding-right: 0;
  padding: 20px 0;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
`;

export const Menu = styled.ul`
  float: right!important;
  list-style: none;
  margin-bottom: 0;
`;

export const Item = styled.li`
  float: left;

  a {
    position: relative;
    display: block;
    padding: 10px 15px;

    cursor: pointer;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: .5px;
    padding-top: 0;
    padding-bottom: 0;
    background-color: transparent !important;

    color: #282828;
    line-height: 25px;
  }
`;
