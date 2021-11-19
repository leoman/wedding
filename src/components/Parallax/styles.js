import styled from 'styled-components';

export const ParallaxWrapper = styled.section`
    position: relative;
    z-index: 1;
    overflow: hidden;
    color: #fff;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center top;
    background-size: cover;

    @media only screen and (max-width: 768px) {
        background-size: contain;
        background-position: center center !important;
        background-attachment: local;
    }

    @media only screen 
    and (min-device-width: 768px) 
    and (max-device-width: 1024px) 
    and (-webkit-min-device-pixel-ratio: 1) {
        background-size: contain;
        background-position: center center !important;
        background-attachment: local;
    }

    @media only screen 
    and (min-device-width: 768px) 
    and (max-device-width: 1024px) 
    and (-webkit-min-device-pixel-ratio: 2) {
        background-size: contain;
        background-position: center center !important;
        background-attachment: local;
    }

    img {
        display: block;
    }
`;