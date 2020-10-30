import React, { Component } from 'react';
import { 
    CenterDiv,
    HeaderContainer,
    HeaderDiv,
    HeaderLine, 
    Image,
    SuzieHeader,
    TextDiv
} from '../About/About.styles';
import profile from '../../assets/susanne-duquette.jpg';

class About extends Component {
    render() {
        return (
            <div>
                <CenterDiv>
                    <HeaderDiv>
                        <Image src={profile} alt="Susanne Duquette Profile" />
                        <TextDiv>
                            <HeaderContainer>
                                <HeaderLine />
                                <SuzieHeader>Nice to meet you!</SuzieHeader>
                            </HeaderContainer>
                            <p>I’m a UI/UX Designer based in Boston, Ma, an avid French Bulldog lover, and mac ’n cheese advocate.  I received my Bachelor’s degree in Graphic Design from Emmanuel College, and am working on my Master in Human Factors and Information Design at Bentley University. 
                                </p>
                        </TextDiv>
                    </HeaderDiv>
                </CenterDiv>
            </div>
        );
    }
}

export default About;