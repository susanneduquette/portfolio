import styled from 'styled-components';

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
    height: 5rem;
    padding-top: 2rem;
`;

const Favicon = styled.img`
    width: 45px;
    height: 34px;
    padding-left: 2.5rem;
`;



export {
    Favicon,
    HeaderContainer,
    HeaderItem,
    HeaderLinkContainer
};