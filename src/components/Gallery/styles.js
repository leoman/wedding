import styled from 'styled-components';

export const GalleryWrapper = styled.section`
    position: relative;
    background: #fff;
    overflow: hidden;
`;

export const ItemsWrapper = styled.div`
    position: relative;
    height: 950px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

export const Item = styled.div`
    width: 25%;
    height: 475px;
    /* position: absolute;
    left: 0px;
    top: 0px; */
`;

export const IMG = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    transition: all 0.3s;
    display: block;
`;