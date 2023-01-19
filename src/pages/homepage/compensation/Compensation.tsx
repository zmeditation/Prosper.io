import { useNavigate } from "react-router-dom"
import ActionButton from "../../../components/basicComponent/ActionButton"
import { CompensationContent, CompensationDesc, HeaderContainer, StyledCompensation } from "./CompensationStyle"

export const Compensation = () => {
  const navigate = useNavigate()
  return(
    <StyledCompensation>
      <CompensationContent>
        <HeaderContainer>
          <p>LEARN ABOUT OUR</p>
          Compensation Plan
        </HeaderContainer>
        <CompensationDesc>
          As a member of the community you can up to 95% reward from the people you invite.
          <br/>
          The rewards distributions are handled automatically by a smart contract and distributed instantly.
        </CompensationDesc>
        <div className="compensation-view-button-content">
          <ActionButton color="green" className={"compensation-view-button"} onClick={()=>navigate('/affiliate-opportunity')}>View the compensation plan</ActionButton>
        </div>
      </CompensationContent>
    </StyledCompensation>
  )
}