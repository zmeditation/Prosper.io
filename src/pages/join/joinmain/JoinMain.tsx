import React, { useState, useRef } from 'react'
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import { useNavigate } from 'react-router-dom';
import ActionButton from "../../../components/basicComponent/ActionButton";
import { JoinActionLeft, JoinActionRight, JoinActionWrapper, JoinContent, JoinDesc, JoinTitleWrapper, PurchaseFollowingWrapper, SpaceDiv8, PurchaseFollowingTitle, PurchaseFollowingList, PurchaseFollowingItem, PurchaseButtonWrapper, DisclaimerWrapper, AddInviterWrapper, InviterButton, InviterForm } from "./JoinMainStyle";

export const JoinMain = () => {
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
          JOIN PROSPER 247
        </p>
        Learn, Earn, and Prosper
      </JoinTitleWrapper>
      <JoinDesc>
        Everything with P247 is instant and immediate! As soon as you become a paid customer you will have immediate access to your educational products where you can begin learning today.
      </JoinDesc>
      <SpaceDiv8 />
      <JoinActionWrapper>
        <JoinActionLeft>
          <PurchaseFollowingWrapper>
            <PurchaseFollowingTitle>
              For <span>only $50</span>  you will get the following:
            </PurchaseFollowingTitle>
            <PurchaseFollowingList>
              <PurchaseFollowingItem>
                <span>E-Boook:</span>
                Blockchain for Dummies
              </PurchaseFollowingItem>
              <PurchaseFollowingItem>
                <span>Membership:</span>
                Immediate access to your educational products
              </PurchaseFollowingItem>
            </PurchaseFollowingList>
            <AddInviterWrapper>
              <InviterButton onClick={handleToggle} ref={anchorRef}>
                You need to add an inviter. Click here
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
              <ActionButton color="green" onClick={()=>navigate('/join')}>Purchase Now</ActionButton>
            </PurchaseButtonWrapper>
            <DisclaimerWrapper>
              By clicking the button above, I aknowledge that I have read and agree to the &nbsp;
              <a href="/income-disclaimer" target="_blank" rel="noopener noreferrer">Income Disclaimer</a>
            </DisclaimerWrapper>
          </PurchaseFollowingWrapper>
        </JoinActionLeft>
        <JoinActionRight>
          <img src="/images/join.png" alt="" data-xblocker="passed"/>
        </JoinActionRight>
      </JoinActionWrapper>
    </JoinContent>
  )
}