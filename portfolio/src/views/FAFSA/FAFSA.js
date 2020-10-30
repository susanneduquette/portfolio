import React, { Component } from 'react';
import { Background, Video } from './FAFSA.styles';
import PageHeader from '../../components/PageHeader/PageHeader';
import ProjectDescription from '../../components/ProjectDescription/ProjectDescription';
import ProjectHeader from '../../components/ProjectHeader/ProjectHeader';
import ScrollButton from '../../components/ScrollButton/ScrollButton';
import mockup from '../../assets/fafsa-mockup-nobg.png';
import domain from '../../assets/fafsa/user-domain.png';
import persona from '../../assets/fafsa/user-persona.png';
import wireframe1 from '../../assets/fafsa/wireframe1.png';
import wireframe2 from '../../assets/fafsa/wireframe2.png';
import video from '../../assets/fafsa/final-design.mov';

class FAFSA extends Component {
    render() {
        return (
            <div>
                <PageHeader />
                
                <Background>
                    <ProjectHeader image={mockup} name="FAFSA" type="Site resdesign" description="The FAFSA requires users to fully and accurately fill out all steps of the application presented to them.  Users are required to read, comprehend, and finally enter the proper information in each section relative to the question asked of them.  Individual differences across user groups (i.e., parents versus students) will also play an influential role in the success of a student’s application; in particular, an applicant’s knowledge of their own finances and parent’s finances, as well as knowledge of finance and lending in general will present some with an advantage and some with a disadvantage.  These individual differences are due to age, geographic location, financial background, or even personal interest and comprehension.  Additionally, because of the infrequency that users fill out the FAFSA application, it is essential the FAFSA be designed for the novice user in order to ensure proper comprehension and action by the user themselves." tools="UXPin" date="Jan 2020 - Apri 2020"/>
                </Background>
                <ScrollButton />
                <ProjectDescription bold="User" light=" domain" body="Before diving into the project, I needed to understand the overall needs of an average user.  Through research, I utilized Maguire and Bevan's context of use factors to establish the user domain" image={domain}/>
                <ProjectDescription bold="User" light=" persona" body="This persona was based upon average age of undergraduate college students that do not complete the FAFSA for reasons including lack of knowledge the application exists, lack of knowledge of parent/guardian’s financial information, and frustration or confusion of the application process altogether." image={persona} />
                <ProjectDescription bold="Wireframe" light=" sketches" body="Kofoed (2017) notes the amount of financial aid that goes unclaimed in the United States each year and points towards the form’s length and complexity as a main reason for this.  Because of this, I underwent a series of sketching exercises to uncover the simplest and most transparent experience a student or preparer can undergo." image={wireframe1}/>
                <ProjectDescription bold="Low-fidelity" light=" wireframes" body="After consolidating sketches down to the most conducive layout, I transferred each sketch into low-fidelity wireframes to understand the relation to a digital desktop view." image={wireframe2} />
                <ProjectDescription bold="Final" light=" design" body="Once each wireframe was tested, I implemented the current FAFSA’s branding to create a positive, clean, and overall enjoyable experience for students or guardians completing the application" />
                <Video src={video} controls/>

                
            </div>
        );
    }
}

export default FAFSA;