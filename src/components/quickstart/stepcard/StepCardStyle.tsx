import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from '@mui/material/Card';

export const StyledStepCard = styled(Box)`
  font-size: 18px;
`

export const CardContainer = styled(Card)`
  background: white;
  border-radius: 30px;
  box-shadow: rgb(191 191 213 / 18%) 0px 5px 24px 10px;
  margin-bottom: 50px;
  position: relative;
  width: 100%;
  padding: 3.5rem;
  padding-bottom: 7rem;
`

export const CardTitleContent = styled(Box)`
  position: relative;
  font: 500 15px Nunito, Arial, Helvetica, sans-serif;
  margin: -8px auto 50px;
  text-align: center;

  &::before {
    content: "";
    position: absolute;
    left: 0px;
    top: 50%;
    width: 100%;
    height: 1px;
    background: rgb(220, 224, 230);
    z-index: 9;
  }

  & span {
    background: rgb(181, 184, 232);
    display: inline-block;
    padding: 0.7rem 2rem;
    border-radius: 3rem;
    position: relative;
    z-index: 99;
    box-shadow: rgb(94 91 91 / 19%) 0px 2px 4px;
  }
`