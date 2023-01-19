import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const WhyProsperItemContainer = styled(Box)`
  width: 27%;
  text-align: center;

  & .whyprosper-item-large-text{
    font: 2.2rem / 7.2rem Outfit, Arial, Helvetica, sans-serif;
    text-transform: uppercase;
    text-align: center;
    color: white;
    margin-bottom: 10px;
  }

  & .whyprosper-item-small-text{
    margin-bottom: 4.6rem;
    text-align: left;
  }
  
  & i {
    display: block;
    margin: 3rem auto;
    font-size: 5.4rem;
  }

  & .fa-blue-color::before {
    background: linear-gradient(135deg, rgb(57, 122, 237) 0%, rgb(148, 106, 243) 100%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
  }

  & .fa-green-color::before {
    background: linear-gradient(135deg, rgb(108, 215, 13) 0%, rgb(38, 186, 222) 80%);
	  -webkit-background-clip: text;
	  -webkit-text-fill-color: transparent;
  }

  @media only screen and (max-width: 960px){
    width: 40%;
  }
  
  @media only screen and (max-width: 567px){
    width: 80%;
  }
  `