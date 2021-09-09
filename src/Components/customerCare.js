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
            <StyledParagraph>I'm a paragraph. Click here to add your own text and edit me. It’s easy.<br/>
                Just click “Edit Text” or double click me to add your own content and<br/>
                make changes to the font. I’m a great place for you to tell a story and<br/>
                let your users know a little more about you.<br/>
            </StyledParagraph>
            <StyledLine width = '60rem'/>
        </div>
    </StyledContainer>
)
export default CustomerCare;