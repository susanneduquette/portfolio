import React, { Component } from 'react';
import { Background, LinkDiv, StarliesLink } from './Starlies.styles';
import PageHeader from '../../components/PageHeader/PageHeader';
import ProjectDescription from '../../components/ProjectDescription/ProjectDescription';
import ProjectHeader from '../../components/ProjectHeader/ProjectHeader';
import ScrollButton from '../../components/ScrollButton/ScrollButton';
import mockup from '../../assets/starlies-mockup-no-bg.png';
import research from '../../assets/starlies/market-research.png';
import wireframe1 from '../../assets/starlies/wireframe1.png';
import wireframe2 from '../../assets/starlies/wireframe2.png';
import brand1 from '../../assets/starlies/brand1.png';
import brand2 from '../../assets/starlies/brand2.png';
import finaldesign1 from '../../assets/starlies/finaldesign1.png';


class Starlies extends Component {
    render() {
        return (
            <div>
                <PageHeader />
                <Background>
                    <ProjectHeader image={mockup} name="Starlies" type="Brand & site redesign" description="When I first began as UI/UX Designer at Minerva Analytics, I started to understand and observe each of the company’s media products to recognize areas of growth. I quickly realized that Starlies - an astronomy website and daily newsletter - was the company’s fastest growing, most profitable, and largest user base of all producst, yet there was no team actively working on it. The design was extremely outdated, there was no advertising to new users, and the team seemed to be simply “coasting” off of Starlies’ success as-is. I decided to push a site redesign and rebrand, showing the importance design has over a product’s overall success and how it can increase Starlies’ already profitable business model." tools="Sketch, Illustrator" date="Oct 2019 - Jan 2020"/>
                </Background>
                <ScrollButton />
                <ProjectDescription bold="What's" light=" the problem?" body="The current branding and design of Starlies’ site does not fit the needs of the astrological user market.  Starlies is the most profitable, and has the larget user base of Minerva Analytic’s nine media brands, yet the product’s aesthetic was extremely dated and overlooked by the Minerva team.  Upon starting as a UI/UX Designer at Minerva, I quickly noticed the need for a site overhaul, and led this product with the help of product analysts and one front-end engineer." />

                <ProjectDescription bold="Market" light=" research" body="In order to better understand the needs of the user group for a proper rebrand and redesign, I first conducted a series of research activities to better understand the astrology industry.  With the help of a team of product analysts, we were able to discover about five astrology websites that offer similar features, and serve a similar market to that of Starlies.  I used my time to observe competitor’s overall branding, site experience, language use, and ad placement to start brainstorming ideas for Starlies." image={research}/>

                <ProjectDescription bold="Wireframe" light=" exploration" body="tI began by recreating the current layout of Starlies’ site in low-fidelity wireframe format, then began to explore additional layout tweaks to highlight the user’s key actions: reading their horoscope." image={wireframe1}/>

                <ProjectDescription image={wireframe2}/>

                <ProjectDescription bold="Branding" light=" exploration" body="I was able to utilize my graphic design education and experience to create a new brand for Starlies.  I found inspiration from other competing astrology products, Atari video games, and other comic-type illustration such as the Nyan Cat meme.  I wanted the branding to be fun, whimsical, yet modern to feel as though they can trust they are receving accurate horoscopes, but are having fun while doing so." image={brand1}/>

                <ProjectDescription body="My absolute favorite part of the project  was creating each horoscope symbol.  Though I read my horoscope almost every day, I found that I did not know much about each sign beside mine own (for those interested, I’m a  Pisces!).  I did a lot of research to understand the meaning behind each, imagery associated, and comptetitor depictions of each of the twelve signs.  I’m really happy with how they turned out, and created a Redbubble page in which Starlies users  or horosocpe advocates can purchase their sign on phone cases, shirts, posters, etc." image={brand2}/>

                <ProjectDescription bold="Final" light=" design" body="See some of the most significant pages from my rebrand process, or check out the live site." image={finaldesign1}/>

                <LinkDiv>
                    <StarliesLink href="https://www.starlies.com/" target="_blank" rel="noopener noreferrer">View the live site</StarliesLink>
                </LinkDiv>
            </div>
        );
    }
}

export default Starlies;