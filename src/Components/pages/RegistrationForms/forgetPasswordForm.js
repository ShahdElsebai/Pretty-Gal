import {useForm} from "react-hook-form";
import {

    StyledButton,
    StyledForm,
    StyledInput,
    StyledLabel,
    Styledp,
    StyledHeader, StyledOuterContainer, StyledErrorMessage,
} from "@Components/pages/RegistrationForms/RegistrationForms.styled";

const ForgetPasswordForm = () => {
    const{register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = data =>{
        console.log(data);
    }
    return(
        <StyledOuterContainer topMargin = '200px'>
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <StyledHeader size = '2rem'>Forget Password</StyledHeader>
                    <StyledInput placeholder = "Email" type = "email"  {...register("email",{required: true})}/>
                    {errors.email && <StyledErrorMessage >Email is required!</StyledErrorMessage>}
                    <StyledButton>Send</StyledButton>
                    <Styledp>Didn't receive an email? <StyledLabel >Resend email</StyledLabel></Styledp>
                </div>
            </StyledForm>
        </StyledOuterContainer>
    );

}

export default ForgetPasswordForm;