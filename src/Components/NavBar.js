import styled from 'styled-components'
import {IoPersonCircleSharp} from 'react-icons/io5';
import {Link} from "react-router-dom";

const NavBar = () => (
    <StyledUl>
        <StyledLink to = "/">Home</StyledLink>
        <StyledLink>Shop</StyledLink>
        <StyledLink>Sale</StyledLink>
        <StyledLink to = "/customerCare">Customer Care</StyledLink>
        <StyledLink to = "/stockists">Stockists</StyledLink>
        <PersonIcon/>
        <StyledLink to = "/login">Login</StyledLink>
    </StyledUl>
)
const StyledUl = styled.ul`
  display: flex;
  align-items: center;
`
const StyledLink = styled(Link)`
        display: inline;
        font-family: Raleway, serif;
        font-weight: 300;
        color: white;
        font-size: 20px;
        margin-right: 50px;
        &:hover {
                color: #d0cccc;
                cursor: pointer;
        }
        text-decoration: none;

`;
const PersonIcon = styled(IoPersonCircleSharp)`
  position: relative;
  margin-right: 2px;
  font-size: 26px;
  color: white; 
        
`
export default NavBar;
