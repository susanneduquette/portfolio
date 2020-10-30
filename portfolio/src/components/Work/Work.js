import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {
    Body,
    DescriptionDiv, 
    HoverDiv,
    HoverText,
    ProjectDescription, 
    ProjectTitle, 
    SeeWork,
    TitleDiv, 
    WorkContainer, 
    WorkTextContainer
} from './Work.styles';

class Work extends Component {
    render() {
        return (
            <div>
                <Body>
                    <WorkContainer>
                        <SeeWork>See some of my <strong>recent work</strong> below</SeeWork>
                    </WorkContainer>
                    <NavLink to="/starlies">
                        <WorkContainer>
                            <WorkTextContainer>
                                <TitleDiv>
                                    <ProjectTitle>Starlies</ProjectTitle>
                                </TitleDiv>
                                <DescriptionDiv>
                                    <ProjectDescription>Rebrand & site redesign</ProjectDescription>
                                </DescriptionDiv>
                            </WorkTextContainer>
                            <HoverDiv>
                                <HoverText>View <strong>project</strong></HoverText>
                            </HoverDiv>
                        </WorkContainer> 
                    </NavLink>
                    <NavLink to="/fafsa">
                        <WorkContainer>
                            <WorkTextContainer>
                                <TitleDiv>
                                    <ProjectTitle>FAFSA</ProjectTitle>
                                </TitleDiv>
                                <DescriptionDiv>
                                    <ProjectDescription>UX research & prototype</ProjectDescription>
                                </DescriptionDiv>
                            </WorkTextContainer>
                            <HoverDiv>
                                <HoverText>View <strong>project</strong></HoverText>
                            </HoverDiv>
                        </WorkContainer> 
                    </NavLink> 
                    <NavLink to="/pantheon">
                        <WorkContainer>
                            <WorkTextContainer>
                                <TitleDiv>
                                    <ProjectTitle>Pantheon</ProjectTitle>
                                </TitleDiv>
                                <DescriptionDiv>
                                    <ProjectDescription>ReactJS component library</ProjectDescription>
                                </DescriptionDiv>
                            </WorkTextContainer>
                            <HoverDiv>
                                <HoverText>View <strong>project</strong></HoverText>
                            </HoverDiv>
                        </WorkContainer> 
                    </NavLink>
                    <NavLink to="/foodisle">
                        <WorkContainer>
                            <WorkTextContainer>
                                <TitleDiv>
                                    <ProjectTitle>Foodisle</ProjectTitle>
                                </TitleDiv>
                                <DescriptionDiv>
                                    <ProjectDescription>Homepage & navigation design</ProjectDescription>
                                </DescriptionDiv>
                            </WorkTextContainer>
                            <HoverDiv>
                                <HoverText>View <strong>project</strong></HoverText>
                            </HoverDiv>
                        </WorkContainer> 
                    </NavLink>
                </Body> 
            </div>
        );
    }
}

export default Work;