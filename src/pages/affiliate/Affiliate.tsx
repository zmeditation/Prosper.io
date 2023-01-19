import { Footer } from "../../components/footer/Footer";
import { AffiliateBanner } from "./affiliatebanner/AffiliateBanner";
import { AffiliateCompensation } from "./affiliatecompensation/AffiliateCompensation";
import { StyledAffiliate } from "./AffiliateStyle";

export default function Affiliate() {
  return(
    <StyledAffiliate>
      <AffiliateBanner/>
      <AffiliateCompensation />
      <Footer className="typical-footer"/>
    </StyledAffiliate>
  )
}