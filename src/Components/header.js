import styled from 'styled-components'
import NavBar from "@Components/NavBar";

const Header = () => (
    <StyledHeader>
        <StyledStoreName>PRETTY GAL</StyledStoreName>
        <NavBar/>
    </StyledHeader>

)

export const StyledHeader = styled.div`
  background: #514a4a;
  height: 80px;
  display: flex;
  justify-content: start;
  
`;

export const StyledStoreName = styled.p`
  font-family: Raleway, serif;
  font-weight: 700;
  color: #b3b2b2;
  font-size: 20px;
  margin-top: 24px;
  letter-spacing: 10px;
  margin-left: 475px;
  margin-right: 175px;
`;
export default Header