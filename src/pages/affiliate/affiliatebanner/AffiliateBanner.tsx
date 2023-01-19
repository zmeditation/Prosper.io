import { useNavigate } from "react-router-dom"
import ActionButton from "../../../components/basicComponent/ActionButton"
import { HomeHeader } from "../../../components/homeheader/HomeHeader"
import { AffiliateBannerContent, StyledAffiliateBanner, AffiliateBannerWrapper, BannerTitleWrapper, BannerDesc, BannerActionWrapper } from "./AffiliateBannerStyle"

export const AffiliateBanner = () => {
  const navigate = useNavigate()
  return(
    <StyledAffiliateBanner>
      <HomeHeader/>
      <AffiliateBannerContent>
        <AffiliateBannerWrapper>
          <BannerTitleWrapper>
            <p>Prosper 365</p>The Affiliate Program
          </BannerTitleWrapper>
          <BannerDesc>
            P365 was designed for anyone who is looking to increase their knowledge of blockchain technology, while also providing a lucrative affiliate program to earn and prosper. Everything with P365 is instant and immediate! As soon as you become a paid customer you will have immediate access to your educational products where you can begin learning today.
          </BannerDesc>
          <BannerActionWrapper>
            <ActionButton color="purple" onClick={()=>navigate('/join')}>Join Our Community</ActionButton>
          </BannerActionWrapper>
        </AffiliateBannerWrapper>
      </AffiliateBannerContent>
    </StyledAffiliateBanner>
  )
}