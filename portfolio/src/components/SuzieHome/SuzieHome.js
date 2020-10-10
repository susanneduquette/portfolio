import React, { Component } from 'react';
import { 
    Background,
    Card, 
    CardContainer,
    CardGrid, 
    CardSubitle,
    CardTitle, 
    HeaderContainer, 
    HeaderDiv, 
    HeaderLine, 
    SuzieHeader, 
    UXDesignerHeader
} from './SuzieHome.styles';
import starlies from '../../assets/starlies-site-mockup.png';
import fafsa from '../../assets/fafsa-mockup.png';
import pantheon from '../../assets/pantheon-mockup.png';

class SuzieHome extends Component {
    render() {
        return (
            <div>
                <Background>
                    <HeaderDiv>
                        <HeaderContainer>
                            <HeaderLine />
                            <SuzieHeader>Hey, I'm Suzie!</SuzieHeader>
                    </HeaderContainer>
                        <UXDesignerHeader>UI/UX Designer</UXDesignerHeader>
                    </HeaderDiv>
                    <CardGrid>
                        <CardContainer>
                            <Card src={starlies} alt="Starlies Horoscopes"/>
                            <CardTitle>Starlies Horoscopes</CardTitle>
                            <CardSubitle>Branding, UI/UX</CardSubitle>
                        </CardContainer>
                        <CardContainer>
                            <Card src={fafsa} alt="FAFSA Site Redesign"/>
                            <CardTitle>FAFSA Site Redesign</CardTitle>
                            <CardSubitle>UI/UX</CardSubitle>
                        </CardContainer>
                        <CardContainer>
                            <Card src={pantheon} alt="Pantheon Component Library"/>
                            <CardTitle>Pantheon Component Library</CardTitle>
                            <CardSubitle>UI/UX, React.js Development</CardSubitle>
                        </CardContainer>
                        <CardContainer>
                            <Card src={starlies} alt="Starlies Horoscopes"/>
                            <CardTitle>FAFSA Site Redesign</CardTitle>
                            <CardSubitle>UI/UX</CardSubitle>
                        </CardContainer>
                    </CardGrid>
                </Background>
            </div>
        );
    }
}

export default SuzieHome;