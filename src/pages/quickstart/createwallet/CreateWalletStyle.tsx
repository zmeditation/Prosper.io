import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const StyledCreateWallet = styled(Box)`
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

export const CreateMetaContainer = styled(Box)`
  display: flex;
  width: 100%;
  -webkit-box-pack: justify;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: 40px;
`

export const CreateMetaLeft = styled(Box)`
  max-width: 100%;
  width: 46%;
  padding-top: 60px;
  padding-left: 45px;
  font-size: 18px;
  line-height: 30px;

  & span {
    font: 500 24px / 24px Outfit, Arial, Helvetica, sans-serif;
    text-transform: none;
    margin-bottom: 3rem;
  }

  & p {
    margin-bottom: 4.6rem;
  }

  @media screen and (max-width: 900px){
    padding-top: 10px;
  }

  @media screen and (max-width: 767px){
    max-width: 100%;
    width: 100%;
    padding-top: 35px;
    padding-left: 30px;
    order: 2;
  }

  @media only screen and (max-width: 567px){
    max-width: 100%;
    width: 100%;
    padding-top: 35px;
    padding-left: 30px;
    order: 2;
  }
`

export const CreateMetaRight = styled(Box)`
  width: 40%;
  padding: 0px;

  & img {
    width: 100%;
    max-width: 400px;
  }
  @media screen and (max-width: 767px){
    width: 100%;
    max-width: 400px;
    padding: 0px;
    margin: -20px auto 0px;
    order: 1;
  }
  @media only screen and (max-width: 567px){
    width: 70%;
    padding: 0px;
    margin: -20px auto 0px;
  }
`
export const SelectDeviceDesc = styled(Box)`
  color: rgb(35, 30, 48);
  margin: 6rem 0px 3rem;
  font: 600 1.95rem / 2rem "Mukta Vaani", sans-serif !important;
  text-align: center !important;
`

export const SelectDeviceButtonBox = styled(Box)`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
`

export const MovieWrapper = styled(Box)`
  overflow: hidden;
  max-height: 1000px;
  padding: 20px 0px 0px;

  &.show-none {
    display: none;
  }
`

export const MovieBox = styled(Box)`
  position: relative;
  overflow: hidden;
  max-width: 90rem;
  margin: 0px auto 3rem;
  & iframe {
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    border: 0px;
  }
  &::before {
    display: block;
    content: "";
    padding-top: 56.25%;
  }
`

export const MovieDesc = styled('p')`
  text-align: center !important;
  margin-bottom: 4.6rem;
`

export const ActionContainer = styled(Box)`
  display: block;
  padding: 0px 0px 40px;
  display: flex;
  justify-content: center;
`