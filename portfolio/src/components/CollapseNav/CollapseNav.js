import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { slide as Menu } from 'react-burger-menu';
import { NavItem, NavUl } from './CollapseNav.styles';

var styles = {
    bmBurgerButton: {
      position: 'absolute',
      width: '40px',
      height: '30px',  
      top: '25px',
      right: '25px',
    },
    bmBurgerBars: {
      background: '#363535',
    },
    bmCrossButton: {
      height: '40px',
      width: '40px',
      marginRight: '1.5rem',
    },
    bmCross: {
      background: '#363535',
      height: '40px',
    },
    bmMenu: {
      background: '#F7D903',
      marginTop: '-1.5rem',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em',
      boxShadow: '0 0 8px 0 rgba(0, 0, 0, 0.1)',
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }


class CollapseNav extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      menuOpen: true
    }
  }

  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})  
  }
  
  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu () {
    this.setState({menuOpen: true})
  }

  // This can be used to toggle the menu, e.g. when using a custom icon
  // Tip: You probably want to hide either/both default icons if using a custom icon
  // See https://github.com/negomi/react-burger-menu#custom-icons
  toggleMenu () {
    this.setState(state => ({menuOpen: !state.menuOpen}))
  }

  render () {
    return (
      <div>
        <Menu 
          styles= {styles}
          isOpen={this.state.menuOpen}
          onStateChange={(state) => this.handleStateChange(state)}
        >
          <NavUl>
              <NavItem>
                  <HashLink onClick={() => this.closeMenu()} to="/#home">Home</HashLink>
              </NavItem>
              <NavItem>
                  <HashLink onClick={() => this.closeMenu()} to="/#work">Work</HashLink>
              </NavItem>
              <NavItem>
                  <HashLink onClick={() => this.closeMenu()} to="/#about">About</HashLink>
              </NavItem>
              <NavItem>
                  <HashLink onClick={() => this.closeMenu()} to="/#contact">Contact</HashLink>
              </NavItem>
              <NavItem>
                  <HashLink onClick={() => this.closeMenu()} to="/#resume">Resume</HashLink>
              </NavItem>
          </NavUl>
        </Menu>
      </div>
    )
  }
}

export default CollapseNav;