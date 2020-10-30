import styled from 'styled-components';

const Body = styled.div`
    vertical-align: middle;
    padding-top: 2.5rem;
`;

const DescriptionDiv = styled.div`
    vertical-align: middle;
    display: inline-block;
`;

const HoverDiv = styled.div`
    color: white;
    width: 7rem;
    padding: 1rem 0 .15rem 0;
    border-bottom: solid 4px #ffffff;

    @media (max-width: 770px){
        display: none;
    }
`;

const HoverText = styled.h4`
    font-size: 1.25rem;
    font-family: 'Source Sans Pro', 'Proxima 
    Nova', 'Roboto', 'Arial', sans-serif;
    font-weight: 500;
    margin: 0;
`;

const SeeWork = styled.p`
    font-size: 1.25rem;

    @media (max-width: 570px){
        padding-bottom: 2rem;
        font-size: 1.15rem;
    }
`;


const ProjectDescription = styled.h3`
    font-size: 1.5rem;
    margin: 0;
    padding-top: .25rem;
    padding-left: 1.5rem;

    @media (max-width: 768px){
        font-size: 1.25rem;
        padding-left: 0;
    }
`;

const ProjectTitle = styled.h2`
    font-size: 3.5rem;
    margin: 0;

    @media (max-width: 768px){
        font-size: 2.125rem;
    }
`;

const TitleDiv = styled.div`
    vertical-align: middle;
    display: inline-block;
`;

const WorkContainer = styled.div`
    display: block;
    margin: 0 0 5rem 6rem;

    @media (max-width: 768px){
        margin: 0 0 2rem 2rem;
        width: 350px;
}
`;

const WorkTextContainer = styled.div`
    display: flex;
    align-items: baseline;

    &:hover ~ ${HoverDiv}{
        display: block;
        transition: 0.1s;
        color: #363535;
        border-bottom: solid 4px #F7D903;
    }

    @media (max-width: 770px){
        display: block;
    }
`;

export {
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
}