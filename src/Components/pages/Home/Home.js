import Poster from "@Components/pages/Home/poster";
import EndHome from "@Components/pages/Home/endHome";
import styled from "styled-components";
const Home = () => (
        <Styledd>
            <Poster/>
            <EndHome/>
        </Styledd>

)
const Styledd = styled.div`
  max-width: 100vw;
  position: relative;
  overflow: hidden;
`

export default Home;
