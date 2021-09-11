import styled from "styled-components";
import {StyledContainer, StyledHeader} from "@Components/stockistsAndCustomerCare.Styled";
const Login = () => (
    <StyledContainer>
        <StyledForm>
            <StyledHeader>Welcome back</StyledHeader>
        </StyledForm>
    </StyledContainer>

)
const StyledForm = styled.form`
  border-radius: 10px;
  width: 20vw;
  height: 50vh;
  border: 2px solid #b2b7c2;
  box-shadow: 3px 5px 5px rgba(136, 136, 136);
`
export default Login;