import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import favicon from '../../assets/favicon.png';
import { DisplayDiv, Favicon, HeaderContainer } from './Header.styles';
import CollapseNav from '../CollapseNav/CollapseNav';

class Header extends Component {
    render() {
        return (
            <div>
                <HeaderContainer>
                    <NavLink to ="/">
                        <Favicon src={favicon} alt="Susanne Duquette" />
                    </NavLink>
                    <DisplayDiv>
                        <CollapseNav pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                    </DisplayDiv>
                </HeaderContainer>
            </div>
        );
    }
}

export default Header;