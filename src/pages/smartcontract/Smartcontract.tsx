import { useNavigate } from "react-router-dom";
import ActionButton from "../../components/basicComponent/ActionButton";
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/typicalheader/Header";
import { SmartcontractActionWrapper, SmartcontractContainer, SmartcontractContent, SmartcontractContentBox, SmartcontractLinkBox, SmartcontractLinkItem, SmartcontractLinkWrapper, SmartcontractTitleWrapper, StyledSmartcontract } from "./SmartcontractStyle";

export default function Smartcontract() {
  const navigate = useNavigate()
  return (
    <StyledSmartcontract>
      <Header/>
      <SmartcontractContainer>
        <SmartcontractContent>
          <SmartcontractTitleWrapper>
            <p>PROSPER 247</p>Smart Contract
          </SmartcontractTitleWrapper>
          <SmartcontractContentBox>
            <SmartcontractLinkWrapper>
              <p className="smartcontract-subtitle">Prosper 247</p>
              <p className="smartcontract-description">The main system, handling the account creation, package purchases and commissions handling.</p>
              <SmartcontractLinkBox>
                <SmartcontractLinkItem>
                  <a href="https://www.bscscan.com/address/0x13efcdcc44d5ab2b0171b77de718ee8bfbbf64cb" className="contract-link-item" target={"_blank"} rel="noreferrer">
                    <img src="/images/ico-dsquare.png" alt="icon"></img>
                    <span>Proxy Smart Contract</span>
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </a>
                </SmartcontractLinkItem>
                <SmartcontractLinkItem>
                  <a href="https://www.bscscan.com/address/0x140629a3eeae9d27162b61c122caff8bc6b3acb1" className="contract-link-item" target={"_blank"} rel="noreferrer">
                    <img src="/images/ico-dsquare.png" alt="icon"></img>
                    <span>Core Smart Contract</span>
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </a>
                </SmartcontractLinkItem>
              </SmartcontractLinkBox>
            </SmartcontractLinkWrapper>
            <SmartcontractActionWrapper>
              <p className="smartcontract-subtitle">Interested in Joining Prosper247?</p>
              <p className="smartcontract-description">To gain access to the website, you will need a MetaMask Wallet. Click the button to learn more.</p>
              <div className="action-button-wrapper">
                <ActionButton color="green" onClick={()=>navigate('/quick-start/create-wallet')}>Quick Start!</ActionButton>
              </div>
            </SmartcontractActionWrapper>
          </SmartcontractContentBox>
        </SmartcontractContent>
      </SmartcontractContainer>
      <Footer className="typical-footer"/>
    </StyledSmartcontract>
  )
}