import {useState} from "react";
import {BiMinus, BiPlus} from "react-icons/all";
import styled from "styled-components";

const Filter = () =>{
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
    )
}
const StyledPlusIcon = styled(BiPlus)`
  margin-left: ${props => props.marginLeft};
 
`
const StyledMinusIcon = styled(BiMinus)`
    
  margin-left: ${props => props.marginLeft};
 
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
export default Filter;