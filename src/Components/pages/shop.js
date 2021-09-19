import styled from "styled-components";

const Shop = () =>(
       <StyledMainDiv>
            <StyledHeader>SHOP</StyledHeader>

        </StyledMainDiv>

)
const StyledHeader = styled.h1`                                  
  font-family: Raleway, serif;                                          
  font-weight: 700;                                                     
  font-size: 1.3rem;                                                    
  letter-spacing: 5px;                                                  
  color: #242121;                                                       
  display: block;                                                       
  margin-top: 50px;                                                         
  text-align: center;                                                   
`
const StyledMainDiv = styled.div`
  display: flex;
  justify-content: center;
  max-width: 100vw;
  margin-top: 130px;
  //margin-bottom: 60px;
  min-height: ${100-39.9}vh;
`
export default Shop;