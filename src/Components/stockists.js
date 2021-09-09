import styled from "styled-components";

const Stockists = () =>(
    <StyledContainer>
        <div>
            <StyledHeader>STOCKISTS </StyledHeader>
            <StyledParagraph>Find us in these fine stores</StyledParagraph>
            <StyledHeader2>The Blues</StyledHeader2>
            <StyledParagraph>500 Terry Francois Street<br/>San Francisco, CA 94158<br/>Phone: 123.456.7890</StyledParagraph>
            <StyledParagraph>Mon-Sat: 10:00am-7:00pm<br/>Sunday: Closed</StyledParagraph>
            <StyledLine/>
            <StyledHeader2>Eva</StyledHeader2>
            <StyledParagraph>500 Terry Francois Street<br/>San Francisco, CA 94158<br/>Phone: 123.456.7890</StyledParagraph>
            <StyledParagraph>Mon-Sat: 9:00am-6:00pm<br/>Sat-Sun: 10:00am-5:00pm</StyledParagraph>
        </div>
        </StyledContainer>
)
const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 100vw;
  margin-top: 130px;
  margin-bottom: 60px;
 
`
const StyledHeader = styled.h1`
  font-family: Raleway, serif;
  font-weight: 700;
  font-size: 1.3rem;
  letter-spacing: 5px;
  color: #242121;
  display: block;
  margin: 50px;
  text-align: center; 
`
const StyledHeader2 = styled.h1`
  font-family: Raleway, serif;
  font-weight: 600; 
  font-size: 1rem;
  margin-top: 50px;
  letter-spacing: 1px;
  text-align: center; 
`
const StyledParagraph = styled.p`
  font-family: Raleway, serif;
  font-weight: 300;
  font-size: 1rem;
  text-align: center; 
  display: block;
  padding-top: 5px;
  letter-spacing: 2px;
  margin-bottom: 30px;
  line-height: 25px;
  
`
const StyledLine = styled.hr`
  border-top: 1px solid black;
  margin-top: 50px;
  margin-bottom: 50px;
  width: 30px;
`



export default Stockists;