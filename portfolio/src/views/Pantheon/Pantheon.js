import React, { Component } from 'react';
import { Background } from './Pantheon.styles';
import PageHeader from '../../components/PageHeader/PageHeader';
import ProjectDescription from '../../components/ProjectDescription/ProjectDescription';
import ProjectHeader from '../../components/ProjectHeader/ProjectHeader';
import ScrollButton from '../../components/ScrollButton/ScrollButton';
import logo from '../../assets/pantheon-logo.png';
import user from '../../assets/pantheon/user-research.png';
import wireframe from '../../assets/pantheon/wireframe-template-design.png';
import wireframe1 from '../../assets/pantheon/wireframe1.png';
import ui from '../../assets/pantheon/uidev.png';

class Pantheon extends Component {
    render() {
        return (
            <div>
                <PageHeader />
                <Background>
                    <ProjectHeader image={logo} name="Pantheon" type="ReactJS Component Library"
                    description="During my time as UI/UX Designer at Minerva Analytics, I worked with a team of front-end engineers to develop a reusable ReactJS component library, to allow for fast and iterative development of new Minerva product websites.  As the sole designer on the team, I worked to research well-known component libraries, identify and understand Pantheon users’ needs, design a cohesive pattern library to allow for default styling of components, and assisted engineers in developing each product within Storybook." tools="Sketch, Storybook" date="Mar 2020 - Jun 2020" />
                </Background>
                
                <ScrollButton />
                
                <ProjectDescription bold="What's" light=" the problem?" body="Create a series of re-usable React.js components to for quick and efficient MVP develop of new Minerva media products. Pantheon aims to centralize and standardize common development patterns and user flows to aid in this process, and solve many common development pain-points." />

                <ProjectDescription bold="User" light=" research" body="To understand the common frustrations experienced, I conducted a series of interviews with Minerva employees to observe first-hand. With other members of the Pantheon team, I interviewed and prototype-tested 4 software engineers, 2 designers, and 1 senior executive to establish a series of standards and goals of Pantheon as a component library. With the insights learned here, I developed a series of user personas to align the team, as well as the company executives and stakeholders on the goals and potential benefits of Pantheon." image={user}/>

                <ProjectDescription bold="Wireframe" light=" template design" body="After understanding the common pain points of Minerva engineers and designers, I worked with the rest of the Pantheon team to find common components, user flows, and other UI elements used across numerous Minerva products to create the Minerva Way Wireframe Theme, a series of default styles applied to all components in a standardized theme used in all Minerva wireframes." image={wireframe}/>

                <ProjectDescription bold="Wireframe" light=" design" body="Based on components built in the Wireframe Theme, the Minerva Starter Site is a standard boiler-plate site template that allows for fast development of the MVP for a Minerva product. Minerva products are centered around email delivery and revenue, creating the main goal of email capture for all new products. With this in mind, the Starter Site offers a pre-built template t hat includes a fully-developed email confirmation flow. This creates more time and opportunity for branding and UI design, and also creates a faster go-to-market timeline for new products." image={wireframe1}/>

                <ProjectDescription bold="UI" light=" development" body="With component UI’s designed, I started to work with the engineers on Pantheon to code each component in React.js. For visualization and documenation of all components, utilies, etc., our team chose to use Storybook for all Minerva employees to access and utilize." image={ui}/>

                <ProjectDescription body="Pantheon is assumable to live on as an on-going project for Minerva.  As it is used throughout the creation of new product websites, continuous testing, research, and further development of common user flows across Minerva products will become uncovered and continue to be added to the Pantheon Library." />

            </div>
        );
    }
}

export default Pantheon;