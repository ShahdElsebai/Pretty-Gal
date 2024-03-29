import styled from 'styled-components'
import {useForm} from "react-hook-form";
import {
    IoLogoInstagram,
    TiSocialFacebook,
    TiSocialPinterest,
    TiSocialTwitter
} from "react-icons/all";


const AboutUs = () => {
    const{register, handleSubmit, formState: {errors}} = useForm();
    console.log(errors);

    const onSubmit = data =>{
        console.log(data);
    }
    return(
        <StyledAboutUsContainer>
            <StyledInnerContainer>
                <StyledLabel>STAY CONNECTED</StyledLabel>
                <StyledLabel>BE OUR FRIEND</StyledLabel>
                <StyledLabel>NEED ASSISTANCE?</StyledLabel>
            </StyledInnerContainer>
            <StyledInnerContainer>
                <StyledIcon>
                    <FacebookIcon/>
                    <TwitterIcon/>
                    <PinterestIcon/>
                    <InstagramIcon/>
                </StyledIcon>
                <StyledForm onSubmit={handleSubmit(onSubmit)} >
                    <StyledInput type = "email"  placeholder = "Enter your email here"  {...register("email",{required: true})} />
                    {errors.email && <StyledLabel >Email is required!</StyledLabel>}
                    <StyledButton type="submit">Subscribe Now</StyledButton>
                </StyledForm>
                <div>
                    <StyledLabel>123-456-7890<br/></StyledLabel>
                    <StyledLabel>info@mysite.com</StyledLabel>
                </div>
            </StyledInnerContainer>
        </StyledAboutUsContainer>

    );
}
const StyledAboutUsContainer = styled.div`
  background: #3a3535;
  max-width: 100vw;
  height: 26vh;

`
const StyledForm = styled.form`

  margin-right: -50px;
  margin-left: -50px;
 
`
const StyledInnerContainer =styled.div`
  display: flex;
  justify-content:space-around;
  margin-left: 450px;
  width: 55%;
  padding-top: 20px;
  margin-top: 10px;
 
`
const StyledLabel = styled.div`
  font-family: Raleway, serif;
  font-weight: 400;
  //color: ${props => props.color};
  color: #d8d7d7;
  font-size: 14px;
  margin-top: 5px;
  
  
`
const StyledIcon = styled.div`
  color: white;
  font-size: 1.5rem;
  //margin-left: 25px;
  margin-right: -50px;
`
const StyledInput = styled.input`
  width: 270px;
  height: 27px;
  display: block;
  padding-left: 20px;
  background: #625c5c;
  color: white;
  border: none;

  &::placeholder {
    color: white;
  }

  &:hover {
    background: #7b7373;
  }
`
const StyledButton = styled.button`
  cursor: pointer;
  width: 294px;
  height: 30px;
  display: block;
  background-color: #c6c5c5;
  border: none;
  margin-top: 10px;
  font-family: Raleway, serif;
  font-weight: 300;
`
const FacebookIcon = styled(TiSocialFacebook)`
    margin-right: 10px;
    cursor: pointer;
`
const TwitterIcon = styled(TiSocialTwitter)`
    margin-right: 10px;
    cursor: pointer;
`
const PinterestIcon = styled(TiSocialPinterest)`
    margin-right: 10px;
    cursor: pointer;
`
const InstagramIcon = styled(IoLogoInstagram)`
    cursor: pointer;
`
export default AboutUs;