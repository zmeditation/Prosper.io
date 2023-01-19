import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const StyledLearnProsper = styled(Box)`
  position: relative;
  background: white;
  padding: 185px 0px 175px;
  min-height: 1044px;
  font-size: 19px;
  line-height: 30px;
  &::after {
    position: absolute;
    right: 0px;
    bottom: 0px;
    content: "";
    width: 100%;
    height: 1000px;
    background: url(/images/bg-shape.gif) center top / cover no-repeat;
  }
  @media only screen and (max-width: 960px){
    padding: 110px 0px 80px;
  }
`
export const LearnProsperContent = styled(Box)`
  position: relative;
  width: 100%;
  max-width: 1340px;
  padding: 0px 30px;
  box-sizing: border-box;
  margin: 0px auto;
  z-index: 999;
`

export const HeaderContainer = styled(Box)`
  text-align: center;
  margin-bottom: 90px;
  color: rgb(16, 12, 31);
  font: 500 4.8rem / 7.2rem Outfit, Arial, Helvetica, sans-serif;
  & p {
    color: rgba(100, 93, 125, 0.15);
    display: block;
    font: bold 7.2rem / 7.2rem Outfit, Arial, Helvetica, sans-serif;
    text-transform: uppercase;
    margin: 0px auto;
  }
  @media only screen and (max-width: 560px){
    font: 500 4.2rem / 4.8rem Outfit, Arial, Helvetica, sans-serif !important;
    & p{
      font: bold 6.2rem / 6.2rem Outfit, Arial, Helvetica, sans-serif;
    }
  }
`

export const LearnTopDesc = styled(Box)`
  margin-bottom: 4.6rem;
  text-align: center;
`

export const SpaceDiv20 = styled(Box)`
  width: 100%;
  clear: both;
  height: 200px;
`

export const SpaceDiv10 = styled(Box)`
  width: 100%;
  clear: both;
  height: 100px;
`

export const SpaceDiv8 = styled(Box)`
  width: 100%;
  clear: both;
  height: 80px;
`

export const EarningContent = styled(Box)`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  justify-content: space-between;
  gap: 0px;
`

export const EarnignContentLeft = styled(Box)`
  position: relative;
  z-index: 101;
  width: 45%;
  @media only screen and (max-width: 960px){
    order: 2;
    width: 100%;
    & .join-button{
      display: flex;
      justify-content: center;
    }
  }

  @media only screen and (max-width: 567px){
    & .green-button{
      width: 100%;
      min-height: 5.6rem;
      height: auto;
      padding: 1.5rem 2rem;
    }
  }

`

export const EarnignContentRight = styled(Box)`
  margin-top: -70px;
  position: relative;
  z-index: 101;
  width: 50%;
  & img {
    width: 100%;
    max-width: 636px;
    margin: 0px auto;
  }
  @media only screen and (max-width: 960px){
    order: 1;
    margin-top: -20px;
    margin-bottom: 70px;
    width: 100%;
    & img {
      display: flex;
    }
  }
`
export const EarningDesc = styled(Box)`
  margin-bottom: 4.6rem;
`

export const JoinTextDesc = styled(Box)`
  font: 500 19px Outfit, Arial, Helvetica, sans-serif;
  margin-bottom: 20px;
  @media only screen and (max-width: 960px){
    text-align: center;
  }
`

export const SmartContractConcept = styled(Box)`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  justify-content: space-between;
  gap: 0px;
`

export const SmartContractConceptLeft = styled(Box)`
  position: relative;
  z-index: 101;
  width: 530px;

  & img{
    border: none;
    display: block;
    width: 100%;
    max-width: 530px;
    margin: 0px auto;
    box-shadow: rgb(0 0 0 / 17%) 0px 14px 14px;
  }

  @media only screen and (max-width: 960px){
    order: 1;
    margin-top: -50px;
    margin-bottom: 70px;
    width: 100%;
  }
`

export const SmartContractConceptRight = styled(Box)`
  position: relative;
  z-index: 101;
  width: calc(100% - 610px);
  & .smartcontract-title {
    font: 500 28px Outfit, Arial, Helvetica, sans-serif;
    color: rgb(16, 12, 31);
    margin-top: 20px;
    margin-bottom: 60px;
  }
  
  @media only screen and (max-width: 960px){
    order: 2;
    width: 100%;
    & .smartcontract-title {
      text-align: center;
    }
  }
`