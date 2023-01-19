import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Accordion from '@mui/material/Accordion';

export const StyledAffiliateCompensation = styled(Box)`
  position: relative;
  padding: 16rem 0px 100px;
  overflow: hidden;
  box-sizing: border-box;
  &::before {
    position: absolute;
    right: 0px;
    bottom: -40px;
    content: "";
    width: 100%;
    height: 470px;
    background: url(/images/public/bg-shape.gif) center top / cover no-repeat;
    pointer-events: none;
    opacity: 0.7;
    transform: rotate(4deg);
  }
  &::after {
    position: absolute;
    right: 0px;
    bottom: 0px;
    content: "";
    width: 100%;
    height: 500px;
    background: url(/images/public/bg-shape.gif) center top / cover no-repeat;
    pointer-events: none;
    opacity: 0.5;
  }
  @media only screen and (max-width: 567px){
    padding: 70px 0px 120px;
  }
`

export const AffiliateCompensationContainer = styled(Box)`
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

export const TitleWrapper = styled(Box)`
  text-align: center;
  margin-bottom: 4rem;
  color: rgb(16, 12, 31);
  font: 500 4.8rem / 7.2rem Outfit, Arial, Helvetica, sans-serif;
  & p {    
    display: block;
    color: rgba(100, 93, 125, 0.15);
    font: bold 5.8rem / 5.2rem Outfit, Arial, Helvetica, sans-serif;
    margin: 0px auto;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 560px){
    font: 500 4.2rem / 4.8rem Outfit, Arial, Helvetica, sans-serif !important;
  }
`

export const CompensationDesc = styled(Box)`
  text-align: center !important;
  margin-bottom: 4.6rem;
`

export const MovieWrapper = styled(Box)`
  position: relative;
  width: 100%;
  max-width: 660px;
  margin: 0px auto 60px;
  cursor: pointer;
  
  & img {
    visibility: visible;
    position: relative;
    display: block;
    width: 100%;
  }
`

export const CompensationActionWrapper = styled(Box)`
  margin-bottom: 4.6rem;
  display: flex;
  justify-content: center;
  & .green-button {
    width: auto;
  }
`

export const AccordionRoot = styled(Accordion)`
  &::before {
    display: none;
  }
  &.MuiAccordion-root {
    position: relative;
    border: 1px dashed rgb(135, 134, 140);
    padding: 17px 18px;
    margin: 60px auto 35px!important;
    border-radius: 16px;
    max-width: 800px;
    font-size: 19px;
    background: white;
    box-shadow: rgb(0 0 0 / 3%) 0px 10px 10px;
  }
  & .MuiAccordionSummary-root {
    text-align: center;
    min-height: 0px;
  }
  & .MuiAccordionSummary-content{
    margin: 0px;
    padding: 0px;
    justify-content: center;
  }
  & .Mui-expanded .MuiAccordionSummary-content .MuiTypography-root{
    font: 500 21px Outfit, Arial, Helvetica, sans-serif;
  }
  & .MuiAccordionSummary-content .MuiTypography-root{
    font: 21px Outfit, Arial, Helvetica, sans-serif;
  }
  & .MuiAccordionDetails-root{
    max-height: 460px;
    padding: 20px;
    margin-top: 15px;
  }
  & .MuiAccordionDetails-root .option-desc1{
    margin: 0 0 4.6rem 0;
  }
  & .MuiAccordionDetails-root .option-desc2{
    margin: 0 0 4.6rem 0;
    text-align: center;
  }
  & .action-wrapper{
    text-align: center;
  }
  & .action-wrapper .link{
    text-decoration: none;
    font: 18px Outfit, Arial, Helvetica, sans-serif;
    text-transform: uppercase;
    color: rgb(124, 94, 203);
    border-bottom: 1px dashed rgb(124, 94, 203);
  }
`