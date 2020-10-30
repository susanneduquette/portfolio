import styled from 'styled-components';

const Padding = styled.div`
    margin: 5rem 0;
`;

const CenterDiv = styled.div`
    padding: 5rem 0 10rem 0;
    @media (max-width: 570px){
        display: block;
        padding: 2rem 0;
    }
`;


const HeaderContainer = styled.div`
    display: inline-flex;
    padding-bottom: 1rem;
`;

const HeaderDiv = styled.div`
    margin: 0 auto;
    padding: 4rem 14rem;
    display: inline-flex;
    justify-content: center;
    @media (max-width: 762px){
        display: inline-block;
        padding: 4rem 0;
    }

    @media (max-width: 770px){
        padding: 4rem 0;
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

const Icon = styled.img`
    width: 75px;
    height: 75px
    display: block;
    padding: 0 4rem;

    @media (max-width: 768px){
        width: 50px;
        height: 50px
        margin: 0 auto;
        padding: 0 2rem;
        
    }
`;

const IconDiv = styled.div`
    margin: 0 auto;
    display: block;
    text-align: center;
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

const TextDiv = styled.div`
    padding: 4rem 0 0 2.75rem;
    width: 50%;
    align-self: flex-end;
    bottom: 0;

    @media (max-width: 1500px){
        width: 75%;
        padding: 2.5rem 0 0 0;
        margin: 0 auto;
    }
    @media (max-width: 768px){
        width: 75%;
        margin: 0 auto;
        padding: 2.5rem 0 0 0;
    }

`;

export {
    CenterDiv,
    Icon,
    IconDiv,
    HeaderContainer,
    HeaderDiv,
    HeaderLine,
    Padding,
    SuzieHeader,
    TextDiv
}