import { StyledFooter, FooterMidContent, FooterTextLists, FooterVideoLink, StyledYoutubeIcon } from "./FooterStyle"
import Link from "@mui/material/Link"

interface FooterProps {
  className?: string
}

export const Footer = (props: FooterProps) => {
  return (
    <StyledFooter className={props.className}>
      <img src="/images/logo.png" className="logo" alt="logo"></img>
      <FooterMidContent>
        <span>Copyright © 2022 Prosper 247. All rights reserved.</span>
        <FooterTextLists>
          <div>
            <a href="/income-disclaimer">Income Disclaimer</a>
          </div>
          <div>
            <a href="/smart-contract">Smart Contract</a>
          </div>
        </FooterTextLists>
      </FooterMidContent>
      <FooterVideoLink>
        <Link component={"a"} href="https://youtube.com/channel/UCRvoLct6XdxifQ1eDZP4XZw" target={"_blank"} rel="noopener noreferrer" className='link-container'>
          <StyledYoutubeIcon/>
        </Link>
      </FooterVideoLink>
    </StyledFooter>
  )
}