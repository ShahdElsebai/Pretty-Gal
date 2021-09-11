import styled from "styled-components";
import {StyledContainer, StyledHeader} from "@Components/stockistsAndCustomerCare.Styled";
import {Link} from "react-router-dom";
const Login = () => (
    <StyledContainer>
        <StyledForm>
            <div>
            <StyledHeader>Welcome Back</StyledHeader>
            <StyledInput placeholder = "Email" type = 'email'/>
            <StyledInput placeholder = "Password" type = 'password'/>
            <StyledLink>Forget Password?</StyledLink>
            <StyledButton>Login</StyledButton>
                <Styledp>Don't have an account? <Link>Sign Up</Link></Styledp>
            </div>
        </StyledForm>
    </StyledContainer>

)
const StyledForm = styled.form`
  border-radius: 10px;
  width: 20vw;
  height: 50vh;
  border: 2px solid #b2b7c2;
  box-shadow: 3px 5px 5px rgba(136, 136, 136);
  display: flex;
  justify-content: center;
 
`
const StyledInput = styled.input`
  width: 325px;
  height: 25px;
  display: block;
  margin-top: 60px;
  margin-bottom: 30px;
  padding-left:5px ;
  border-top: none;
  border-left: none;
  border-right: none;
  font-family: Helvetica,Arial,sans-serif;
  font-size: 1.2rem;
    &:focus{
      outline: none;
    }
`
const StyledLink = styled(Link)`
  font-family: Raleway, serif;
  font-weight: 400;
  font-size: 1.2rem;
  color: #f42828;

  &:hover {
    cursor: pointer;
    color: #7f0707;
  }
  text-decoration: none;


`;
const StyledButton = styled.button`
  cursor: pointer;
  width: 180px;
  height: 35px;
  display: block;
  background-color: #3a3535;
  color: white;
  //margin:20px;
  margin:20px 20px 20px 22%;
  border: none;
  font-family: Raleway, serif;
  font-weight: 300;
  font-size: 1rem;
  border-radius: 15px;
  &:hover {
    background: #666363;
  }
`
const Styledp = styled.p`
  font-family: Raleway, serif;
  font-weight: 300;
  font-size: 0.9rem;
  margin:30px 0 0 60px;
  
`
export default Login;