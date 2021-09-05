import styled from "styled-components";
const EndHome = () => (

   <StyledContainer>
        <div>
         <StyledHeader1>YEAR ROUND</StyledHeader1>
         <StyledLine/>
         <StyledHeader2>Must Have Items</StyledHeader2>
        </div>
   </StyledContainer>


)

export const StyledContainer = styled.div`
  display: flex;
  justify-content:center;
  align-items: center;
  max-width: 100vw;
  //position: absolute;
  //overflow: hidden;
`

export const StyledHeader1 = styled.h1`
   font-family: Helvetica-Neue-Font, serif;
   font-weight: 700;
   font-size: 2.5rem;
   letter-spacing: 10px;
   margin-top: 70px;
   


`
export const StyledHeader2 = styled.h1`

   font-family: Raleway, serif;
   font-weight: 300;
   font-size: 1.2rem;
   margin-top: 50px;
   margin-left: 50px;
   letter-spacing: 8px;
   

`
export const StyledLine = styled.hr`
  border-top: 1px solid black;
   margin-top: 50px;
   width: 40px;
  
`
export const StyledProductCard = styled.div`
`
export default EndHome;
