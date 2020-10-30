import React, { Component } from 'react';
import button from '../../assets/scroll-to-top-button_1.png';
import { BackToTop, Button, ButtonDiv } from './ScrollButton.styles';

export default class ScrollButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
          is_visible: false
        };
    }
  
    componentDidMount() {
        var scrollComponent = this;
        document.addEventListener("scroll", function(e) {
          scrollComponent.toggleVisibility();
        });
    }
  
    toggleVisibility() {
        if (window.pageYOffset > 300) {
            this.setState({
              is_visible: true
            });
          } else {
            this.setState({
              is_visible: false
            });
          }
    }
  
    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
    }
  
    render() {
        const { is_visible } = this.state;
        return (
          <ButtonDiv>
            {is_visible && (
              <div onClick={() => this.scrollToTop()}>
                <Button src={button} />
                <BackToTop>Back to top</BackToTop>
              </div>
            )}
          </ButtonDiv>
        );
      }
    }
