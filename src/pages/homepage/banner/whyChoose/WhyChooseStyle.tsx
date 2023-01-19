import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ShowChartIcon from '@mui/icons-material/ShowChart';
import Typography from '@mui/material/Typography';

export const StyledWhyChooseContainer = styled(Box)`
  position: relative;
  padding-bottom: 20rem;
  color: rgb(156, 150, 171);
  font-size: 18px;
  line-height: 3rem;

  @media only screen and (min-width: 1920px) {
    margin-top: -60px;
  }
`;

export const StyledWhyChooseInnerContainer = styled(Box)`
  position: relative;
  width: 100%;
  max-width: 1340px;
  padding: 0px 3rem;
  box-sizing: border-box;
  margin: 0px auto;
  z-index: 999;
`;

export const HeaderContainer = styled(Box)`
  text-align: center;
  font: 4.8rem / 7.2rem Outfit, Arial, Helvetica, sans-serif;
  margin-bottom: 9rem;
  color: white;

  & i {
    font-size: 4.2rem;
    background: linear-gradient(209deg, rgb(225, 158, 121) 0%, rgb(195, 121, 80) 100%);
    -webkit-text-fill-color: transparent;
    text-shadow: rgb(9, 7, 7) 20px 8px 3px;
    -webkit-background-clip: text;
  }

  & p {
    display: block;
    font: bold 7.2rem / 7.2rem Outfit, Arial, Helvetica, sans-serif;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.12);
    margin: 0px auto;
  }

  @media only screen and (max-width: 560px){
    font: 500 4.2rem / 4.8rem Outfit, Arial, Helvetica, sans-serif !important;
    & p{
      font: bold 6.2rem / 6.2rem Outfit, Arial, Helvetica, sans-serif;
    }
  }
`;

export const StyledShowChartIcon = styled(ShowChartIcon)`
  font-size: 4.2rem;
  text-shadow: rgb(9, 7, 7) 0px 8px 3px;
  color: rgb(225, 158, 121);
`;

export const WhyProsperItems = styled(Box)`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 4rem;
  margin: 15rem 0px 12rem;
  @media only screen and (max-width: 960px){
    -webkit-box-pack: center;
    justify-content: center;
    gap: 6rem;
  }
`

export const MoreTitle = styled(Typography)`
  font: 2.2rem / 7.2rem Outfit, Arial, Helvetica, sans-serif;
  color: rgb(124, 94, 203);
  text-transform: uppercase;
  text-align: center;
`

export const MoreContentItems = styled(Box)`
  position: relative;
  max-width: 910px;
  margin: 4.4rem auto -2rem;
  @media only screen and (max-width: 960px){
    max-width: 800px;
  }
`;