import { useNavigate } from "react-router-dom"
import ActionButton from "../../../components/basicComponent/ActionButton"
import { StyledLearnProsper, LearnProsperContent, HeaderContainer, LearnTopDesc, SpaceDiv10, EarningContent, EarnignContentLeft, EarnignContentRight, EarningDesc, SpaceDiv8, SpaceDiv20, JoinTextDesc, SmartContractConcept, SmartContractConceptLeft, SmartContractConceptRight } from "./LearnProsperStyle"

export const Learnprosper = () => {
  const navigate = useNavigate()
  return(
    <StyledLearnProsper>
      <LearnProsperContent>
        <HeaderContainer>
          <p>IT'S YOUR TURN TO</p>
          Learn, Earn, and Prosper
        </HeaderContainer>
        <LearnTopDesc>
          P365 was designed for anyone who is looking to increase their knowledge of blockchain technology, while also providing a lucrative affiliate program to earn and prosper. Everything with P365 is instant and immediate! As soon as you become a paid customer you will have immediate access to your educational products where you can begin learning today.
        </LearnTopDesc>
        <SpaceDiv10/>
        <EarningContent>
          <EarnignContentLeft>
            <EarningDesc>
              With a smart contract, there is no middleman holding your hard-earned money, and deciding when they want to pay it out... You get paid instantly and directly to your BNB wallet with zero human interaction.
            </EarningDesc>
            <EarningDesc>
              No more worrying if you will get paid a commission or if the company will last. All of our technology is built on the Binance Smart Chain blockchain, and cannot be removed! So you can rest assured that you will continue to be able to Learn, Earn, and Prosper 365 days a year.
            </EarningDesc>
            <SpaceDiv8/>
            <JoinTextDesc>
              Are You Ready to Learn, Earn, and Prosper?
            </JoinTextDesc>
            <div className="join-button">
              <ActionButton color="green" onClick={()=>navigate('/join')}>
                Join Now!
              </ActionButton>
            </div>
          </EarnignContentLeft>
          <EarnignContentRight>
            <img src="/images/rocket.png" alt="" />
          </EarnignContentRight>
        </EarningContent>
        <SpaceDiv20/>
        <SmartContractConcept>
          <SmartContractConceptLeft>
            <img src="/images/shake-hands.jpg" alt="" />
          </SmartContractConceptLeft>
          <SmartContractConceptRight>
            <p className="smartcontract-title">
              What Is a Smart Contract?
            </p>
            <EarningDesc>
              A smart contract is a self-executing contract with the terms of the agreement between buyer and seller being directly written into lines of code.
            </EarningDesc>
            <EarningDesc>
              The code and the agreements contained therein exist across a distributed, decentralized blockchain network. The code controls the execution, and transactions are trackable and irreversible.
            </EarningDesc>
          </SmartContractConceptRight>
        </SmartContractConcept>
      </LearnProsperContent>
    </StyledLearnProsper>
  )
}