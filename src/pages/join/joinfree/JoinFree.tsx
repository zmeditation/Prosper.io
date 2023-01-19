import React, { useState, useRef } from 'react'
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import { useNavigate } from 'react-router-dom';
import ActionButton from "../../../components/basicComponent/ActionButton";
import { JoinActionLeft, JoinActionRight, JoinActionWrapper, JoinContent, JoinDesc, JoinTitleWrapper, PurchaseFollowingWrapper, SpaceDiv8, PurchaseFollowingTitle, PurchaseButtonWrapper, DisclaimerWrapper, AddInviterWrapper, InviterButton, InviterForm, PurchaseFollowingDesc } from "./JoinFreeStyle";

export const JoinFree = () => {
  const [openForm, setOpenForm] = useState(false);
  const anchorRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate()

  const handleToggle = () => {
    setOpenForm((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpenForm(false);
  };

  return (
    <JoinContent>
      <JoinTitleWrapper>
        <p>
          JOIN PROSPER 365
        </p>
        Free Affiliate
      </JoinTitleWrapper>
      <JoinDesc>
        Our goal is to give access to anyone who wishes to participate regardless of their financial situation. Therefore we have created a free affiliate program where people can become affiliates by simply paying the transaction fees (gas fee) of starting their contract.
      </JoinDesc>
      <SpaceDiv8 />
      <JoinActionWrapper>
        <JoinActionLeft>
          <PurchaseFollowingWrapper>
            <PurchaseFollowingTitle>
            No purchase is necessary.
            </PurchaseFollowingTitle>
            <PurchaseFollowingDesc>
              You will earn a 5% direct sale reward on the purchases of your personally referred members.
            </PurchaseFollowingDesc>
            <AddInviterWrapper>
              <InviterButton onClick={handleToggle} ref={anchorRef}>
                Want to add your inviter? Click here
              </InviterButton>
              <Popper
                sx={{
                  zIndex: 1,
                }}
                open={openForm}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === 'bottom' ? 'center top' : 'center bottom',
                    }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleClose}>
                        <InviterForm>Referral ID:
                          <input type="text" placeholder="" className="form-input" />
                        </InviterForm>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </AddInviterWrapper>
            <PurchaseButtonWrapper>
              <ActionButton color="purple" onClick={()=>navigate('/join')}>Create Account</ActionButton>
            </PurchaseButtonWrapper>
            <DisclaimerWrapper>
              By clicking the button above, I aknowledge that I have read and agree to the &nbsp;
              <a href="/income-disclaimer" target="_blank" rel="noopener noreferrer">Income Disclaimer</a>
            </DisclaimerWrapper>
          </PurchaseFollowingWrapper>
        </JoinActionLeft>
        <JoinActionRight>
          <img src="/images/product.png" alt="" data-xblocker="passed"/>
        </JoinActionRight>
      </JoinActionWrapper>
    </JoinContent>
  )
}