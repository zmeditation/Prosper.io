import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const StyledHeader = styled(Box)`
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: 9999;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 2.6rem 5rem;
  box-sizing: border-box;

  & .logo {
    position: relative;
    z-index: 99;
    display: block;
    width: 14rem;
    height: 9.6rem;
  }
  
  @media only screen and (max-width: 1440px){
    padding: 2.6rem 3rem;
  }

  @media only screen and (max-width: 767px){
    padding: 2.6rem 2rem;
  }
`

export const MenuGroup = styled(Box)`
  list-style: none;
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;

  @media only screen and (max-width: 767px) {
    position: absolute;
    flex-wrap: wrap;
    width: 100%;
    left: 0px;
    top: 0px;
    z-index: 9;
    padding: 70px 20px 10px;
    box-sizing: border-box;
    background: rgba(0, 0, 0, 0.7);
    transition: all 0.2s linear 0s;

    &.collapsed {
      max-height: 0px;
      padding: 0px;
      overflow: hidden;
    }

    &.expanded {
      max-height: 500px;
    }
  }
`

export const MenuItem = styled(Box)`
  position: relative;
  display: flex;
  -webkit-box-align: center;
  align-items: center;

  & .menu-tab {
    font: 300 15px Outfit, Arial, Helvetica, sans-serif;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.75);
    text-decoration: none;
    transition: all 0.2s linear 0s;
  }

  &:not(:last-child) .menu-tab:after {
    content: "";
    display: inline-block;
    width: 1px;
    height: 16px;
    background: rgb(154, 90, 59);
    margin:-0.2rem 2rem;
  }

  & .menu-tab:hover{
    color: rgb(154, 90, 59);
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    -webkit-box-pack: center;
    justify-content: center;
    padding: 5px;
    flex-wrap: wrap;

    & .menu-tab {
      width: 100%;
      text-align: center;
    }

    &:not(:last-child) .menu-tab:after {
      content: "";
      display: block;
      width: 100%;
      height: 1px;
      background: rgb(38, 31, 27);
      margin: 1rem 0px;
    }
  }
`

export const MenuIconContent = styled(Box)`
  position: relative;
  z-index: 99;
  display: none;
  
  & .MuiSvgIcon-root {
    color: rgba(255, 255, 255, 0.8);
    font-size: 3.6rem;
  }

  & .MuiSvgIcon-root:hover {
    color: rgb(154, 90, 59);
  }

  @media screen and (max-width: 767px) {
    display: block;
  }
`