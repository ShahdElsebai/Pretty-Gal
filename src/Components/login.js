import styled from "styled-components";
import {StyledContainer, StyledHeader} from "@Components/stockistsAndCustomerCare.Styled";
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";

const Login = () => {
    const{register, handleSubmit, formState: {errors}} = useForm();
    // console.log(errors);

    const onSubmit = data =>{
        console.log(data);
    }
    return(
    <StyledContainer>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <div>
            <StyledHeader>Welcome Back</StyledHeader>
            <StyledInput placeholder = "Email" type = "email"  {...register("email",{required: true})}/>
                {errors.email && <text >Email is required!</text>}
            <StyledInput placeholder = "Password" type = 'password'  {...register("password",{required: true, minLength: 8 })}/>
                {errors.password && <text >Enter correct password!</text>}
            <StyledLink>Forget Password?</StyledLink>
            <StyledButton>Login</StyledButton>
                <Styledp>Don't have an account? <Link>Sign Up</Link></Styledp>
            </div>
        </StyledForm>
    </StyledContainer>
    );

}
const StyledForm = styled.form`
  border-radius: 10px;
  width: 20vw;
  height: 50vh;
  border: 2px solid #b2b7c2;
  box-shadow: 3px 5px 5px rgba(136, 136, 136);
  display: flex;
  justify-content: center;
  & text{
    color: red;
    margin: 10px;
    display: block;
  }
 
`
const StyledInput = styled.input`
  width: 325px;
  height: 25px;
  display: block;
  margin-top: 50px;
  margin-bottom: 10px;
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