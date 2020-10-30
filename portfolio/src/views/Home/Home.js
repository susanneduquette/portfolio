import React, { Component } from 'react';
import About from '../../components/About/About';
import Contact from '../../components/Contact/Contact';
import Header from '../../components/Header/Header';
import Nav from '../../components/Nav/Nav';
import ScrollButton from '../../components/ScrollButton/ScrollButton';
import Section from '../../components/Section/Section';
import SuzieHome from '../../components/SuzieHome/SuzieHome';
import Resume from '../../components/Resume/Resume';
import Work from '../../components/Work/Work';
import { ScrollDiv } from './Home.styles';

class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Nav />
                <ScrollDiv>
                    <ScrollButton />
                </ScrollDiv>
                <Section
                    title="Home"
                    id="home"
                />
                <SuzieHome />

                <Section
                    title="Work"
                    id="work"
                />
                <Work />

                <Section
                    title="About"
                    id="about"
                />
                <About />

                <Section
                    title="Contact"
                    id="contact"
                />
                <Contact />

                <Section
                    title="Resume"
                    id="resume"
                />
                <Resume />

            </div>
        );
    }
}

export default Home;
