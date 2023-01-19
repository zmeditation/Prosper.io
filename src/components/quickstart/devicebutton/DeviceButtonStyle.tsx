import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const StyledDeviceButton = styled(Box)`
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  position: relative;
  background: rgba(233, 233, 240, 0.38);
  margin-bottom: 5px;
  border-radius: 8px;
  padding: 1rem 5rem;
  cursor: pointer;

  &:hover::before {
    content: "";
    position: absolute;
    left: -1px;
    top: -1px;
    display: block;
    width: calc(100% + 2px);
    height: calc(100% + 2px);
    border: 1px solid rgb(124, 185, 65);
    box-shadow: rgb(124 185 65 / 60%) 0px 0px 1px 1px;
    border-radius: 10px;
  }

  &.selected::before {
    content: "";
    position: absolute;
    left: -1px;
    top: -1px;
    display: block;
    width: calc(100% + 2px);
    height: calc(100% + 2px);
    border: 2px solid rgb(124, 185, 65);
    border-radius: 10px;
  }

  // &.selected::after {
  //   font-style: normal;
  //   font-weight: normal;
  //   font-variant: normal;
  //   text-transform: none;
  //   line-height: 1;
  //   -webkit-font-smoothing: antialiased;
  //   content: "";
  //   position: absolute;
  //   left: 50%;
  //   bottom: 0px;
  //   transform: translateX(-50%) translateY(100%);
  //   display: block;
  //   padding: 0.2rem 0.7rem;
  //   background: rgba(122, 181, 66, 0.93);
  //   font-size: 15px;
  //   color: white;
  //   border-radius: 0px 0px 15px 15px;
  //   font-family: fonticon !important;
  // }

  & span {
    font: 600 17px "Mukta Vaani", sans-serif;
    width: 100%;
    text-align: center;
    pointer-events: none;
  }

  @media only screen and (max-width: 567px){
    -webkit-box-align: center;
    align-items: center;
    line-height: 16px;
  }
`