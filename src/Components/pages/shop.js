import styled from "styled-components";
import {ProductsData} from "../productsData";
import Products from "@Components/products";
const Shop = () =>(
       <StyledMainDiv>
           <StyledInnerDiv>
               <StyledHeader>SHOP</StyledHeader>
           </StyledInnerDiv>


           <StyledInnerDiv>
                <StyledGallery>
                   {
                       ProductsData.map(
                           (product) => (
                           <Products product = {product}/>
                           )
                       )
                   }
                </StyledGallery>
           </StyledInnerDiv>
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
  justify-content: center;
  max-width: 100vw;
  margin-top: 130px;
  min-height: ${100-39.9}vh;
  display: block;
  
`
const StyledInnerDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 150px;
  
  
  
  
`
const StyledGallery = styled.div`
  width: 850px;
  display: flex;
  flex-wrap: wrap;
  //background-color: black;
  left: 8.2%;
  position: relative;
  
`
export default Shop;