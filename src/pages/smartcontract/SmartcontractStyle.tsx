import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const StyledSmartcontract = styled(Box)`
  position: relative;
  background: white;
  width: 100%;
  min-height: calc(100vh - 80px);
`
export const SmartcontractContainer = styled(Box)`
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

export const SmartcontractContent = styled(Box)`
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

export const SmartcontractTitleWrapper = styled(Box)`
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

export const SmartcontractContentBox = styled(Box)`
  position: relative;
  font-size: 18px;
  z-index: 999;

  & .smartcontract-subtitle {
    font: 500 18px Outfit, Arial, Helvetica, sans-serif;
    color: rgb(16, 12, 31);
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  & .smartcontract-description {
    text-align: center;
    margin-bottom: 20px;
  }
`

export const SmartcontractLinkWrapper = styled(Box)`
  margin-bottom: 60px;
`

export const SmartcontractLinkBox = styled('ul')`
  max-width: 840px;
  list-style: none;
  margin: 10px auto 50px;
`

export const SmartcontractLinkItem = styled('li')`
  position: relative;
  box-sizing: border-box;
  transition: all 0.1s linear 0s;
  background: rgba(233, 233, 240, 0.38);
  margin-bottom: 10px;
  border-radius: 8px;

  & .contract-link-item {
    width: 100%;
    height: 100%;
    padding: 19px 50px 19px 80px;
    display: inline-block;
    text-decoration: none;
    box-sizing: border-box;
    color: rgb(26, 17, 48);
  }

  & .contract-link-item img {
    width: 2.6rem;
    height: 2.6rem;
    position: absolute;
    top: 50%;
    left: 38px;
    transform: translateY(-50%);
    transition: all 0.1s linear 0s;
  }

  & .contract-link-item i {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    font-size: 2.4rem;
    color: rgb(192, 92, 225);
    transition: all 0.1s linear 0s;
  }

  & .contract-link-item:hover i {
    right: 16px;
  }
`

export const SmartcontractActionWrapper = styled(Box)`
  text-align: center !important;
  margin-bottom: 60px;
  & .action-button-wrapper{
    display: flex;
    justify-content: center;
  }
  @media only screen and (max-width: 567px){
    & .green-button {
      width: 100%;
      min-height: 5.6rem;
      height: auto;
      padding: 1.5rem 2rem;
    }
  }
`