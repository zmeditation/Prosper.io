import ActionButton from "../../../components/basicComponent/ActionButton"
import { AffiliateCompensationContainer, StyledAffiliateCompensation, TitleWrapper, CompensationDesc, MovieWrapper, CompensationActionWrapper, AccordionRoot } from "./AffiliateCompensationStyle"
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const AffiliateCompensation = () => {
  const handleDownload = () => {
    window.open('https://prosper247.io/download/Compensation-Plan.pdf')
  }
  return(
    <StyledAffiliateCompensation>
      <AffiliateCompensationContainer>
        <TitleWrapper>
          <p>Learn about our</p>Compensation Plan
        </TitleWrapper>
        <CompensationDesc>
          As a member of the community you can up to 95% reward from the people you invite.
          <br/>
          The rewards distributions are handled automatically by a smart contract and distributed instantly.
        </CompensationDesc>
        <MovieWrapper>
          <img src="/images/sddefault.jpg" alt="comp plan" data-xblocker="passed" />
        </MovieWrapper>
        <CompensationActionWrapper>
          <ActionButton color="green" onClick={()=>handleDownload()}>Download the compensation plan</ActionButton>
        </CompensationActionWrapper>
        <AccordionRoot>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Learn more about the free affiliate option</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <p className="option-desc1">
              Our goal is to give access to anyone who wishes to participate regardless of their financial situation. Therefore we have created a free affiliate program where people can become affiliates by simply paying the transaction fees (Gas fee) of starting their contract. No purchase is necessary.
            </p>
            <p className="option-desc2">
              You will earn a 5% direct sale reward on your personally referred members.
            </p>
            <div className="action-wrapper">
              <a className="link" href="/join/free-affiliate"><span>Create a Free Affiliate Account</span></a>
            </div>
          </AccordionDetails>
        </AccordionRoot>
      </AffiliateCompensationContainer>
    </StyledAffiliateCompensation>
  )
}