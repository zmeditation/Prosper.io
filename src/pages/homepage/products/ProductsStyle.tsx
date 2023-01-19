import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ShowChartIcon from '@mui/icons-material/ShowChart';

export const StyledProducts = styled(Box)`
  position: relative;
  background: url(/images/bg-graphs.jpg) center top / cover no-repeat;
  padding: 146px 0px;
  color: rgb(156, 150, 171);

  & .products-button-content {
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

export const ProductsContent = styled(Box)`
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
  text-align: center;
  font: 4.8rem / 7.2rem Outfit, Arial, Helvetica, sans-serif;
  margin-bottom: 9rem;
  color: white;

  & p {
    display: block;
    font: bold 7.2rem / 7.2rem Outfit, Arial, Helvetica, sans-serif;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.12);
    margin: 0px auto;
  }

  & i {
    font-size: 4.2rem;
    background: linear-gradient(209deg, rgb(225, 158, 121) 0%, rgb(195, 121, 80) 100%);
    -webkit-text-fill-color: transparent;
    text-shadow: rgb(9, 7, 7) 20px 8px 3px;
    -webkit-background-clip: text;
  }
`;

export const StyledShowChartIcon = styled(ShowChartIcon)`
  font-size: 4.2rem;
  text-shadow: rgb(9, 7, 7) 0px 8px 3px;
  color: rgb(225, 158, 121);
`;

export const ProductsDesc = styled(Box)`
  margin-bottom: 4.6rem;
  text-align: center;
`

export const ProductsListItems = styled(Box)`
  max-width: 840px;
  list-style: none;
  margin: 100px auto;
`;

export const JoinTextDesc = styled(Box)`
  font: 400 21px Outfit, Arial, Helvetica, sans-serif;
  color: white;
  text-align: center;
  margin-bottom: 35px;

  & span {
    display: block;
    color: rgb(124, 94, 203);
    text-transform: uppercase;
    margin-top: 5px;
  }
`