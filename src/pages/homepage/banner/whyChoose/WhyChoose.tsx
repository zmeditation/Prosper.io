import { WhyProsperItem } from "../../../../components/whyProsperItem/WhyProsperItem"
import { HeaderContainer, StyledWhyChooseContainer, StyledWhyChooseInnerContainer, WhyProsperItems, MoreTitle, MoreContentItems } from "./WhyChooseStyle"
import { MoreListItem } from "../../../../components/moreListItem/MoreListItem";

export const WhyChoose = () => {
  const items = [
    {
      icon: <i className="fa-solid fa-globe fa-blue-color"></i>,
      title: "TRANSPARENCY",
      content: "Prosper 247 gives you full transparency to see all transactions on the smart contract by utilizing the Binance SmartChain."
    },
    {
      icon: <i className="fa-solid fa-people-roof fa-blue-color"></i>,
      title: "LEGITIMATE PRODUCTS",
      content: "Where most smart contracts are doing crowdfunding or some other version of a money game, P247 offers great products to help Learn while you Earn."
    },
    {
      icon: <i className="fa-solid fa-wheelchair fa-blue-color"></i>,
      title: "INSTANT ACCESS",
      content: "Access to products and commissions. You will never have to wait for anything to be shipped, or a commissiozn to be sent. It is automatically done through smart contract technology."
    },
    {
      icon: <i className="fa-brands fa-accusoft fa-green-color"></i>,
      title: "ANONYMITY",
      content: "Prosper 247 gives you full transparency to see all transactions on the smart contract by utilizing the Binance SmartChain."
    },
    {
      icon: <i className="fa-solid fa-microchip fa-green-color"></i>,
      title: "TECHNOLOGY",
      content: "We have partnered with the very best developers to give you a user experience that is second to none."
    },
    {
      icon: <i className="fa-solid fa-grip fa-green-color"></i>,
      title: "AFFORDABILITY",
      content: "P247 was designed to be affordable to the entire world. Our first package starts at only $50 in BNB, which makes it possible for almost anyone to get started."
    }
  ]
  const moreItems = [
    {
      title: "THRUSTWORTHY",
      content: "Verified Smart Contract through Solidity."
    },
    {
      title: "WORLD CLASS SUPPORT",
      content: "Our support strives to answer all support tickets within 24 hours during business times."
    },
    {
      title: "GLOBAL BUSINESS",
      content: "You can do business anywhere that allows you to download a BNB wallet."
    }
  ]
  return(
    <StyledWhyChooseContainer>
      <StyledWhyChooseInnerContainer>
        <HeaderContainer>
          <i className="fa-solid fa-arrow-trend-up"></i>
          <p>WHY</p>
          Choose Prosper 247?
        </HeaderContainer>
        <WhyProsperItems>
          {
            items.map((item, index)=>(
              <WhyProsperItem iconElement={item.icon} title={item.title} content={item.content} key={index}/>
            ))
          }
        </WhyProsperItems>
        <MoreTitle>
          And More:
        </MoreTitle>
        <MoreContentItems>
          {
            moreItems.map((item, index)=>(
              <MoreListItem title={item.title} content = {item.content} key={index}/>
            ))
          }
        </MoreContentItems>
      </StyledWhyChooseInnerContainer>
    </StyledWhyChooseContainer>
  )
}