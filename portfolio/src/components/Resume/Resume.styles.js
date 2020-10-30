import styled from 'styled-components';

const Container = styled.div`
    float: left;
    margin: 0 2rem 0 5rem;
    padding-bottom: 5rem;

    @media (max-width: 768px){
        margin: 0 0 0 2.5rem;
    }

    @media (max-width: 570px){
        margin: 0 0 0 1.5rem;
        padding-bottom: 1.5rem;
    }
`;

const JobTitle = styled.div`
    display: flex;
    align-items: baseline;
    margin: 0;
    @media (max-width: 770px){
        display: block;
    }
`;

const ResumeDiv = styled.div`
    padding-bottom: 3rem;
    margin-left: 5rem;

    @media (max-width: 768px){
        margin-left: 2.5rem;
    }

    @media (max-width: 570px){
        margin-left: 1.5rem;
        padding-bottom: 2rem;
    }
`;

const ResumeLink = styled.a`
    font-family: 'Source Sans Pro', 'Proxima Nova', 'Roboto', 'Arial', sans-serif;
    font-weight: 700;
    color: #363535;
    border-bottom: 2px solid #F7D903;
    text-decoration: none;
`;

const Section = styled.div`
    padding-bottom: 1.5rem;
`;

const SectionTitle = styled.h1`
    font-size: 2.25rem;
`;

const SkillList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0 0 2.5rem 0;
`;

const SkillName = styled.li`
    font-size: 1.25rem;
    padding: .5rem 0 0 0;
    @media (max-width: 570px){
        font-size: 1rem;
    }
`;

const SkillsSection = styled.div`
    float: left;
    margin-right: 4rem;
    @media (max-width: 570px){
        margin-right: 3rem;
    }
`;

const Subtitle = styled.h3`
    font-size: 1.25rem;
    margin: 0;
    padding: 1rem 0;
    @media (max-width: 570px){
        font-size: 1rem;
        padding: .5rem 0;
    }
`;

const Title = styled.h2`
    font-size: 1.5rem;
    margin: 0;
    padding-right: 1rem;
    @media (max-width: 570px){
        font-size: 1.15rem;
    }
`;

const WorkDescription = styled.div`
    width: 650px;
    padding: 1rem 0 2rem 0;

    @media (max-width: 768px){
        width: 85%;
    }
`;

export {
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
}