import styled from "styled-components";
import {ProductsData} from "../productsData";
import Products from "@Components/products";
import {BiPlus} from "react-icons/all";
const Shop = () =>(
       <StyledMainDiv>
           <StyledInnerDiv>
               <StyledHeader>SHOP</StyledHeader>
           </StyledInnerDiv>


           <StyledInnerDiv>
               <StyledFilter>
                   <h1>Filter by</h1>
                   <hr/>
                   <label>Price<StyledPluseIcon marginLeft = "60%"/></label>
                   <hr/>
                   <label>Color<StyledPluseIcon marginLeft = "59%"/></label>
                   <hr/>
                   <label>Size<StyledPluseIcon marginLeft = "63%"/></label>
                   <hr/>
               </StyledFilter>
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
  //align-items: center;
  margin-bottom: 150px;
  
  
  
  
`
const StyledGallery = styled.div`
  width: 850px;
  display: flex;
  flex-wrap: wrap;
  //background-color: black;
  //left: 8.2%;
  position: relative;
  
`
const StyledFilter = styled.div`
  //background-color: beige;
  margin: -50px 20px 0 5%;

  & h1 {
    font-family: Raleway, serif;
    font-weight: 400;
    font-size: 1.8rem;
    color: #333232;
    margin:0 15px 15px 15px;
  }
  & hr {
    width:230px;
    
    margin: 30px 15px 30px 15px;
  }
  & label{
    font-family: Raleway, serif;
    font-weight: 400;
    font-size: 1.2rem;
    color: #333232;
    margin: 15px;
    cursor: pointer;
  }
`

const StyledPluseIcon = styled(BiPlus)`
    //position: relative;
  //left: 60%;
  margin-left: ${props => props.marginLeft};
 
`
export default Shop;