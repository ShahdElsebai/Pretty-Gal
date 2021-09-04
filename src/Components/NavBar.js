import styled from 'styled-components'
import {IoPersonCircleSharp} from 'react-icons/io5';
const NavBar = () => (
    <StyledUl>
        <StyledElements>Home</StyledElements>
        <StyledElements>Shop</StyledElements>
        <StyledElements>Sale</StyledElements>
        <StyledElements>Customer Care</StyledElements>
        <StyledElements>Stockists</StyledElements>
        <PersonIcon/>
        <StyledElements>Login</StyledElements>
    </StyledUl>
)
export const StyledUl = styled.ul`
  margin-top: 15px;
`
export const StyledElements = styled.li`
        list-style-type: none;
        display: inline;
        font-family: Raleway, serif;
        font-weight: 300;
        color: white;
        font-size: 20px;
        margin-right: 50px;
        &:hover {
                color: #d0cccc;
        }

`;
const PersonIcon = styled(IoPersonCircleSharp)`
  position: relative;
  top: 5px;
  margin-right: 2px;
  font-size: 26px;
        
`
export default NavBar;