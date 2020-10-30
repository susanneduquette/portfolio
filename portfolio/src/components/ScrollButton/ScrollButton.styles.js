import styled from 'styled-components';

const BackToTop = styled.h3`
    font-size: 1.25rem;
    padding-top: .5rem;

    @media (max-width: 770px){
        display: none;
    }
`;

const ButtonDiv = styled.div`
    cursor: pointer;
    text-align: center;
    font-size: 1rem;
    position: fixed;
    bottom: 0;
    right: 0;
    margin: 0 3rem 6.5rem 0;
    
    @media (max-width: 570px){
        margin-right: 1.5rem;
    }
`;

const Button = styled.img`
    width: 55px;

    @media (max-width: 570px){
        width: 45px;
    }
`;

export {
    BackToTop,
    Button,
    ButtonDiv
}