import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import YouTubeIcon from '@mui/icons-material/YouTube';

export const StyledTitleContainer = styled(Box)`
  background: url(/images/hero-3.png) center bottom no-repeat;
  min-height: 129.2rem;
  width: 100%;
  position: relative;
  zIndex: 9;
  @media only screen and (min-width: 1920px){
    background: url(/images/hero-3.png) center bottom / cover no-repeat;
    min-height: 140rem;
  }
  @media only screen and (max-width: 1440px){
    background: url(/images/hero-3.png) center top / contain no-repeat;
  }
  @media only screen and (max-width: 560px){
    min-height: 110rem;
  }
`

export const TitleContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  gap: '0px',
}));

export const LeftSideContent = styled(Box)`
  position: relative;
  zIndex: 101;
  width: 48%;
  @media only screen and (max-width: 960px){
    width: 100%;
  }
`

export const RightSideContent = styled(Box)`
  position: relative;
  z-index: 101;
  width: 50%;
  @media only screen and (max-width: 960px){
    width: 100%;
  }
`

export const StyledYoutubeIcon = styled(YouTubeIcon)`
  &.MuiSvgIcon-root {
    color: rgba(255, 255, 255, 0.6);
    font-size: 25px;
  }
  &.MuiSvgIcon-root:hover {
    color: rgb(154, 90, 59);
  }
`

export const VideoContainer = styled(Box)`
  position: relative;
  width: 100%;
  padding-top: 64.6%;
  height: 0px;
  max-width: 660px;
  margin: -20px auto 0px;

  @media only screen and (min-width: 1920px){
    max-width: 760px;
    margin-top: -60px;
  }

  @media only screen and (max-width: 960px){
    margin-top: 0px;
  }
`

export const VideoImageContainer = styled(Box)`
  position: absolute;
  top: 0px;
  left: 0px;
  max-width: 660px;
  max-height: 427px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.44) 0px 10px 30px 5px;
  width: 100% !important;
  height: 100% !important;
  background: url(/images/movie-thumbnail.jpg) 0% 0% / contain no-repeat;
  
  // &::before {
  //   position: absolute;
  //   left: 50%;
  //   top: 50%;
  //   transform: translateX(-50%) translateY(-50%);
  //   content: "";
  //   font-style: normal;
  //   font-weight: normal;
  //   font-variant: normal;
  //   text-transform: none;
  //   line-height: 1;
  //   -webkit-font-smoothing: antialiased;
  //   color: rgba(255, 255, 255, 0.9);
  //   font-size: 10rem;
  //   text-shadow: rgb(0 0 0 / 30%) 0px 10px 20px;
  //   font-family: fonticon !important;
  // }

  &::after {
    content: "";
    position: absolute;
    left: 0px;
    top: 0px;
    display: block;
    width: 100%;
    height: 100%;
    transition: background-color 0.1s linear 0s;
  }

  @media only screen and (min-width: 1920px){
    max-width: 760px;
    max-height: 491px;
  }
`