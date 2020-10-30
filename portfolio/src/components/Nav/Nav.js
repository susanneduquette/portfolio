import React, { Component } from 'react';
import { HashLink } from 'react-router-hash-link';
import { NavCircle, NavItem, NavItemCircle, NavUl } from './Nav.styles';


class Nav extends Component {
    render() {
        return (
            <div>
                <NavItemCircle>
                    <NavUl>
                        <NavItem>
                            <HashLink
                            style={{ marginRight: '-.5rem' }}
                            to="/#home"
                            >Home
                            </HashLink>
                        </NavItem>
                        <NavItem>
                            <HashLink
                                style={{ marginRight: '1rem' }}
                                to="/#work"
                                >Work
                                </HashLink>
                        </NavItem>
                        <NavItem>
                             <HashLink
                                style={{ marginRight: '1.5rem' }}
                                to="/#about"
                                >About
                            </HashLink>
                        </NavItem>
                        <NavItem>
                            <HashLink
                                style={{ marginRight: '.75rem' }}
                                to="/#contact"
                                >Contact
                            </HashLink>
                        </NavItem>
                        <NavItem>
                            <HashLink
                                style={{ marginRight: '-1rem' }}
                                to="/#resume"
                                >Resume
                            </HashLink>
                        </NavItem>
                    </NavUl>
                    <NavCircle />
                </NavItemCircle>
            </div>
        );
    }
}

export default Nav;