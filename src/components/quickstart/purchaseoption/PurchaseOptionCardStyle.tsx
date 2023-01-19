import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const StyledPurchaseOptionCard = styled(Box)`
  position: relative;
  display: block;
  background: rgb(255, 255, 255);
  border-radius: 3.5rem;
  margin: 1rem;
  box-shadow: rgb(86 86 96 / 7%) 0px 0px 0px 1px, rgb(86 86 96 / 8%) 5px 5px 10px;
  max-width: 190px;
  min-height: 230px;
  width: 100%;
  transition: all 0.15s linear 0s;
  cursor: pointer;
  padding: 20px 10px;
  box-sizing: border-box;
  text-align: center;

  &::before {
    font-style: normal;
    font-weight: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    content: "";
    font-size: 2.4rem;
    position: absolute;
    top: -11px;
    left: calc(50% - 11px);
    -webkit-text-fill-color: transparent;
    font-family: fonticon !important;
    font-variant: normal;
    background: linear-gradient(209deg, rgb(225, 158, 121) 0%, rgb(195, 121, 80) 100%) text;
  }

  & img {
    display: inline-block;
    max-width: 120px;
    height: auto;
    max-height: 40px;
  }

  & .purchase-button {
    display: inline-flex;
    font: 17px Nunito, Arial, Helvetica, sans-serif;
    color: black;
    text-align: center;
    padding: 1.5rem 3.5rem;
    text-decoration: none;
    border-radius: 16px;
    transition: all 0.2s linear 0s;
    box-shadow: rgb(3 3 3 / 10%) 0px 2px 1px, rgb(3 3 3 / 10%) 0px 3px 5px;
    height: 40px;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    box-sizing: border-box;
    background: rgb(162, 167, 236);
    position: absolute;
    bottom: 20px;
    left: calc(50%);
    transform: translateX(-50%);
    min-width: auto;
  }

  @media only screen and (max-width: 567px){
    width: 44%;
    & .purchase-button {
      width: 100px;
    }
  }
`

export const CardLabelWrapper = styled(Box)`
  margin: 40px 0px 0px;
  color: rgb(35, 30, 48);
  font: 400 2rem / 2.1rem "Mukta Vaani", sans-serif !important;

  & span {
    display: block;
    text-transform: uppercase;
    color: rgb(166, 148, 165);
    font: 400 1.4rem / 1.8rem "Mukta Vaani", sans-serif !important;
  }
`

export const LogoWrapper = styled(Box)`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`