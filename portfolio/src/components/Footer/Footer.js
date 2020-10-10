import React, { Component } from 'react';
import favicon from '../../assets/favicon.png';
import { FooterFavicon, FooterContainer, FooterText } from './Footer.styles';

class Footer extends Component {
    render() {
        return (
            <div>
                <FooterContainer>
                    <FooterText>Designed and coded by <strong>Susanne Duquette ©2020</strong></FooterText>
                    <FooterFavicon src={favicon} alt="Susanne Duquette" />
                </FooterContainer>
            </div>
        );
    }
}

export default Footer;