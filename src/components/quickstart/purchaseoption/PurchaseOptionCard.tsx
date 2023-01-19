import { StyledPurchaseOptionCard, CardLabelWrapper, LogoWrapper } from "./PurchaseOptionCardStyle"

interface PurchaseOptionCardProps {
  img: string,
  link: string
}

export const PurchaseOptionCard = (props:PurchaseOptionCardProps) => {
  return(
    <StyledPurchaseOptionCard>
      <CardLabelWrapper>
        <span>
          Purchase Through
        </span>
      </CardLabelWrapper>
      <LogoWrapper>
        <img src={props.img} alt=""></img>
      </LogoWrapper>
      <div>
        <a href={props.link} className="purchase-button" rel="noopener noreferrer" target="_blank">Purchase</a>
      </div>
    </StyledPurchaseOptionCard>
  )
}