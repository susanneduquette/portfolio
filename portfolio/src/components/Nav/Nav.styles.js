import styled from 'styled-components';

const NavCircle = styled.div`
    background: #F7D903;
    width: 155px;
    height: 155px;
    border-radius: 50%;
    right: 0;

    @media(max-width: 770px){
        display: none;
    }

`;

const NavItem = styled.li`
    font-size: 1rem;
    list-style: none;
    text-decoration: none;
    color: #363535;
    font-family: 'Montserrat', 'Roboto', 'Arial', sans-serif;
    color: #363535;
    font-weight: 300;
    padding-bottom: 1.25rem;
    cursor: pointer;

    &:hover {
        font-weight: 700;
        font-size: 1.125rem;
        transition: 0.1s;
      }
`;

const NavItemCircle = styled.div`
    position: fixed;
    right: 0;
    margin: 19rem -7rem 0 0;
    display: inline-flex;
`;

const NavUl = styled.ul`
    text-align: right;
    border-bottom: none;
    padding-right: 1rem;
    margin-top: -.5rem;
`;


export{
    NavCircle,
    NavItem,
    NavItemCircle,
    NavUl
}