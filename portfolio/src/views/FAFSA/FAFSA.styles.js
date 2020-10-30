import styled from 'styled-components';

const Background = styled.div`
    background: linear-gradient(#DDEAF1 50%, transparent 50%) no-repeat;
`;

const BodyContainer = styled.div`
    padding: 0 10rem 0 4rem;

    @media (width: 570px){
        width: 80%;
        padding: 0;
    }
`;

const Video = styled.video`
    width: 1100px;
    margin: -4rem auto 7rem auto;
    display: block;
    text-align: center;

    @media (max-width: 1500px){
        width: 75%;
        margin-bottom: 3rem;
    }

    @media (max-width: 770px){
        width: 90%;
        margin-bottom: 3rem;
    }
`;

export {
    Background,
    BodyContainer,
    Video
}