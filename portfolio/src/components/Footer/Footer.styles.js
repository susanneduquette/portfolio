import styled from 'styled-components';

const FooterContainer = styled.footer`
    height: 75px;
    background-color: #ffffff;
    display: flex;
    position: relative;
    align-items: center;
    bottom: 0px;
`;

const FooterFavicon = styled.img`
    width: 40px;
    margin-left: auto;
    margin-right: 0;
    padding-right: 2rem;
`;

const FooterText = styled.h3`
    font-size: 14px;
    color: #363535;
    padding-left: 2rem;
    font-weight: 400;
`;

export {
    FooterContainer,
    FooterFavicon,
    FooterText
};