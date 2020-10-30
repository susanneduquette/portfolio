import React, { Component } from 'react';
import { Background, FoodisleLink, LinkDiv, MobileVideo } from './Foodisle.styles';
import PageHeader from '../../components/PageHeader/PageHeader';
import ProjectHeader from '../../components/ProjectHeader/ProjectHeader';
import mockup from '../../assets/foodisle/fi-comp.png';
import ProjectDescription from '../../components/ProjectDescription/ProjectDescription';
import ScrollButton from '../../components/ScrollButton/ScrollButton';
import problem1 from '../../assets/foodisle/problem1.png';
import problem2 from '../../assets/foodisle/problem2.png';
import wireframe1 from '../../assets/foodisle/wireframe1.png';
import wireframe2 from '../../assets/foodisle/wireframe2.png';
import wireframe3 from '../../assets/foodisle/wireframe3.png';
import wireframe4 from '../../assets/foodisle/wireframe4.png';
import brand1 from '../../assets/foodisle/brand1.png';
import brand2 from '../../assets/foodisle/brand2.png';
import brand3 from '../../assets/foodisle/brand3.png';
import video2 from '../../assets/foodisle/mobile-video.mov';

class Foodisle extends Component {
    render() {
        return (
            <div>
                <PageHeader />
                
                <Background>
                    <ProjectHeader image={mockup} name="Foodisle" type="Homepage & navigation design" description="As a UI/UX Designer at Minerva Analytics, I worked with a team of software engineers to design and build a homepage and responsive navigation in order to to create a more informative, cohesive experience for users upon arrival.  Through research and branding ideation, I created a series of wireframes for the team’s engineers to translate into development in the company’s Agile framework.  After the initial skeleton was built, I worked with Foodisle’s senior designer to understand the brand, and apply this to the overall user experience of the homepage and navigation." tools="Sketch, Invision" date="Jan 2020 - Apr 2020"/>
                </Background>

                <ScrollButton />
                <ProjectDescription bold="What's" light=" the problem?" body="Before this project, users entered the Foodisle website from email or social media traffic, directly into a specific recipe page, or to the Recipe Search page, both of which are pictured below.  This often created a lack of brand identity and recognition from users, as they  were truly unaware what the sole purpose of Foodisle was as a website other than just a recipe aggeregator.  Adding a homepage that displays a short message explaining Foodisle’s mission helps to provide users with further insight into what the site can offer them." image={problem1}/>
                <ProjectDescription body="In order to create this homepage though, a responsive navigation was necessary.  Before the hamburger navigation design was implemented, three links could be found within the header that brought users to the recipe search page, the about page, and the shop page.  Any further links were unable to be added, as the design was only able to fit three links when mobile.  Implementing a collapsible hamburger navigation allows for numerous new links and page to be added to the site, without having to worry about responsiveness placement on mobile." image={problem2}/>

                <ProjectDescription bold="Homepage" light=" wireframe exploration" body="After some competitor research, I started to sketch and map out wireframes for the homepage design.  The goal was to keep this relatively simple to prevent users from becoming too overwhelmed or confused upon arrival, but to also allow for rapid development for iterative testing." image={wireframe1}/>
                <ProjectDescription image={wireframe2}/>
                <ProjectDescription image={wireframe3}/>

                <ProjectDescription bold="Brand" light=" application" body="After agreeing upon the overall skeleton of the homepage through wireframing, I began to apply Foodisle’s brand to my previous low-fidelity wireframes." image={brand1}/>
                <ProjectDescription image={brand2}/>

                <ProjectDescription bold="Navigation" light=" wireframes" body="While the development team built out the homepage, I started to design the overall navigation experience for Foodisle.  I knew that the design should be a hamburger navigation based on the number of pages and links that needed to be inlcuded within the nav.  The goal of this navigation was to also make it reusable across all Minerva products, so the design needed to remain clear to the Foodisle brand, yet simple enough for repitition across other products." image={wireframe4} />

                <ProjectDescription bold="Visual" light=" design & brand application" body="Because the skeleton of the collapsible navigation needed to be repeatable across all Minerva products, I utilized Foodisle’s branding to ensure the design matched the look, feel, and overall tone of Foodisle’s site." image={brand3} />

                <ProjectDescription bold="Final" light=" design" body="Check out the walkthrough of the mobile experience, or view the live site below."/>

                <MobileVideo src={video2} controls />

                <LinkDiv>
                    <FoodisleLink href="https://www.foodisle.com/" target="_blank" rel="noopener noreferrer">View the live site</FoodisleLink>
                </LinkDiv>
            </div>
        );
    }
}

export default Foodisle;