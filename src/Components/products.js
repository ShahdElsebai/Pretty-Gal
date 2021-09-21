import styled, {css} from "styled-components";

const Products = ({product}) =>{
    return(
<div>
            <StyledProductCard backgroundImg = {product.img} flage ={product.zoom}>
                <div>
                    <p data-hover = "Quick View"/>
                </div>

            </StyledProductCard>
    <StyledEndCard>
        <text>{product.desc}</text>
        <p>${product.price.toFixed(2)}</p>
    </StyledEndCard>
</div>

    )
}
const StyledProductCard = styled.div`

  background-color: #e5e5e5;
  background-image: url(${props => props.backgroundImg});
  width: 250px;
  height: 230px;
  margin: 10px 10px 20px 10px;
  cursor: pointer;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;
  &:hover {

    ${props => props.flage && css`
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    `}
    & p {
      font-size: 0;
    }

    & p:after {
      content: attr(data-hover);
      font-family: Raleway, serif;
      font-weight: 400;
      font-size: 1rem;
      color: #363535;
    }


    & div {
      background-color: rgba(252, 252, 252, 0.58);
      width: 100%;
      height: 20%;
      top: 80%;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  
`
const StyledEndCard = styled.div`
  width: 100%;
  height: 25%;
  position: relative;
  margin-left: 10px;
  font-family: Raleway, serif;
  font-weight: 300;
  font-size: 0.9rem;

  & p {
    margin-top: 15px;
    font-family: Raleway, serif;
    font-weight: 300;
    font-size: 0.9rem;
    color: #727272;
  }
`
export default Products;