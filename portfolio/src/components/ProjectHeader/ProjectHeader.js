import React, { Component } from 'react';
import {
    Background,
    ProjectContainer,
    ProjectImage,
    ProjectName,
    ProjectType,
    Subtitle,
    SubtitleContainer,
    SubtitleLine,
    SubtitleSection,
    WhiteBox,
} from './ProjectHeader.styles';

class ProjectHeader extends Component {
    render() {
        return (
            <div>
                <Background>
                    <ProjectImage src={this.props.image} />
                    <WhiteBox>
                        <ProjectContainer>
                            <ProjectName>{this.props.name}</ProjectName>
                            <ProjectType>{this.props.type}</ProjectType>
                        </ProjectContainer>
                        <ProjectContainer>
                            <p>{this.props.description}</p>
                        </ProjectContainer>
                        <SubtitleSection>
                            <SubtitleContainer>
                                <SubtitleLine />
                                <Subtitle>Tools</Subtitle>
                            </SubtitleContainer>
                            <p>{this.props.tools}</p>
                        </SubtitleSection>
                        <SubtitleSection>
                            <SubtitleContainer>
                                <SubtitleLine />
                                <Subtitle>Timeline</Subtitle>
                            </SubtitleContainer>
                            <p>{this.props.date}</p>
                        </SubtitleSection>
                    </WhiteBox>
                </Background>
            </div>
        );
    }
}

export default ProjectHeader;