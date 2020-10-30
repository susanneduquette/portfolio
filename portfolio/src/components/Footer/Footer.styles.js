import styled from 'styled-components';

const FooterContainer = styled.footer`
    height: 75px;
    width: 100%;
    background-color: #ffffff;
    display: flex;
    position: relative;
    align-items: center;
    bottom: 0px;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1);
`;

const FooterFavicon = styled.img`
    width: 30px;
    margin-left: auto;
    margin-right: 0;
    padding-right: 2rem;
`;

const FooterText = styled.h3`
    font-size: 14px;
    color: #363535;
    padding: 1rem 0 0 2rem;
    font-weight: 400;
    vertical-align: baseline;

    @media (max-width: 570px){
        padding-right: 0;
    }
`;

export {
    FooterContainer,
    FooterFavicon,
    FooterText
};