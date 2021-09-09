import styled from "styled-components";
import backgroundImg from "../../assets/imgs/bggg.jpg";

const Poster = () => (
    <div>
        <StyledPoster>
            <StyledCard>
                <StyledCardLabel>
                    FALL & WINTER
                </StyledCardLabel>
                <StyledButton>Shop now</StyledButton>
            </StyledCard>
        </StyledPoster>
        <StyledDiv>
            <StyledLabel>FREE SHIPPING WORLWIDE</StyledLabel>
        </StyledDiv>
    </div>
)
const StyledPoster = styled.div`
  display: flex;
  justify-content:center;
  align-items: center;
  width:100vw;
  height: 70vh;
  background-image: url(${backgroundImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size:cover;
  margin-top: 70px;
  z-index: -100;
  //background-size: 100% 100%;
`;

const StyledCard = styled.div`
  background-color: rgba(243, 225, 225, 0.62);
  width: 550px;
  height: 180px;
  //position: absolute;
  
  //display: inline-block;
  //display: flex;
  //justify-content:center;
  //align-items: center;
`
const StyledCardLabel =styled.h1`
  font-family: Helvetica-Neue-Font, serif;
  font-weight: 700;
  font-size: 3.5rem;
  color: #3a3838;
  margin-left: 52px;
  margin-top: 40px;
`
const StyledButton = styled.button`
  background-color: #3a3535;
  width: 210px;
  height: 40px;
  margin-left: 170px;
  margin-top: 20px;
  font-size: 1.3rem;
  font-family: Raleway, serif;
  font-weight: 400;
  border: none;
  color: white;
  &:hover{
    background-color: white;
    color: #514a4a;
    cursor: pointer;
  }

`
const StyledDiv = styled.div`
  background-color: #dadada;
  width: 100vw;
  height: 40px;
  display: flex;
  justify-content:center;
  align-items: center;
`
const StyledLabel = styled.label`
  letter-spacing: 3px;
  font-family: Raleway, serif;
  font-weight: 300;
`
export default Poster;
