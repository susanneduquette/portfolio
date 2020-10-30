import React, { Component } from 'react';
import favicon from '../../assets/favicon.png';
import { FooterFavicon, FooterContainer, FooterText } from './Footer.styles';

class Footer extends Component {
    render() {
        return (
            <div>
                <FooterContainer>
                    <FooterText>Made with <span role="img" aria-label="yellow-heart">💛</span> by Susanne Duquette</FooterText>
                    <FooterFavicon src={favicon} alt="Susanne Duquette" />
                </FooterContainer>
            </div>
        );
    }
}

export default Footer;