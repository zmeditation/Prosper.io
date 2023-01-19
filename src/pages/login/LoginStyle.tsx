import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const StyledLogin = styled(Box)`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: url(/images/group.jpg) center top / cover no-repeat;
`

export const LoginContent = styled(Box)`
  position: relative;
  max-width: 400px;
  width: 100%;
  margin: 0px auto;
  min-height: 100vh;
  box-sizing: border-box;
  padding: 2.5rem;
  color: rgb(157, 155, 170);
  text-align: center;
  font: 300 16px Outfit, Arial, Helvetica, sans-serif;

  &::before {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 9;
    display: block;
    width: 100%;
    height: 100%;
    background: url(/images/pattern-1.jpg) repeat;
    opacity: 0.8;
  }
`
export const LoginActionWrapper = styled(Box)`
  position: relative;
  z-index: 999;
  padding-bottom: 30px;
  height: calc(100vh - 60px);
  box-sizing: border-box;

  & .login-logo{
    position: relative;
    z-index: 99;
    display: block;
    width: 10rem;
    height: 5.6rem;
    text-indent: -9999rem;
    background: url(/images/logo.png) 0% 0% / contain no-repeat;
    margin: 0px auto 10px;
  }

  & .login-link-join {
    display: inline-block;
    margin: 10px auto 0px;
    text-decoration: none;
    font: 18px Outfit, Arial, Helvetica, sans-serif;
    text-transform: uppercase;
    color: white;
    border-bottom: 1px dashed white;
  }
`

export const LoginTitle = styled(Box)`
  font: 600 36px "Mukta Vaani", Arial, Helvetica, sans-serif;
  color: white;
  text-transform: uppercase;
  margin-bottom: 14rem;
`

export const LoginSubTitle = styled(Box)`
  font: 19px Outfit, Arial, Helvetica, sans-serif;
  color: rgb(151, 147, 187);
  margin-bottom: 3.2rem;
`

export const LoginButtonWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px;
`

export const LoginDesc = styled(Box)`
  max-width: 210px;
  margin: 30px auto 0px;  
`

export const DecorationWrapper = styled(Box)`
  position: relative;
  width: 100%;
  max-width: 31rem;
  height: 1px;
  margin: 9.4rem auto;
  background: rgb(62, 59, 69);
  &::before {
    content: "";
    position: absolute;
    top: 0px;
    left: 50%;
    z-index: 9;
    transform: translateX(-50%);
    display: block;
    width: 4.8rem;
    height: 1px;
    background: rgb(14, 10, 22);
  }
  &::after {
    content: "";
    position: absolute;
    top: -12px;
    left: 50%;
    z-index: 99;
    transform: translateX(-50%);
    display: block;
    width: 30px;
    height: 30px;
    background: url(/images/ico-dsquare.png) 0% 0% / contain;
  }
`

export const FooterDesc = styled(Box)`
  position: absolute;
  left: 0px;
  bottom: 0px;
  text-align: center;
  opacity: 0.7;
`