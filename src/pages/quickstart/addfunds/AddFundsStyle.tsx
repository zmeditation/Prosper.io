import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const StyledAddfunds = styled(Box)`
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

export const TitleDesc = styled('p')`
  text-align: center;
  margin-top: 110px;
  font: 500 24px / 24px Outfit, Arial, Helvetica, sans-serif;
  text-transform: none;
  margin-bottom: 3rem;

  @media only screen and (max-width: 567px){
    margin-top: 50px;
  }
`

export const AddFundDesc = styled('p')`
  text-align: center !important;
  margin-bottom: 4.6rem;
`

export const ChooseOptionTitle = styled('p')`
  position: relative;
  color: rgb(35, 30, 48);
  margin: 3rem 0px;
  font: 600 1.95rem / 2rem "Mukta Vaani", sans-serif !important;
  text-align: center !important;
`

export const OptionsWrapper = styled(Box)`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  margin-bottom: 50px;
  flex-wrap: wrap;
`

export const ActionWrapper = styled(Box)`
  padding: 0px 0px 40px;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const BackLink = styled(Box)`
  display: inline-flex;
  position: relative;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  margin: 20px 0px 0px;
  cursor: pointer;
  text-decoration: none;
  color: rgb(71, 71, 71);

  &:hover{
    color: rgb(124, 185, 65);
  }

  & .addfunds-left-arrow-icon{
    font-size: 2.8rem;
    margin-right: 10px;
  }
`