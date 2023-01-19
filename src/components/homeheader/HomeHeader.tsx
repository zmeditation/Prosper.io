import React, { useState } from "react"
import { StyledHeader, MenuGroup, MenuItem, MenuIconContent } from "./HomeHeaderStyle"
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from "@mui/material/IconButton";
import CloseIcon from '@mui/icons-material/Close';

const Logo = () => {
  return(
    <div>
      <img src="/images/logo.png" className="logo" alt="logo"></img>
    </div>
  )
}

export const HomeHeader = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }  

  return (
    <StyledHeader>
      <Logo/>
      <MenuIconContent>
        <IconButton onClick={()=>toggle()}>
          {
            isOpen ? 
              <CloseIcon />
            :
              <MenuIcon />
          }
        </IconButton>
      </MenuIconContent>
      <MenuGroup className={isOpen ? "expanded" : "collapsed"}>
        <MenuItem>
          <a href="/" className="menu-tab">Home</a>
        </MenuItem>
        <MenuItem>
          <a href="/quick-start/create-wallet" className="menu-tab">Quick Start</a>
        </MenuItem>
        <MenuItem>
          <a href="/login" className="menu-tab">Login</a>
        </MenuItem>
        <MenuItem>
          <a href="/join" className="menu-tab">Join Now</a>
        </MenuItem>
      </MenuGroup>
    </StyledHeader>
  )
}