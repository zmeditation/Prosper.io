import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const StyledStepper = styled(Box)`
  & .MuiStepper-root {
    position: relative;
    max-width: 600px;
    margin: 0px auto 70px;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    --focused: #79a5f8;
  }
  & .MuiSvgIcon-root.Mui-completed {
    color: #79a5f8;
    width: 20px;
    height: 20px;
    top: -8px;
    box-shadow: rgb(0 0 0 / 23%) -1px 1px 3px inset;
    border-radius: 20px;
    font-size: 11px;
  }
  & .MuiStepLabel-label, & .MuiStepLabel-label.MuiStepLabel-alternativeLabel {
    margin-top: 30px;
    font: 300 19px "Mukta Vaani", Arial, Helvetica, sans-serif;
    color: rgb(16, 12, 31);
  }
  & .MuiStepLabel-label.Mui-active {
    margin-top: 30px;
    font: 700 19px "Mukta Vaani", Arial, Helvetica, sans-serif;
    color: rgb(16, 12, 31);
  }
  & .MuiSvgIcon-root.Mui-active{
    background: #79a5f8;
    color: #79a5f8;
    width: 22px;
    height: 22px;
    top: -10px;
    box-shadow: rgb(128 128 128 / 25%) -2px -2px 2px;
    border-radius: 20px 20px 20px 0px;
    transform: rotate(226deg);
  }
  & .MuiStepIcon-text{
    display: none;
  }
  & .MuiSvgIcon-root{
    color: rgb(244, 244, 246);
    width: 12px;
    height: 12px;
  }
  & .MuiStepConnector-line {
    border-radius: 0px 10px 10px 0px;
    display: block;
    height: 3px;
    background: rgb(245, 245, 247);
    box-shadow: rgb(0 0 0 / 7%) 0px 2px 3px inset;
    border: none;
  }
  & .MuiStepConnector-root {
    top: 10px;
    left: calc(-50% + 5px);
    right: calc(50% + 5px);
  }
  & .MuiStepLabel-iconContainer{
    z-index: 1;
    height: 22px;
    display: flex;
    align-items: center;
  }

  @media only screen and (max-width: 567px){
    .MuiStepLabel-label{
      font-size: 17px!important;
    }
  }
`