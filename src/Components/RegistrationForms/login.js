import {useForm} from "react-hook-form";
import {useState} from "react";
import {
    CloseEyeIcon,
    OpenEyeIcon,
    StyledButton,
    StyledForm,
    StyledInput,
    StyledLabel,
    StyledLink,
    Styledp,
    StyledHeader, StyledOuterContainer, StyledErrorMessage,
} from "@Components/RegistrationForms/RegistrationForms.styled";

const Login = ({ goToSignUp, goToForgetPasswordForm}) => {
    const{register, handleSubmit, formState: {errors}} = useForm();
    const [showPass, setShowPass]=useState(false);
    const togglePasswordVisibility = () =>{
        setShowPass(!showPass);
      }
    const onSubmit = data =>{
        console.log(data);
    }
    return(
    <StyledOuterContainer topMargin = '200px'>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <div>
            <StyledHeader size = '2rem'>Welcome Back</StyledHeader>
            <StyledInput placeholder = "Email" type = "email"  {...register("email",{required: true})}/>
                {errors.email && <StyledErrorMessage >Email is required!</StyledErrorMessage>}
            <StyledInput placeholder = "Password" type = {(showPass) ? 'text' : 'password'}  {...register("password",{required: true, minLength: 8 })}/>
                {showPass? <OpenEyeIcon onClick={togglePasswordVisibility}/>:<CloseEyeIcon onClick={togglePasswordVisibility}/>}
                {errors.password && <StyledErrorMessage >Enter correct password!</StyledErrorMessage>}
            <StyledLink onClick={goToForgetPasswordForm}>Forget Password?</StyledLink>
            <StyledButton>Login</StyledButton>
                <Styledp>Don't have an account? <StyledLabel onClick={goToSignUp}>Sign Up</StyledLabel></Styledp>
            </div>
        </StyledForm>
    </StyledOuterContainer>
    );

}

export default Login;