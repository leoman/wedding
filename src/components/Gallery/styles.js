import styled from 'styled-components';

export const GalleryWrapper = styled.section`
    position: relative;
    background: #fff;
    overflow: hidden;
`;

export const ItemsWrapper = styled.div`
    position: relative;
    height: 800px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

export const Item = styled.div`
    width: 33.3%;
    height: 400px;
    /* position: absolute;
    left: 0px;
    top: 0px; */

    @media only screen and (max-width: 768px) {
        width: 100%;
        height: calc(800px / 3);

        &:nth-child(odd) {
            display: none;
        }
    }
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