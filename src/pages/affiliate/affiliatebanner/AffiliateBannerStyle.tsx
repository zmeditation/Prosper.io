import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const StyledAffiliateBanner = styled(Box)`
  background: url(/images/bg-affiliate.jpg) center top / cover no-repeat;
`
export const AffiliateBannerContent = styled(Box)`
  position: relative;
  padding: 140px 0px 13rem;
`

export const AffiliateBannerWrapper = styled(Box)`
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

export const BannerTitleWrapper = styled(Box)`
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

  @media only screen and (max-width: 560px){
    font: 500 4.2rem / 4.8rem Outfit, Arial, Helvetica, sans-serif !important;
    & p {
      font: bold 6.2rem / 6.2rem Outfit, Arial, Helvetica, sans-serif;
    }
  }
`

export const BannerDesc = styled(Box)`
  color: rgb(158, 155, 166);
  font-size: 1.8rem;
  line-height: 3rem;
  max-width: 900px;
  margin: -50px auto 50px;
  text-align: center;
`

export const BannerActionWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  & .purple-button {
    @media only screen and (max-width: 567px){
      width: 100%;
      min-height: 5.6rem;
      height: auto;
      padding: 1.5rem 2rem;
    }
  }
`