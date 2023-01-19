import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const ProductsListItemContainer = styled(Box)`
  position: relative;
  border-radius: 20px;
  padding: 19px 50px 19px 100px;
  box-sizing: border-box;
  margin-bottom: 9px;
  &.light {
    background: rgba(56, 52, 90, 0.4);
  }

  &.dark {
    background: rgba(8, 6, 18, 0.3);
  }

  & .productslist-check-icon {
    transform: rotate(45deg);
    position: absolute;
    top: 50%;
    left: 38px;
    transform: translateY(-50%);
    color: rgb(225, 158, 121);
    font-size: 2.6rem;
  }

  & .productslist-arrow-icon {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    font-size: 2.4rem;
    color: rgb(138, 89, 154);
  }

  @media only screen and (max-width: 767px){
    padding: 19px 50px;

    & .productslist-check-icon {
      left: 18px;
    }
  }
`