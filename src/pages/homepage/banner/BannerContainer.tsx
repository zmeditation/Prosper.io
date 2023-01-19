import { HomeHeader } from "../../../components/homeheader/HomeHeader"
import { StyledBanner } from "./BannerStyle"
import { TitleContainer } from "./titleContainer/TitleContainer"
import { WhyChoose } from "./whyChoose/WhyChoose"

export const BannerContainer = () => {
  return(
    <StyledBanner>
      <HomeHeader/>
      <TitleContainer/>
      <WhyChoose/>
    </StyledBanner>
  )
}