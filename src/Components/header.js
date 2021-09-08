import styled from 'styled-components'
import NavBar from "@Components/NavBar";

const Header = () => (
    <StyledHeader>
        <StyledStoreName>PRETTY GAL</StyledStoreName>
        <NavBar/>
    </StyledHeader>
)

const StyledHeader = styled.div`
  background: #3a3535;
  height: 80px;
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100vw;
  max-width: 100vw;
  position: fixed;
  z-index: 100;
`;

const StyledStoreName = styled.p`
  font-family: Raleway, serif;
  font-weight: 700;
  color: #b3b2b2;
  font-size: 20px;
  letter-spacing: 10px;
  margin-left: 475px;
  margin-right: 175px;
  
  &:hover {
    cursor: pointer;
  }
`;
export default Header;
