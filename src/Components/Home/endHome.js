import styled from "styled-components";
const EndHome = () => (
    <div>

       <StyledContainer>
            <div>
             <StyledHeader1>YEAR ROUND</StyledHeader1>
             <StyledLine/>
             <StyledHeader2>Must Have Items</StyledHeader2>
            </div>
       </StyledContainer>
       <StyledContainer>
            <StyledProductCard>
                <div>
                </div>
            </StyledProductCard>
            <StyledProductCard/>
            <StyledProductCard>
                <div>
                </div>
            </StyledProductCard>
       </StyledContainer>

    </div>


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
   margin-bottom: 70px;
   letter-spacing: 8px;
   
`
export const StyledLine = styled.hr`
  
   border-top: 1px solid black;
   margin-top: 50px;
   width: 40px;
  
`
export const StyledProductCard = styled.div`
  
  background-color: rgb(181, 178, 178);
  width: 350px;
  height: 470px;
  margin: 10px;
  margin-bottom: 40px;
  & div {
    background: #514a4a;
    width: 100%;
    height: 15%;
    top: 85%;
    position: relative;
  }
  
`
export default EndHome;
