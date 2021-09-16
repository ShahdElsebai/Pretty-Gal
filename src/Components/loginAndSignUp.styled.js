import styled from "styled-components";
import {Link} from "react-router-dom";
import {FaEye, FaEyeSlash} from "react-icons/all";

export const StyledOuterContainer = styled.div`

  display: flex;
  justify-content: center;
  min-height: 50vh;
  margin-top: ${props => props.topMargin};
`
export const StyledForm = styled.form`
  border-radius: 10px;
  width: 21vw;
  //height: 50vh;
  //border: 2px solid #b2b7c2;
  //box-shadow: 3px 5px 5px rgba(136, 136, 136);
  display: flex;
  justify-content: center;

`

export const StyledInput = styled.input`
  width: 320px;
  height: 25px;
  //display: block;
  margin: 40px 0 20px 40px;
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
export const StyledLink = styled(Link)`
  font-family: Raleway, serif;
  font-weight: 400;
  font-size: 1.2rem;
  color: #f42828;
  &:hover {
    cursor: pointer;
    color: #7f0707;
  }
  text-decoration: none;
  margin: 40px;

`;
export const StyledButton = styled.button`
  cursor: pointer;
  width: 180px;
  height: 35px;
  display: block;
  background-color: #3a3535;
  color: white;
  //margin:20px;
  margin:20px 20px 20px 25%;
  border: none;
  font-family: Raleway, serif;
  font-weight: 300;
  font-size: 1rem;
  border-radius: 15px;
  &:hover {
    background: #666363;
  }
`
export const Styledp = styled.p`
  font-family: Raleway, serif;
  font-weight: 300;
  font-size: 0.9rem;
  margin:30px 0 0 60px;
  
`
export const OpenEyeIcon = styled(FaEye)`
    position: relative;
    left: -20px;
    cursor: pointer;
`
export const CloseEyeIcon = styled(FaEyeSlash)`
    position: relative;
    left: -20px;
    cursor: pointer;
`
export const StyledLabel = styled.label`
  display: inline;
  font-family: Raleway, serif;
  font-weight: 300;
  font-size: 15px;
  color: #01012f;

  &:hover {
    color: #0402f4;
    cursor: pointer;
  }

  text-decoration: underline;

`;

export const StyledHeader = styled.h1`
  font-family: Raleway, serif;
  font-weight: 700;
  font-size: ${props => props.size};
 color: #242121;
  display: block;
  margin: 10px 0 20px 0;
  text-align: center;
`;

export const StyledErrorMessage = styled.text`
  color: red;
  margin-left:42px;
  display: block;
`