import {
    StyledContainer,
    StyledHeader,
    StyledHeader2,
    StyledLine,
    StyledParagraph
} from "@Components/pages/stockistsAndCustomerCare.Styled";

const Stockists = () =>(
    <StyledContainer>
        <div>
            <StyledHeader>STOCKISTS </StyledHeader>
            <StyledParagraph>Find us in these fine stores</StyledParagraph>
            <StyledHeader2>The Blues</StyledHeader2>
            <StyledParagraph>500 Terry Francois Street<br/>San Francisco, CA 94158<br/>Phone: 123.456.7890</StyledParagraph>
            <StyledParagraph>Mon-Sat: 10:00am-7:00pm<br/>Sunday: Closed</StyledParagraph>
            <StyledLine width = '30px'/>
            <StyledHeader2>Eva</StyledHeader2>
            <StyledParagraph>500 Terry Francois Street<br/>San Francisco, CA 94158<br/>Phone: 123.456.7890</StyledParagraph>
            <StyledParagraph>Mon-Sat: 9:00am-6:00pm<br/>Sat-Sun: 10:00am-5:00pm</StyledParagraph>
        </div>
        </StyledContainer>
)

export default Stockists;