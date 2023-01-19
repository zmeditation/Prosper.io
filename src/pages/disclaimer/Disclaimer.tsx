import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/typicalheader/Header";
import { DisclaimerContainer, DisclaimerContent, DisclaimerTitleWrapper, StyledDisclaimer, DisclaimerTextBox, DisclaimerContextTitle, DisclaimerContextContent } from "./DisclaimerStyle";

export default function Disclaimer() {
  return (
    <StyledDisclaimer>
      <Header/>
      <DisclaimerContainer>
        <DisclaimerContent>
          <DisclaimerTitleWrapper>
            <p>PROSPER 365</p>Income Disclaimer
          </DisclaimerTitleWrapper>
          <DisclaimerTextBox>
            <DisclaimerContextTitle>
              Prosper 365 Earnings Disclaimer
            </DisclaimerContextTitle>
            <DisclaimerContextContent>
              We do not under any circumstances guarantee that you will in fact earn any commissions or residual income from your participation in any of our Services or programs. Our products and services are offered and intended for entertainment purposes with the optional benefit of earning commissions based on your efforts to promote, market and sell the products and services offered by the Company. We are not an investment and the products and services offered by the smart contract should not be construed as such.
            </DisclaimerContextContent>
            <DisclaimerContextContent>
              By using our products and services you acknowledge and assume the risk that you may lose some or all of any cryptocurrency you place in your account via the purchase of packages or other means of transferring cryptocurrency from your personal account to that of www.prosper365.io. You also acknowledge that any commission earned is based solely on market conditions, legal and political climates, your own individual skills and experiences and any other conditions whether specifically mentioned in this disclaimer or not.
            </DisclaimerContextContent>
            <DisclaimerContextContent>
              Additionally, because of the volatile nature of the cryptocurrency markets you acknowledge that www.prosper365.io  has no means of accurately predicting market conditions, and as a result we cannot and do not guarantee that past performance is any indication of future performance and you acknowledge that the risk is 100% assumed by you once you choose to participate in any program or service.
            </DisclaimerContextContent>
            <DisclaimerContextTitle>
              Further Disclaimers
            </DisclaimerContextTitle>
            <DisclaimerContextContent>
              While we make every effort to ensure that we accurately represent all the products and services offered on this website and their potential for income, it should be noted that earnings and income statements made by www.prosper365.io and its sales materials, are estimates only of what we think you can possibly earn. There is no guarantee that you will make these levels of income and you accept the risk that the earnings and income statements differ by individual.
            </DisclaimerContextContent>
            <DisclaimerContextContent>
              As with any business, your results may vary, and will be based on your individual capacity, business experience, expertise, and level of desire. There are no guarantees concerning the level of success you may experience. The testimonials and examples used are exceptional results, which do not apply to the average purchaser, and are not intended to represent or guarantee that anyone will achieve the same or similar results. Each individual’s success depends on his or her background, dedication, desire and motivation.
            </DisclaimerContextContent>
            <DisclaimerContextContent>
              There is no assurance that examples of past earnings can be duplicated in the future. We cannot guarantee your future results and/or success. There are some unknown risks in business and on the internet that we cannot foresee which could reduce results you experience. We are not responsible for your actions.
            </DisclaimerContextContent>
          </DisclaimerTextBox>
        </DisclaimerContent>
      </DisclaimerContainer>
      <Footer className="typical-footer"/>
    </StyledDisclaimer>
  )
}