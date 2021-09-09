import styled from "styled-components";
import {
    StyledContainer,
    StyledHeader,
    StyledHeader2,
    StyledLine,
    StyledParagraph
} from "@Components/stockistsAndCustomerCare.Styled";

const CustomerCare = () =>(
    <StyledContainer>
        <div>
            <StyledHeader>CUSTOMER CARE</StyledHeader>
            <StyledParagraph >I'm a paragraph. Click here to add your own text and edit me. It’s easy.<br/>
                Just click “Edit Text” or double click me to add your own content and<br/>
                make changes to the font. I’m a great place for you to tell a story and<br/>
                let your users know a little more about you.<br/>
            </StyledParagraph>
            <StyledLine width = '60rem'/>
            <StyledInnerContainer>
                <div>
                    <StyledParagraph>Have any questions or concerns?<br/>
                        We’re always ready to help!
                    </StyledParagraph>
                    <StyledHeader2>Call us at</StyledHeader2>
                    <StyledParagraph>123-456-7890<br/>or send us an email to:<br/>info@mysite.com</StyledParagraph>
                </div>
                <StyledForm>
                    <StyledInput placeholder = "Name" />
                    <StyledInput placeholder = "Email" />
                    <StyledInput placeholder = "Subject"/>
                    <StyledInput placeholder = "Message" paddingBottom = '100px' />
                    <StyledButton>Submit</StyledButton>
                </StyledForm>
            </StyledInnerContainer>
            <StyledLine width = '60rem'/>
            <StyledHeader>RETURNS</StyledHeader>
            <StyledParagraph>I'm a paragraph. Click here to add your own text and edit me. It’s easy.<br/>
                Just click “Edit Text” or double click me to add your own content and<br/>
                make changes to the font. I’m a great place for you to tell a story and<br/>
                let your users know a little more about you.<br/>
            </StyledParagraph>
            <StyledLine width = '60rem'/>
            <StyledHeader>FAQ</StyledHeader>
            <StyledInnerContainer>
                <div>

                </div>
                <div>

                </div>
            </StyledInnerContainer>
        </div>
    </StyledContainer>
)
const StyledInnerContainer = styled.div`
  display: flex;
  justify-content: space-around;
`
const StyledForm = styled.form`

`
const StyledInput = styled.input`
  width: 325px;
  height: 25px;
  display: block;
  font-family: Helvetica,Arial,sans-serif;
  
  margin: 5px;
  padding-left:15px;
  padding-bottom:${props => props.paddingBottom} ;
  outline: none;
  &::placeholder {
    color: gray;
  }
  

  &:hover {
    background: #dfdbdb;
    //outline: none;
  }
 &:focus{
   outline: none;
 }
  
`
const StyledButton = styled.button`
  cursor: pointer;
  width: 150px;
  height: 30px;
  display: block;
  background-color: #3a3535;
  color: white;
  margin: 6px;
  border: none;
  font-family: Raleway, serif;
  font-weight: 300;
  font-size: 1rem;

  &:hover {
    background: #666363;
  }
`
export default CustomerCare;