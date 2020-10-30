import styled from 'styled-components';

const NavItem = styled.li`
    font-size: 1.5rem;
    list-style: none;
    text-decoration: none;
    text-align: center;
    color: #363535;
    font-family: 'Montserrat', 'Roboto', 'Arial', sans-serif;
    color: #363535;
    font-weight: 500;
    padding-bottom: 1.25rem;
    padding-top: .75rem;
    cursor: pointer;
    margin-left: -3rem;
`;

const NavUl = styled.ul`
    display: none;
    @media (max-width: 770ox){
        display: block;
        text-align: right;
        border-bottom: none;
    }
`;

export{
    NavItem,
    NavUl
}