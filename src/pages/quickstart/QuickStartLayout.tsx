import { Outlet } from "react-router-dom";
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/typicalheader/Header";
import { QuickStartContainer, StyledQuickStartLayout } from "./QuickStartLayoutStyle";

export default function QuickStartLayout() {
  return(
    <StyledQuickStartLayout>
      <Header/>
      <QuickStartContainer>
        <Outlet/>
      </QuickStartContainer>
      <Footer className="typical-footer"/>
    </StyledQuickStartLayout>
  )
}