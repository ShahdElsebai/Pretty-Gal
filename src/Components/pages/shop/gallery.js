import styled from "styled-components";
import {ProductsData} from "@Components/productsData";
import Products from "@Components/products";

const Gallery = () =>{
    return(
        <StyledGallery>
            {
                ProductsData.map(
                    (product) => (
                        <Products product = {product}/>
                    )
                )
            }
        </StyledGallery>
    );
}
const StyledGallery = styled.div`
  width: 850px;
  display: flex;
  flex-wrap: wrap;
  //background-color: black;
  //left: 8.2%;
  position: relative;
  
`
export default Gallery;