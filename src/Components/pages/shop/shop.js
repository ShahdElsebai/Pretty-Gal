import styled from "styled-components";
import Filter from "@Components/pages/shop/filter";
import Gallery from "@Components/pages/shop/gallery";


const Shop = () =>{

    return(
       <StyledMainDiv>
           <StyledInnerDiv>
               <StyledHeader>SHOP</StyledHeader>
           </StyledInnerDiv>


           <StyledInnerDiv>
              <Filter/>
               <Gallery/>
           </StyledInnerDiv>
        </StyledMainDiv>

)
}
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
  justify-content: center;
  max-width: 100vw;
  margin-top: 130px;
  min-height: ${100-39.9}vh;
  display: block;
  
`
const StyledInnerDiv = styled.div`
  display: flex;
  justify-content: center;
  //align-items: center;
  margin-bottom: 150px;
  
  
  
  
`



export default Shop;