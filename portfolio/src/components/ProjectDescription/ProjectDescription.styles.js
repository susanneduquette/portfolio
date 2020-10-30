import styled from 'styled-components';

const BodyContainer = styled.div`
    padding: 0 0 2rem 8rem;
    width: 55%;

    @media (max-width: 570px){
        width: 90%;
        padding: 0 1rem 1rem 1rem;
    }
`;   

const Image = styled.img`
    width: 1100px;
    margin: 1.5rem auto 7rem auto;
    display: block;
    text-align: center;

    @media (max-width: 1500px){
        width: 75%;
        margin-bottom: 3rem;
    }

    @media (max-width: 570px){
        width: 90%;
        margin-bottom: 3rem;
    }
`;

export {
    BodyContainer,
    Image
}