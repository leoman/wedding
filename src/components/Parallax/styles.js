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
    }

    img {
        display: block;
    }
`;