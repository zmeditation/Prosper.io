import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const StyledQuickStartLayout = styled(Box)`
  position: relative;
  background: white;
  width: 100%;
  min-height: calc(100vh - 80px);
`
export const QuickStartContainer = styled(Box)`
  position: relative;
  padding-top: 70px;
  overflow: hidden;
  min-height: calc(100vh - 155px);
  box-sizing: border-box;

  &::before{
    position: absolute;
    right: 0px;
    bottom: -40px;
    content: "";
    width: 100%;
    height: 470px;
    background: url(/images/bg-shape.gif) center top / cover no-repeat;
    pointer-events: none;
    opacity: 0.7;
    transform: rotate(4deg);
  }

  &::after{
    position: absolute;
    right: 0px;
    bottom: 0px;
    content: "";
    width: 100%;
    height: 500px;
    background: url(/images/bg-shape.gif) center top / cover no-repeat;
    pointer-events: none;
    opacity: 0.5;
  }

  @media only screen and (max-width: 567px){
    padding: 70px 0px 120px;
  }
`