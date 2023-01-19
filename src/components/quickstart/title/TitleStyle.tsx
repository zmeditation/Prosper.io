import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const StyledTitle = styled(Box)`
  color: rgb(16, 12, 31);
  font: 500 4.8rem / 7.2rem Outfit, Arial, Helvetica, sans-serif;
  text-align: center;
  margin-bottom: 9rem;

  & p{
    display: block;
    font: bold 7.2rem / 7.2rem Outfit, Arial, Helvetica, sans-serif;
    text-transform: uppercase;
    color: rgba(100, 93, 125, 0.15);
    margin: 0px auto;
  }

  @media only screen and (max-width: 560px){
    font: 500 4.2rem / 4.8rem Outfit, Arial, Helvetica, sans-serif !important;
  }

  @media only screen and (max-width: 560px){
    & p{
      font: bold 6.2rem / 6.2rem Outfit, Arial, Helvetica, sans-serif;
    }
  }
`