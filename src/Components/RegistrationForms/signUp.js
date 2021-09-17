import {useForm} from "react-hook-form";
import {useState} from "react";
import styled from "styled-components";
import Login from "@Components/RegistrationForms/login";
import ForgetPasswordForm from "@Components/RegistrationForms/forgetPasswordForm";
import * as yup from 'yup';
import {yupResolver} from "@hookform/resolvers/yup";
import {
    CloseEyeIcon,
    OpenEyeIcon,
    StyledButton,
    StyledForm,
    StyledInput,
    StyledHeader,
    StyledOuterContainer, StyledLabel, Styledp, StyledErrorMessage,
} from "@Components/RegistrationForms/RegistrationForms.styled";
import {AiFillFacebook, FcGoogle} from "react-icons/all";



const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const schema = yup.object().shape({
    firstName: yup.string().required('First name is a required field'),
    lastName: yup.string().required('Last name is a required field'),
    phoneNumber: yup.string().matches(phoneRegExp, 'Phone number is not valid')
         .min(8)
        .required('A phone number is required'),
    email: yup.string().email('Please enter a valid email format !').required('Email is a required field'),
    password: yup.string().min(4).max(15).required('Password is a required field'),
    confirmPassword: yup.string().oneOf([yup.ref("password"),null]),

})
const SignUp = ({setPopUpChildren})=>{

    const [showPass, setShowPass]=useState(false);
    const [showConfirmPass, setShowConfirmPass]=useState(false);

  const togglePasswordVisibility = () => {
        setShowPass(!showPass);
    }
    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPass(!showConfirmPass);
    }
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const submitForm = (data)=>{
        console.log(data);
    };
    return(
        <StyledOuterContainer topMargin = '50px'>
            <StyledForm onSubmit={handleSubmit(submitForm)}>
                <div>
                    <StyledHeader size = '1.2rem'>Let's get you signed up</StyledHeader>
                    <StyledRegisterButton backgroundColor =  '#01007F'><StyledFacebookIcon/>Sign Up With Facebook</StyledRegisterButton>
                    <StyledRegisterButton backgroundColor = 'black'><StyledGoogleIcon/>Sign Up With Google</StyledRegisterButton>
                    <StyledLine ><span>or</span></StyledLine>

                    <StyledInput placeholder = "Email" type = "text"  {...register('email')} />
                    <StyledErrorMessage>{errors.email &&errors.email.message}</StyledErrorMessage>
                    <StyledInput placeholder = "Phone Number" type = "text"  {...register("phoneNumber")} />
                    <StyledErrorMessage>{errors.phoneNumber?.message}</StyledErrorMessage>
                    <StyledInput placeholder = "First Name" type = "text"  {...register("firstName")} />
                    <StyledErrorMessage>{errors.firstName?.message}</StyledErrorMessage>
                    <StyledInput placeholder = "Last Name" type = "text"  {...register( "lastName")} />
                    <StyledErrorMessage>{errors.lastName?.message}</StyledErrorMessage>
                    <StyledInput placeholder = "Password" type = {(showPass) ? 'text' : 'password'}  {...register("password")} />
                    {showPass? <OpenEyeIcon onClick={togglePasswordVisibility}/>:<CloseEyeIcon onClick={togglePasswordVisibility}/>}
                    <StyledErrorMessage>{errors.password?.message}</StyledErrorMessage>

                    <StyledInput placeholder = "Confirm Password" type = {(showConfirmPass) ? 'text' : 'password'}   {...register("confirmPassword")} />
                    {showConfirmPass? <OpenEyeIcon onClick={toggleConfirmPasswordVisibility}/>:<CloseEyeIcon onClick={toggleConfirmPasswordVisibility}/>}
                    <StyledErrorMessage>{errors.confirmPassword && "Passwords Should Match!"}</StyledErrorMessage>

                    <StyledButton type='submit'>Sign Up</StyledButton>
                    <Styledp>Already have an account? <StyledLabel  onClick={()=>setPopUpChildren(<Login  goToSignUp = {()=>setPopUpChildren(<SignUp setPopUpChildren ={setPopUpChildren}/>) }  goToForgetPasswordForm = {()=>setPopUpChildren(<ForgetPasswordForm/>) }/>)}>Login</StyledLabel></Styledp>
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