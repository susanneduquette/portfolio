import React, { Component } from 'react';
import { 
    HeaderContainer, 
    HeaderDiv, 
    HeaderLine, 
    SuzieHeader, 
    UXDesignerHeader
} from './SuzieHome.styles';

class SuzieHome extends Component {
    render() {
        return (
            <div>
                <HeaderDiv>
                    <HeaderContainer>
                        <HeaderLine />
                        <SuzieHeader>Hey, I'm Suzie!</SuzieHeader>
                    </HeaderContainer>
                    <UXDesignerHeader>UI/UX Designer</UXDesignerHeader>
                </HeaderDiv>
            </div>
        );
    }
}

export default SuzieHome;