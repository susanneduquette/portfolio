import React, { Component } from 'react';
import favicon from '../../assets/favicon.png';
import { Favicon, HeaderContainer, HeaderItem, HeaderLinkContainer } from './Header.styles';

class Header extends Component {
    render() {
        return (
            <div>
                <HeaderContainer>
                    <Favicon src={favicon} alt="Susanne Duquette" />
                    <HeaderLinkContainer>
                        <HeaderItem href="google.com">Work</HeaderItem>
                        <HeaderItem href="">About</HeaderItem>
                        <HeaderItem href="">Resume</HeaderItem>
                        <HeaderItem href="">Contact</HeaderItem>
                    </HeaderLinkContainer>
                </HeaderContainer>
            </div>
        );
    }
}

export default Header;