import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const StyledJoin = styled(Box)`
  position: relative;
  background: white;
  width: 100%;
  min-height: calc(100vh - 80px);
`
export const JoinContainer = styled(Box)`
  padding-top: 100px;
  overflow: hidden;
  @media only screen and (max-width: 960px){
    padding-bottom: 100px;
  }
  @media only screen and (max-width: 567px){
    padding-top: 70px;
  }
  &::after {
    position: absolute;
    right: 0px;
    bottom: 0px;
    content: "";
    width: 100%;
    height: 450px;
    background: url(/images/bg-shape.gif) center top / cover no-repeat;
  }
`