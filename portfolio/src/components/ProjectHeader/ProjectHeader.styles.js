import styled from 'styled-components';

const Background = styled.div`
    vertical-align: middle;
    padding: 8rem 4rem;
    height: 100%;

    @media (max-width: 768px){
        padding: 0;
    }
`;

const ProjectImage = styled.img`
    margin-left: -16rem;
    padding-top: 1.5rem;
    top: 50%;

    @media (max-width: 1500px){
        margin: 0 auto;
        width: 575px;
        display: block;
        padding-bottom: 3rem;
    }

    @media (max-width: 570px){
        width: 450px;
        margin-left: -3.5rem;
    }
`;

const ProjectContainer = styled.div`
    padding: 0 2rem;
    display: flex;
    align-items: baseline;

    @media (max-width: 570px){
        padding: 0 1rem;
        display: block;
    }
`;

const ProjectName = styled.h2`
    font-size: 3rem;
    margin: 0;
    @media (max-width: 570){
        font-size: 2rem;
    }
`;

const ProjectType = styled.h3`
    font-size: 1.5rem;
    padding-left: 1rem;

    @media (max-width: 570px){
        margin: 1rem 0;
        padding: 0;
        font-size: 1.25rem;
    }
`;

const Subtitle = styled.h3`
    font-size: 1.5rem;
    margin: 0;
    padding-right: 5rem;

    @media (max-width: 700px){
        padding-right: 2rem;
    }

    @media (max-width: 570px){
        font-size: 1.25rem;
        padding-right: 1rem;
    }
`;


const SubtitleLine = styled.hr`
    height: 1px;
    color: #D8D8D8;
    background-color: #D8D8D8;
    border-width: 0;
    height: 2px;
    width: 60px;
    margin: 1rem 1rem 0 0;
    @media (max-width: 570px){
        width: 30px;
        margin-top: 12px;
    }
`;

const SubtitleSection = styled.div`
    float: left;
    padding: 0 2rem;
    margin-top: 1.5rem;
    display: block;

    @media (max-width: 900px){
        padding-right: 0;
        margin-right: 0;
    }

    @media (max-width: 700px){
        padding: 0 .75rem;
    }
`;

const SubtitleContainer = styled.div`
    display: inline-flex;
    padding-bottom: 1rem;
`;

const WhiteBox = styled.div`
    margin: 0 auto;
    display: block;
    padding: 2.5rem 1rem;
    float: right;
    width: 715px;
    height: 100%;
    background-color: #ffffff;
    border-radius: 2px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.06), 0 6px 20px 0 rgba(0, 0, 0, 0.006);

    @media (max-width: 1500px){
        width: 85%;
        float: none;
        padding-bottom: 8rem;
        margin-bottom: 5rem;
    }

    @media (max-width: 570px){
        padding-bottom: 8.5rem;
        margin-bottom: 5rem;
    }

    @media (max-width: 320px){
        padding-bottom: 13rem;
        margin-bottom: 3rem;
    }
    
`;


export {

    Background,
    ProjectContainer,
    ProjectImage,
    ProjectName,
    ProjectType,
    Subtitle,
    SubtitleContainer,
    SubtitleLine,
    SubtitleSection,
    WhiteBox
}