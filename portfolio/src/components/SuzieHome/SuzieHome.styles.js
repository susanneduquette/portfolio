import styled from 'styled-components';

const Background = styled.div`
   background: linear-gradient(180deg, #ffffff 50%, #f6f6f6 50%);
`;

const Card = styled.img`
    width: 475px;
    height: 475px;
    display: inline-block;
    @media (max-width: 570px){
        width: 360px;
        height: 360px;
        display: inline;
    }
`;

const CardContainer = styled.div`
    padding: 3rem;
    @media (max-width: 1024px){
        width: 475px;
        margin: 0 auto;
    }
    @media (max-width: 786px){
        width: 360px;
        margin: 0 auto;
    }
`;

const CardGrid = styled.div`
    margin: 0 auto;
    padding-bottom: 3rem;
    align-items: center;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    @media (max-width: 1100px){
        display: block;
        text-align: center;
        flex-wrap: none;
    }
`;

const CardTitle = styled.h3`
    font-size: 32px;
    font-weight: 700;
    color: #363535;
    text-align: left;
    margin: 0;
    padding-top: 1rem;
`;

const CardSubitle = styled.h4`
    font-size: 18px;
    font-weight: 300;
    color: #363535;
    text-align: left;
    margin: 0;
    padding-top: .25rem;
`;

const HeaderContainer = styled.div`
    display: inline-flex;
    padding-bottom: 1rem;
`;

const HeaderDiv = styled.div`
    width: 50%;
    margin: 0 auto;
    padding: 9rem 0;

    @media (max-width: 570px){
        width: 65%;
        padding: 5rem 0;
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
`;

export {
    Background,
    Card,
    CardContainer,
    CardGrid,
    CardSubitle,
    CardTitle,
    HeaderContainer,
    HeaderDiv,
    HeaderLine,
    SuzieHeader,
    UXDesignerHeader,
};