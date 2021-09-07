import styled, {css} from "styled-components";
import skirtImg from "../../assets/imgs/skirt.jpg"
import glassesImg from "../../assets/imgs/glasses.jpg"
import bagImg from "../../assets/imgs/bag.jpg"
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
            <StyledProductCard backgroundImg = {skirtImg} flage ={true}>
                <div>
                    <p data-hover = "View Details">MIDI PLEATED SKIRT</p>
                </div>
            </StyledProductCard>
            <StyledProductCard backgroundImg = {bagImg} flage ={false}>
                <label>SALE</label>
            </StyledProductCard>
            <StyledProductCard backgroundImg = {glassesImg} flage ={true}>
                <div>
                    <p data-hover = "View Details">VINTAGE FRAME EYEGLASSES</p>
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
   margin-bottom: 50px;
   letter-spacing: 8px;
   
`
export const StyledLine = styled.hr`
  
   border-top: 1px solid black;
   margin-top: 50px;
   width: 40px;
  
`
export const StyledProductCard = styled.div`
  
  background-color: #c6c5c5;
  background-image: url(${props => props.backgroundImg});
  width: 300px;
  height: 400px;
  margin: 10px;
  margin-bottom: 40px;
  //transition: width 2s;
  

  &:hover {
    // 
    
    ${props => props.flage && css`
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    `} 
    & p{
      font-size: 0;
    }
    & p:after{
      content: attr(data-hover);
      font-family: Raleway, serif;
      font-weight: 400;
      font-size: 1rem;
    }
  }

  & div {
    background: #3a3535;
    width: 100%;
    height: 15%;
    top: 85%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & p {
    font-family: Raleway, serif;
    font-weight: 300;
    font-size: 1rem;
    color: white;
  }
 
  & label {
    position: relative;
    font-size: 3.5rem;
    font-family: Helvetica-Neue-Font, serif;
    font-weight: 400;
    letter-spacing: 8px;
    margin-left: 70px;
    top: 70px;
    color: #3d3a3a;

    &:hover {
      color: #878181;

    }

  }
  
`


export default EndHome;
