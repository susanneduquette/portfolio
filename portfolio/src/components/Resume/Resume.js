import React, { Component } from 'react';
import {
    Container,
    JobTitle,
    ResumeDiv,
    ResumeLink,
    Section,
    SectionTitle,
    SkillList,
    SkillName,
    SkillsSection,
    Subtitle,
    Title,
    WorkDescription
} from './Resume.styles';
import resume from '../../assets/Susanne_Duquette_AUG20.pdf';

class Resume extends Component {
    render() {
        return (
            <div>
                <ResumeDiv>
                    <p>View my experience here or <ResumeLink href={resume} target="_blank" rel="noopener noreferrer">download my resume </ResumeLink></p>
                </ResumeDiv>
                <Container>
                    <Section>
                        <SectionTitle>Education</SectionTitle>
                        <Title>Bentley University</Title>
                        <Subtitle>MS Human Factors & Information Design</Subtitle>
                        <p>Expected Graduation May 2021</p>
                    </Section>
                    <Section>
                        <Title>Emmanuel College</Title>
                        <Subtitle>BFA Graphic Design & Marketing</Subtitle>
                        <p>May 2019 Magna Cum Laude</p>
                    </Section>

                    <SectionTitle>Skills</SectionTitle>
                    <SkillsSection>
                        <Title>UI/UX</Title>
                        <SkillList>
                            <SkillName>Sketch</SkillName>
                            <SkillName>Invision</SkillName>
                            <SkillName>UXPin</SkillName>
                            <SkillName>Balsamiq</SkillName>
                        </SkillList>
                    </SkillsSection>
                    <SkillsSection>
                        <Title>Front-end</Title>
                        <SkillList>
                            <SkillName>HTML & CSS</SkillName>
                            <SkillName>ReactJS</SkillName>
                            <SkillName>Javascript</SkillName>
                            <SkillName>Git</SkillName>
                        </SkillList>
                    </SkillsSection>
                    <Section>
                        <SkillsSection>
                            <Title>Adobe</Title>
                            <SkillList>
                                <SkillName>Illustrator</SkillName>
                                <SkillName>InDesign</SkillName>
                                <SkillName>Photoshope</SkillName>
                                <SkillName>AfterEffects</SkillName>
                            </SkillList>
                        </SkillsSection>
                        <SkillsSection>
                        <Title>Project mgmt</Title>
                        <SkillList>
                            <SkillName>Agile</SkillName>
                            <SkillName>ZenHub</SkillName>
                            <SkillName>Trello</SkillName>
                            <SkillName>Jira</SkillName>
                        </SkillList>
                    </SkillsSection>
                    </Section>

                    
    
                </Container>
                <Container>
                    <Section>
                        <SectionTitle>Experience</SectionTitle>
                        <JobTitle>
                            <Title>Minerva Analytics</Title>
                            <Subtitle>UI/UX Designer</Subtitle>
                        </JobTitle>
                        <p>July 2019 - August 2020</p>
                        <WorkDescription>
                            <p>Work cross-functionally in an Agile environment to create digital media products based on user insights and email data. Daily tasks range from user testing and research, design of low and high fidelity web mockups, and front-end development through React.js.</p>
                        </WorkDescription>

                        <JobTitle>
                            <Title>Liberty Mutual Insurance</Title>
                            <Subtitle>Design Intern</Subtitle>
                        </JobTitle>
                        <p>September 2018 - July 2019</p>
                        <WorkDescription>
                            <p>Services assets, while also leading product and content innovation workshops within my team, to re-align the overall Risk Control marketing and reference material portfolio. Along with these tasks, I am often given additional projects according to my previous experience and skills, including re-design, CSS, and Javascript coding of the Risk Control Customer Safety Training website.</p>
                        </WorkDescription>

                        <JobTitle>
                            <Title>Converse</Title>
                            <Subtitle>Digital Intern</Subtitle>
                        </JobTitle>
                        <p>Summer 2018</p>
                        <WorkDescription>
                            <p>Managed end-to-end user experience strategies for new product launches, projects, and additional seasonal strategy, from initial brief to cross-functional teams, through design process and asset creation. Along with these day-to-day assignments, I also attended introduction to Sketch and Invision class at General Assembly, and applied learnings to summer projects and innovation within Converse’s internal digital strategy briefing.</p>
                        </WorkDescription>      

                        <JobTitle>
                            <Title>Allen Creative Group</Title>
                            <Subtitle>Graphic Design Intern</Subtitle>
                        </JobTitle>
                        <p>2017 - 2018</p>
                        <WorkDescription>
                            <p>Maintain the brand identity and guidelines of multiple organizations and businesses through numerous marketing materials such as fliers, Facebook advertisements, postcards, while providing creative input to a community of designers.</p>
                        </WorkDescription>                 
                    </Section>
                </Container>
            </div>
        );
    }
}

export default Resume;