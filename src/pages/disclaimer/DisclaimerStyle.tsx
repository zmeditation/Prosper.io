import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const StyledDisclaimer = styled(Box)`
  position: relative;
  background: white;
  width: 100%;
  min-height: calc(100vh - 80px);
`
export const DisclaimerContainer = styled(Box)`
  padding-top: 100px;
  overflow: hidden;
  @media only screen and (max-width: 960px){
    padding-bottom: 100px;
  }
  @media only screen and (max-width: 567px){
    padding-top: 70px;
  }
`

export const DisclaimerContent = styled(Box)`
  position: relative;
  width: 100%;
  max-width: 1340px;
  padding: 0px 3rem;
  box-sizing: border-box;
  margin: 0px auto;
  z-index: 999;
  @media only screen and (max-width: 767px){
    padding: 0px 2rem;
  }
`

export const DisclaimerTitleWrapper = styled(Box)`
  color: rgb(16, 12, 31);
  font: 500 4.8rem / 7.2rem Outfit, Arial, Helvetica, sans-serif;
  margin-bottom: 9rem;
  text-align: center;
  & p {
    color: rgba(100, 93, 125, 0.15);
    display: block;
    font: bold 7.2rem / 7.2rem Outfit, Arial, Helvetica, sans-serif;
    text-transform: uppercase;
    margin: 0px auto;
  }
  @media only screen and (max-width: 560px){
    font: 500 4.2rem / 4.8rem Outfit, Arial, Helvetica, sans-serif !important;
    & p {
      font: bold 4.8rem / 6.2rem Outfit, Arial, Helvetica, sans-serif;
    }
  }
`

export const DisclaimerTextBox = styled(Box)`
  padding-bottom: 100px;
  font-size: 18px;
  @media only screen and (max-width: 567px){
    font-size: 17px;
  }
`

export const DisclaimerContextTitle = styled(Box)`
  font: 500 24px Outfit, Arial, Helvetica, sans-serif;
  color: rgb(16, 12, 31);
  margin-top: 20px;
  margin-bottom: 20px;
`

export const DisclaimerContextContent = styled(Box)`
  margin-bottom: 4.6rem;
`