// import Header from "./Components/header"
import Header from "@Components/header"

import styled from 'styled-components'

function App() {
  return (
    <div>
      <Header />
      <RalewayThinText>Raleway Thin Text</RalewayThinText>
      <RalewayExtraLightText>Raleway Extra Light Text</RalewayExtraLightText>
      <RalewayLightText>Raleway Light Text</RalewayLightText>
      <RalewayRegularText>Raleway Regular Text</RalewayRegularText>
      <RalewayMediumText>Raleway Medium Text</RalewayMediumText>
    </div>
  )
}

const RalewayThinText = styled.p`
  font-family: Raleway, serif;
  font-weight: 100;
`

const RalewayExtraLightText = styled.p`
  font-family: Raleway, serif;
  font-weight: 200;
`

const RalewayLightText = styled.p`
  font-family: Raleway, serif;
  font-weight: 300;
`

const RalewayRegularText = styled.p`
  font-family: Raleway, serif;
  font-weight: 400;
`

const RalewayMediumText = styled.p`
  font-family: Raleway, serif;
  font-weight: 500;
`

export default App
