import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import YouTubeIcon from '@mui/icons-material/YouTube';

export const StyledFooter = styled(Box)`
  position: relative;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  flex-wrap: wrap;
  -webkit-box-align: center;
  align-items: center;
  padding: 20px 40px;
  background: rgb(13, 11, 21);

  &.typical-footer {
    position: absolute;
    left: 0px;
    width: 100%;
    bottom: -80px;
    box-sizing: border-box;
  }

  & .logo {
    position: relative;
    z-index: 99;
    display: block;
    width: 11rem;
    height: 7.6rem;
  }

  @media only screen and (max-width: 1020px){
    padding: 30px 20px;
  }

  @media only screen and (max-width: 960px){
    & img {
      margin: 0px auto 15px;
    }
  }
`

export const FooterMidContent = styled(Box)`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  font-size: 17px;
  color: rgba(255, 255, 255, 0.4);
  @media only screen and (max-width: 960px) {
    width: 100%;
    flex-wrap: wrap;
    & span {
      text-align: center;
      display: block;
      width: 100%;
      padding-bottom: 5px;
    }
  }
`

export const FooterTextLists = styled(Box)`
  & div {
    display: inline;
  }

  & div::before {
    content: "|";
    padding: 0px 10px;
  }

  & a {
    color: rgba(255, 255, 255, 0.6);
    text-decoration: none;
  }

  & a:hover {
    color: #e78d61;
    text-decoration: none;
  }
`

export const FooterVideoLink = styled(Box)`
  & .link-container {
    display: flex;
    align-items: center;
  }
  @media only screen and (max-width: 960px){
    margin: 15px auto 0px;
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