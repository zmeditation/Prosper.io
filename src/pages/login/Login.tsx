import ActionButton from "../../components/basicComponent/ActionButton"
import { StyledLogin, LoginContent, LoginActionWrapper, LoginTitle, LoginSubTitle, LoginButtonWrapper, LoginDesc, DecorationWrapper, FooterDesc } from "./LoginStyle"

export default function Login() {
  return(
    <StyledLogin>
      <LoginContent>
        <LoginActionWrapper>
          <a className="login-logo" href="/">_</a>
          <LoginTitle>Welcome</LoginTitle>
          <LoginSubTitle>Access Your Personal Account:</LoginSubTitle>
          <LoginButtonWrapper>
            <ActionButton color="green">Authorized Login</ActionButton>
            <ActionButton color="purple">Secure Login</ActionButton>
            <LoginDesc>Remember to authorize with the correct BNB address.</LoginDesc>
          </LoginButtonWrapper>
          <DecorationWrapper />
          <div>
            <span>If you're new to our platform:</span>
            <br/>
            <a href="/join" className="login-link-join">Join now</a>
          </div>
          <FooterDesc>
            Copyright © 2022 Prosper. All rights reserved.
          </FooterDesc>
        </LoginActionWrapper>
      </LoginContent>
    </StyledLogin>
  )
}