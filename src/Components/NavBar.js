import styled from 'styled-components'
import {IoPersonCircleSharp} from 'react-icons/io5';
import {Link} from "react-router-dom";
import {useState} from "react";
import PopUpPage from "@Components/pages/RegistrationForms/popUpPage";
import Login from "@Components/pages/RegistrationForms/login";
import SignUp from "@Components/pages/RegistrationForms/signUp";
import ForgetPasswordForm from "@Components/pages/RegistrationForms/forgetPasswordForm";

const NavBar = () => {
 const [isOpen, setIsOpen] = useState(false);
  const [popUpChildren, setPopUpChildren] = useState(<Login  goToSignUp = {()=>{
        console.log('HEre');
      setPopUpChildren(<SignUp setPopUpChildren={setPopUpChildren}/>) }} goToForgetPasswordForm = {()=>setPopUpChildren(<ForgetPasswordForm/>)} />);


    return(
            <StyledUl>
                <StyledLink to = "/">Home</StyledLink>
                <StyledLink to = "/shop">Shop</StyledLink>
                <StyledLink>Sale</StyledLink>
                <StyledLink to = "/customerCare">Customer Care</StyledLink>
                <StyledLink to = "/stockists">Stockists</StyledLink>
                <PersonIcon/>
                <StyledLabel onClick={()=>{
                    setIsOpen(true);

                }}>Login</StyledLabel>
                <PopUpPage open = {isOpen} onClose={()=>{
                    setIsOpen(false);
                    setPopUpChildren(<Login  goToSignUp = {()=>setPopUpChildren(<SignUp setPopUpChildren ={setPopUpChildren}/>) }  goToForgetPasswordForm = {()=>setPopUpChildren(<ForgetPasswordForm/>) }/>)
                }}>{popUpChildren}</PopUpPage>
            </StyledUl>
        )
}
const StyledUl = styled.ul`
  display: flex;
  align-items: center;
`
const StyledLink = styled(Link)`
        display: inline;
        font-family: Raleway, serif;
        font-weight: 300;
        color: white;
        font-size: 20px;
        margin-right: 50px;
        &:hover {
                color: #d0cccc;
                cursor: pointer;
        }
        text-decoration: none;

`;
const StyledLabel = styled.label`
        display: inline;
        font-family: Raleway, serif;
        font-weight: 300;
        color: white;
        font-size: 20px;
        margin-right: 50px;
        &:hover {
                color: #d0cccc;
                cursor: pointer;
        }
       

`;
const PersonIcon = styled(IoPersonCircleSharp)`
  position: relative;
  margin-right: 2px;
  font-size: 26px;
  color: white; 
        
`
export default NavBar;
