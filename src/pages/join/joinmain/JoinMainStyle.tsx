import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const JoinContent = styled(Box)`
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

export const JoinTitleWrapper = styled(Box)`
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

export const JoinDesc = styled(Box)`
  text-align: center !important;
  margin-bottom: 4.6rem;
`

export const SpaceDiv8 = styled(Box)`
  width: 100%;
  clear: both;
  height: 80px;
`

export const JoinActionWrapper = styled(Box)`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  justify-content: space-between;
  gap: 0px;
`

export const JoinActionLeft = styled(Box)`
  position: relative;
  z-index: 101;
  width: 50%;
  @media only screen and (max-width: 1160px){
    width: 100%;
    order: 1;
  }
`

export const PurchaseFollowingWrapper = styled(Box)`
  padding: 40px 15px;
  border-radius: 16px;
  font-size: 17px;
  margin: -20px auto 0px;
  @media only screen and (max-width: 1160px){
    max-width: 620px;
  }
`

export const PurchaseFollowingTitle = styled(Box)`
  font: 400 20px Outfit, Arial, Helvetica, sans-serif;
  color: rgb(16, 12, 31);
  margin-top: 0px;
  margin-bottom: 20px;
  text-align: center;
  & span {
    display: inline-block;
    border-bottom: 2px dotted;
  }
`

export const PurchaseFollowingList = styled('ul')`
  position: relative;
  list-style: none;
  margin: 15px 0px 20px;
  width: 100%;
  border: 1px dashed rgba(128, 128, 128, 0.6);
  padding: 10px 10px 0px;
  border-radius: 12px;
  box-sizing: border-box;
`

export const PurchaseFollowingItem = styled('li')`
  position: relative;
  padding: 13px 10px 13px 50px;
  background: rgba(233, 233, 240, 0.38);
  margin-bottom: 10px;
  border-radius: 8px;

  &::before {
    content: "";
    position: absolute;
    top: 21px;
    left: 18px;
    display: block;
    width: 18px;
    height: 9px;
    border-left: 3px solid rgb(125, 196, 58);
    border-bottom: 3px solid rgb(125, 196, 58);
    transform: rotate(-45deg);
  }

  & span {
    display: inline-block;
    font: 500 16px Outfit, Arial, Helvetica, sans-serif;
    color: rgb(16, 12, 31);
    text-transform: uppercase;
    padding-right: 5px;
  }
`

export const AddInviterWrapper = styled(Box)`
  position: relative;
  & .MuiPopperUnstyled-root {
    margin: 0px 10px !important;
    padding-right: 20px;
    width: 100%;
  }
  & .MuiPaper-root {
    border-radius: 0px 0px 10px 10px;
    background: rgba(214, 217, 233, 0.74);
    box-shadow: none;
  }
`

export const InviterButton = styled(Box)`
  position: relative;
  padding: 7px 10px 9px 25px;
  margin: -11px 10px 10px;
  border-radius: 8px;
  cursor: pointer;
  height: 40px;
  box-sizing: border-box;
  &:hover {
    background: rgba(213, 213, 225, 0.38);
    box-shadow: rgb(128 128 128 / 15%) 0px 4px 5px;
  }
  @media only screen and (max-width: 560px){
    padding-left: 10px;
    padding-right: 0px;
  }
`

export const InviterForm = styled('div')`
  padding: 10px;
  display: flex !important;
  align-items: center;
  justify-content: center;

  & .form-input {
    border: 1px solid rgb(153, 149, 166);
    border-radius: 5px;
    height: 38px;
    padding: 0px 5px;
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    font: 300 16px Nunito, Arial, Helvetica, sans-serif;
    color: rgb(89, 86, 104);
    width: 217px;
    box-sizing: border-box;
    background: rgb(255, 255, 255);
    margin-left: 20px;
  }
  @media only screen and (max-width: 560px){
    justify-content: space-between;
    & .form-input{
      margin-left: 0px;
      width: 160px;
    }
  }
`

export const DisclaimerWrapper = styled(Box)`
  text-align: center;
  font-size: 18px;
  max-width: 500px;
  margin: 0px auto;
  & a {
    display: inline-block;
    text-decoration: none;
    color: rgb(91, 121, 241);
  }
`

export const PurchaseButtonWrapper = styled(Box)`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  margin: 40px 0px 30px;

  @media only screen and (max-width: 567px){
    & .green-button{
      width: 100%;
      min-height: 5.6rem;
      height: auto;
      padding: 1.5rem 2rem;
    }
  }
`

export const JoinActionRight = styled(Box)`
  margin: 10px -50px 0px 0px;
  position: relative;
  z-index: 101;
  width: 48%;
  & img {
    width: 100%;
    max-width: 620px;
    margin: 0px auto;
    display: block;
  }
  @media only screen and (max-width: 1160px){
    width: 100%;
    margin: 0px 0px 70px;
    order: 3;
  }
`