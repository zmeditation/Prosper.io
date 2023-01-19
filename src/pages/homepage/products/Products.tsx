import { useNavigate } from "react-router-dom"
import ActionButton from "../../../components/basicComponent/ActionButton"
import { ProductsListItem } from "../../../components/productlist/ProductsListItem"
import { HeaderContainer, ProductsContent, StyledProducts, ProductsDesc, ProductsListItems, JoinTextDesc } from "./ProductsStyle"

export const Products = () => {
  const productslists = [
    {
      text: "Blockchain For Dummies (An Introduction to blockchain technology)",
      color: "light"
    },
    {
      text: "17 Questions About Smart Contracts and Their Importance",
      color: "dark"
    },
    {
      text: "Understanding The Layers Of Blockchain Technology",
      color: "light"
    },
    {
      text: "The Beginners Guide to NFT, Dex and Staking",
      color: "dark"
    },
    {
      text: "The Difference Between Bitcoin, Ethereum and Tokens",
      color: "light"
    },
    {
      text: "Top 13 Crypto Wallets Reviews (Pros and Cons)",
      color: "dark"
    },
    {
      text: "Making Millions with Crypto Air Drops",
      color: "light"
    },
    {
      text: "The Crypto Trend ( The Past, Present, and Future of Crypto)",
      color: "dark"
    },
    {
      text: "A Beginners Guide to the Metaverse",
      color: "light"
    },
    {
      text: "Top 5 Secret to Making Millions with NFT",
      color: "dark"
    },
  ]
  const navigate = useNavigate()
  return(
    <StyledProducts>
      <ProductsContent>
        <HeaderContainer>
          <i className="fa-solid fa-arrow-trend-up"></i>
          <p>
            PROSPER 365
          </p>
          Products
        </HeaderContainer>
        <ProductsDesc>
          The foundation of P365 is built on providing exceptional educational products to help you better understand Blockchain technology from several different perspectives. Here is a list of just a few of the educational product categories you will have access to depending on which package you purchase.
        </ProductsDesc>
        <ProductsListItems>
          {
            productslists.map((productslist, index) => (
              <ProductsListItem text={productslist.text} color={productslist.color} key={index}/>
            ))
          }
        </ProductsListItems>
        <JoinTextDesc>
          Are You Ready to Learn, Earn, and Prosper?
          <span>JOIN TODAY!</span>
        </JoinTextDesc>
        <div className="products-button-content">
          <ActionButton color="green" onClick={()=>navigate('/join/free-affiliate')}>
            Holiday Special Offer!
          </ActionButton>
        </div>
      </ProductsContent>
    </StyledProducts>
  )
}