import styled from 'styled-components';

const CenterDiv = styled.div`
    padding: 5rem 0 10rem 0;

    @media (max-width: 570px){
        display: block;
        padding-bottom: 0;
    }
`;


const HeaderContainer = styled.div`
    display: inline-flex;
    padding-bottom: 1rem;
`;

const HeaderDiv = styled.div`
    margin: 0 auto;
    padding-top: 4rem;
    display: inline-flex;
    justify-content: center;
    @media (max-width: 762px){
        display: inline-block;
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


const Image = styled.img`
    width: 290px;
    display: block;

    @media (max-width: 768px){
        width: 324px;
        margin: 0 auto;
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

const TextDiv = styled.div`
    padding: 4rem 0 0 2.75rem;
    width: 30%;
    align-self: flex-end;
    bottom: 0;
    @media (max-width: 768px){
        width: 75%;
        margin: 0 auto;
        padding: 2.5rem 0 0 0;
    }

`;

export {
    CenterDiv,
    Image,
    HeaderContainer,
    HeaderDiv,
    HeaderLine,
    SuzieHeader,
    TextDiv
}