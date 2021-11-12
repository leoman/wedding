import styled from 'styled-components';

export const Wrapper = styled.section`
    position: relative;
    background: #fff;
`;

export const GiftPopUpWrapper = styled.div`
    background-color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1055;
    display: none;
    display: ${props => props.display ? "flex" : "none"};
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    outline: 0;
    padding: 10rem;
    justify-content: center;
`;

export const PopUpWrapper = styled.div`
    display: flex;
    position: relative;
    width: 50%;
    background-color: #f5f5f5;
    align-self: center;
    z-index: 9055;
`;

export const Close = styled.div`
    position: absolute;
    top:0;
    right: 10px;
    color: #000;
    font-size: 2rem;
    font-weight: bold;
    cursor: pointer;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 60%;
  align-content: space-between;
`;

export const BankingWrapper = styled.div`
    width: 40%;
    padding: 1rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

`;

export const GiftsListWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

export const GiftWrapper = styled.div`
    width: calc(33% - 2rem);
    margin: 1rem;
    background-color: #f5f5f5;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media only screen and (max-width: 768px) {
        width: calc(50% - 2rem);
    }
`;

export const Title = styled.div`
    background-color: #e1b8b5;
    padding: 1rem;
    font-weight: bold;
    font-size: 1.6rem;
    width: 100%;
    text-align: center;
`;

export const Description = styled.div`
    padding: 2rem;
    background-color: #f5f5f5;
    font-size: 1.4rem;
`;

export const Price = styled.div`
    border-top: 1px solid #282828;
    margin: 0 1rem;
    padding: 1rem 0;
    font-weight: bold;
    font-size: 1.4rem;
    width: calc(100% - 2rem);
    text-align: center;
`;