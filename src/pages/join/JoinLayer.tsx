import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/typicalheader/Header";
import { JoinContainer, StyledJoin } from "./JoinLayerStyle";
import { Outlet } from 'react-router-dom';

export default function JoinLayer() {
  return (
    <StyledJoin>
      <Header/>
      <JoinContainer>
        <Outlet/>
      </JoinContainer>
      <Footer className="typical-footer"/>
    </StyledJoin>
  )
}