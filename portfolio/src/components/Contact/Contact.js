import React, { Component } from 'react';
import { 
    CenterDiv,
    HeaderContainer,
    HeaderDiv,
    HeaderLine,
    Icon, 
    IconDiv,
    Padding,
    SuzieHeader,
    TextDiv
} from '../Contact/Contact.styles';
import mail from '../../assets/mail.png';
import linkedin from '../../assets/linked-in.png';

class Contact extends Component {
    render() {
        return (
            <div>
                <Padding>
                    <CenterDiv>
                        <HeaderDiv>
                            <TextDiv>
                                <HeaderContainer>
                                    <HeaderLine />
                                    <SuzieHeader>Let's connect</SuzieHeader>
                                </HeaderContainer>
                                <p>
                                I’m always open for freelance opportunities, consulting work, or someone new to send pictures of my Frenchie, Franklin.  If you’re interested, let’s connect!
                                </p>
                            </TextDiv>
                        </HeaderDiv>
                        <IconDiv>
                            <a href="mailto: susanneduquette@gmail.com">
                                <Icon src={mail} />
                            </a>
                            <a href="https://www.linkedin.com/in/susanneduquette/" target="_blank" rel="noopener noreferrer">
                                <Icon src={linkedin} />
                            </a>
                        </IconDiv>
                    </CenterDiv>
                </Padding>
            </div>
        );
    }
}

export default Contact;