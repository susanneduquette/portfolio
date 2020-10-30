import styled from 'styled-components';

const DisplayDiv = styled.div`
    display: none;
    @media(max-width: 770px){
        display: block;
    }
`;

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    height: 2.5rem;
    padding: 1rem 0 1rem 1.5rem;
`;

const Favicon = styled.img`
    width: 45px;
    height: 45px;
    padding-top: .4rem;

    @media (max-width: 570px){
        width: 50px;
        height: 50px;
    }
`;

export {
    DisplayDiv,
    Favicon,
    HeaderContainer,
};