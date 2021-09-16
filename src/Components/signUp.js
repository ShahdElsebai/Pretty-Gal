import {useForm} from "react-hook-form";
import {useState} from "react";
import styled from "styled-components";

import {
    CloseEyeIcon,
    OpenEyeIcon,
    StyledButton,
    StyledForm,
    StyledInput,
    StyledHeader,
    StyledOuterContainer, StyledLabel, Styledp,
} from "@Components/loginAndSignUp.styled";

import {AiFillFacebook, FcGoogle} from "react-icons/all";

const SignUp = ()=>{
    const{register, handleSubmit, formState: {errors}} = useForm();
    const [showPass, setShowPass]=useState(false);
    const [showConfirmPass, setShowConfirmPass]=useState(false);

    const togglePasswordVisibility = () => {
        setShowPass(!showPass);
    }
    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPass(!showConfirmPass);
    }
    const onSubmit = data =>{
        console.log(data);
    }
    return(
        <StyledOuterContainer topMargin = '50px'>
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <StyledHeader size = '1.2rem'>Let's get you signed up</StyledHeader>
                    <StyledRegisterButton backgroundColor =  '#01007F'><StyledFacebookIcon/>Sign Up With Facebook</StyledRegisterButton>
                    <StyledRegisterButton backgroundColor = 'black'><StyledGoogleIcon/>Sign Up With Google</StyledRegisterButton>
                    <StyledLine ><span>or</span></StyledLine>

                    <StyledInput placeholder = "Email" type = "email"  {...register("email",{required: true})}/>
                    {errors.email && <text >Email is required!</text>}
                    <StyledInput placeholder = "Phone Number" type = "number"  {...register("phoneNumber",{required: true})}/>
                    <StyledInput placeholder = "First Name" type = "text"  {...register("firstName",{required: true})}/>
                    <StyledInput placeholder = "Last Name" type = "text"  {...register("lastName",{required: true})}/>

                    <StyledInput placeholder = "Password" type = {(showPass) ? 'text' : 'password'}  {...register("password",{required: true, minLength: 8 })}/>
                    {showPass? <OpenEyeIcon onClick={togglePasswordVisibility}/>:<CloseEyeIcon onClick={togglePasswordVisibility}/>}
                    {errors.password && <text >Enter correct password!</text>}
                    <StyledInput placeholder = "Confirm Password" type = {(showConfirmPass) ? 'text' : 'password'}  {...register("confirmPassword",{required: true, minLength: 8 })}/>
                    {showConfirmPass? <OpenEyeIcon onClick={toggleConfirmPasswordVisibility}/>:<CloseEyeIcon onClick={toggleConfirmPasswordVisibility}/>}
                    {errors.password && <text >Enter correct password!</text>}

                    <StyledButton>Sign Up</StyledButton>
                    <Styledp>Already have an account? <StyledLabel >Login</StyledLabel></Styledp>
                      </div>
            </StyledForm>
        </StyledOuterContainer>
    )
}
const StyledRegisterButton = styled.button`
  width: 325px;
  height: 50px;
  margin: 10px 0 0 40px;
  background-color: ${props => props.backgroundColor};
  color: white;
  cursor: pointer;
`
const StyledFacebookIcon = styled(AiFillFacebook)`
  color: blue;
  font-size: 1rem;
  position: relative;
  top:2px;
  background-color: white;
  margin-right: 5px;
  
  
 
`
const StyledGoogleIcon = styled(FcGoogle)`
 
  font-size: 1rem;
  position: relative;
  top:2px;
  margin-right: 5px;
 
 
`
const StyledLine = styled.h2`
  width: 320px;
  text-align: center;
  border-bottom: 1px solid #000;
  line-height: 0.1em;
  margin: 15px 0 10px 40px;
  & span {
    background:#fff;
    padding:0 10px;
  }


`
export default SignUp;