import Poster from "@Components/Home/poster";
import EndHome from "@Components/Home/endHome";
import styled from "styled-components";
const Home = () => (
        <Styledd>
            <Poster/>
            <EndHome/>
        </Styledd>

)
export const Styledd = styled.div`
  max-width: 100vw;
  position: relative;
  overflow: hidden;
`

export default Home;
