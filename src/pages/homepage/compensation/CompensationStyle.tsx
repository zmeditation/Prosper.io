import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const StyledCompensation = styled(Box)`
  position: relative;
  background: url(/images/pattern-1.jpg) rgb(18, 14, 39);
  padding: 150px 0px 110px;
  color: rgb(156, 150, 171);
  margin-top: 0px;
  border-bottom: 0px solid white;

  & .compensation-view-button-content {
    display: flex;
    justify-content: center;
    margin-bottom: 4.6rem;
  }

  & .compensation-view-button{
    width: auto
  }
`

export const CompensationContent = styled(Box)`
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

export const HeaderContainer = styled(Box)`
  position: relative;
  margin-bottom: 4rem;
  text-align: center;
  font: 4.8rem / 7.2rem Outfit, Arial, Helvetica, sans-serif;
  color: white;
  & p {
    font: bold 5.8rem / 5.2rem Outfit, Arial, Helvetica, sans-serif;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.12);
    margin: 0px auto;
    display: block;
  }
`

export const CompensationDesc = styled(Box)`
  text-align: center;
  margin-bottom: 4.6rem;
`

