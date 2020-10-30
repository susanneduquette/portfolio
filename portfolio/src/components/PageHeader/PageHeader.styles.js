import styled from 'styled-components';

const DisplayDiv = styled.div`
    display: none;
    @media(max-width: 770px){
        display: block;
    }
`;

const HeaderItem = styled.a`
    font-size: 1.1rem;
    font-weight: 200;
    text-decoration: none;
    padding-right: 2.5rem;
    color: #363535;

    &:hover{
        font-weight: 500;
    }
`;

const HeaderLinkContainer = styled.div`
    padding-left: 2.5rem;
    text-align : right;
`;

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    height: 2.5rem;
    padding: 1rem 0 1.25rem 1.5rem;
`;

const Favicon = styled.img`
    width: 50px;
    height: 50px;
`;



export {
    DisplayDiv,
    Favicon,
    HeaderContainer,
    HeaderItem,
    HeaderLinkContainer
};