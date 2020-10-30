import styled from 'styled-components';

const HeaderContainer = styled.div`
    display: inline-flex;
    padding-bottom: 1rem;
`;

const HeaderDiv = styled.div`
    width: 50%;
    margin: 0 auto;
    padding: 17.5rem 0;

    @media (max-width: 570px){
        width: 80%;
        padding: 8rem 0 10rem 0;
    }
`;

const HeaderLine = styled.hr`
    height: 1px;
    color: #D8D8D8;
    background-color: #D8D8D8;
    border-width: 0;
    height: 2px;
    width: 90px;
    margin-top: 15px;
    @media (max-width: 570px){
        width: 60px;
        margin-top: 12px;
    }
`;

const SuzieHeader = styled.h2`
    margin: 0;
    padding-left: 2rem;
    color: #363535;
    font-size: 24px;
    font-weight: 200;
    @media (max-width: 570px){
        padding-left: 1rem;
        font-size: 20px;
    }
`;

const UXDesignerHeader = styled.h1`
    margin: 0; 
    padding-bottom:3rem;
    color: #F7D903;
    font-size: 90px;
    font-weight: 800;
    letter-spacing: -.25rem;

    @media (max-width: 570px){
        font-size: 72px;
        line-height: 75px;
        padding-top: 1rem;
    }

    @media (max-width: 320px){
        padding-left: 1rem;
        font-size: 55px;
        line-height: 55px;
    }
`;

export {
    HeaderContainer,
    HeaderDiv,
    HeaderLine,
    SuzieHeader,
    UXDesignerHeader,
};