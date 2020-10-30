import styled from 'styled-components';

const Background = styled.div`
    background: linear-gradient(#6DBCB8 50%, transparent 50%) no-repeat;
`;

const FoodisleLink = styled.a`
    font-family: 'Source Sans Pro', 'Proxima Nova', 'Roboto', 'Arial', sans-serif;
    font-weight: 700;
    color: #363535;
    border-bottom: 2px solid #F7D903;
    font-size: 1.25rem;
    text-align: center;
`;

const LinkDiv = styled.div`
    text-align: center;
    margin-bottom: 5rem;
`;

const MobileVideo = styled.video`
    width: 300px;
    margin: -7rem auto 4rem auto;
    display: block;
    text-align: center;
    padding 0 6rem;

    @media (max-width: 1500px){
        margin-bottom: 3rem;
        margin-top: -3rem;
        padding: 0;
    }

    @media (max-width: 770px){
        margin-bottom: 3rem;
    }
`;

export {
    Background,
    FoodisleLink,
    LinkDiv,
    MobileVideo,
}