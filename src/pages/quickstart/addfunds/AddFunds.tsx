import ActionButton from "../../../components/basicComponent/ActionButton"
import { PurchaseOptionCard } from "../../../components/quickstart/purchaseoption/PurchaseOptionCard"
import StartStepper from "../../../components/quickstart/step/Stepper"
import { StepCard } from "../../../components/quickstart/stepcard/StepCard"
import { Title } from "../../../components/quickstart/title/Title"
import { StyledAddfunds, TitleDesc, AddFundDesc, ChooseOptionTitle, OptionsWrapper, ActionWrapper, BackLink } from "./AddFundsStyle"
import WestIcon from '@mui/icons-material/West';
import { useNavigate } from "react-router-dom"

export const Addfunds = () => {
  const options = [
    {
      img:"/images/logo-paybis.jpg",
      link: "https://cutt.ly/hAp0OVt"
    },
    {
      img:"/images/logo-simplex.jpg",
      link: "https://buy.chainbits.com/"
    },
    {
      img:"/images/logo-moonpay.jpg",
      link: "https://www.moonpay.com/buy/bnb"
    },
    {
      img:"/images/logo-changenow.jpg",
      link: "https://changenow.io/currencies/binance-coin-smart-chain?from=usd&to=bnbbsc&fiatMode=true"
    }
  ]
  const navigate = useNavigate()
  return (
    <StyledAddfunds>
      <i className="fa-thin fa-message-lines"></i>
      <Title/>
      <StartStepper step={1}/>
      <StepCard title="Step 2 - Add Funds">
        <TitleDesc>
          Purchase BNB Bep20 / BSC & Have it Automatically
          <br/>
          Sent to Your MetaMask Wallet
        </TitleDesc>
        <AddFundDesc>Pick one of the following exchanges to purchase BNB/BSC. During the payment process, you will be asked to provide your BNB/BSC wallet address that you created with Metamask. Please make sure you have that available as your BNB/BSC will be deposited there.</AddFundDesc>
        <AddFundDesc>In addition, whichever package you decide to purchase, please make sure you add on an $5-10 of BNB/BSC just in case for any exchange or blockchain fees that can occur during the process.</AddFundDesc>
        <ChooseOptionTitle>Choose Your Option:</ChooseOptionTitle>
        <OptionsWrapper>
          {
            options.map((option, index)=>(
              <PurchaseOptionCard img={option.img} link={option.link} key={index}/>
            ))
          }
        </OptionsWrapper>
        <ActionWrapper>
          <ActionButton color="green" onClick={()=>navigate("/join")}>Proceed to Last Step</ActionButton>
          <BackLink onClick={()=>navigate("/quick-start/create-wallet")}>
            <WestIcon className="addfunds-left-arrow-icon"/>
            Go back to previous step
          </BackLink>
        </ActionWrapper>
      </StepCard>
    </StyledAddfunds>
  )
}