import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const MoreListItemContainer = styled(Box)`
  position: relative;
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  gap: 15px;
  -webkit-box-align: center;
  align-items: center;
  list-style: none;
  padding-left: 44px;
  padding-bottom: 1.5rem;
  flex-wrap: wrap;

  & .morelist-check-icon {
    position: absolute;
    top: 10px;
    left: 0px;
    transform: translateY(-50%);
    color: rgb(108, 215, 13);
    font-size: 2.8rem;
  }

  & .morelist-item-large-text{
    font: 400 17px Outfit, Arial, Helvetica, sans-serif;
    color: rgba(255, 255, 255, 0.83);
    text-transform: uppercase;
    white-space: nowrap;
  }

  @media only screen and (max-width: 960px){
    gap: 0px;
    & .morelist-item-large-text{
      width: 100%;
    }
  }
`