import styled from "styled-components";
import {ProductsData} from "../productsData";
import Products from "@Components/products";
import {BiMinus, BiPlus} from "react-icons/all";
import {useState} from "react";
const Shop = () =>{
    const [iconOpenPriceRange, setIconOpenPriceRange] = useState(<StyledPlusIcon marginLeft = "59%"/>);
    const [openPrice,setOpenPrice] = useState(true);

    const [iconOpenColor, setIconOpenColor] = useState(<StyledPlusIcon marginLeft = "59%"/>);
    const [openColor,setOpenColor] = useState(true);

    const [iconOpenSize, setIconOpenSize] = useState(<StyledPlusIcon marginLeft = "63%"/>);
    const [openSize,setOpenSize] = useState(true);


    const showMore = (open,setOpen,name)=>{
      console.log(open)
      if(name === 'price') {
          if (open)
              setIconOpenPriceRange(<StyledMinusIcon marginLeft="59%"/>);
          else
              setIconOpenPriceRange(<StyledPlusIcon marginLeft="59%"/>);
      }
      else if(name === 'color')
      {
          if (open)
              setIconOpenColor(<StyledMinusIcon marginLeft="59%"/>);
          else
              setIconOpenColor(<StyledPlusIcon marginLeft="59%"/>);
      }
      else if(name === 'size')
      {
          if (open)
              setIconOpenSize(<StyledMinusIcon marginLeft="63%"/>);
          else
              setIconOpenSize(<StyledPlusIcon marginLeft="63%"/>);
      }
      setOpen(!open);


    }
    return(
       <StyledMainDiv>
           <StyledInnerDiv>
               <StyledHeader>SHOP</StyledHeader>
           </StyledInnerDiv>


           <StyledInnerDiv>
               <StyledFilter>
                   <h1>Filter by</h1>
                   <hr/>
                   <label onClick={()=>showMore(openPrice, setOpenPrice, 'price')}>Price{iconOpenPriceRange}</label>
                   <hr/>
                   <label onClick={()=>showMore(openColor, setOpenColor, 'color')}>Color{iconOpenColor}</label>
                   <hr/>
                   <label onClick={()=>showMore(openSize,setOpenSize, 'size')}>Size{iconOpenSize}</label>
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

const StyledPlusIcon = styled(BiPlus)`
  margin-left: ${props => props.marginLeft};
 
`
const StyledMinusIcon = styled(BiMinus)`
    
  margin-left: ${props => props.marginLeft};
 
`
export default Shop;