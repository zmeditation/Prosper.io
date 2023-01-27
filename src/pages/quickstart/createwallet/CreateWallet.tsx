import useEnhancedEffect from '@mui/material/utils/useEnhancedEffect';
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import ActionButton from '../../../components/basicComponent/ActionButton'
import { DeviceButton } from "../../../components/quickstart/devicebutton/DeviceButton"
import StartStepper from "../../../components/quickstart/step/Stepper"
import { StepCard } from "../../../components/quickstart/stepcard/StepCard"
import { Title } from "../../../components/quickstart/title/Title"
import { StyledCreateWallet, CreateMetaContainer, CreateMetaLeft, CreateMetaRight, SelectDeviceDesc, SelectDeviceButtonBox, MovieWrapper, MovieBox, MovieDesc, ActionContainer } from "./CreateWalletStyle"

export const CreateWallet = () => {
  const [selectedDevice, setSelectedDevice] = useState('')
  const [videoLink, setVideoLink] = useState('')
  const [videoTitle, setVideoTitle] = useState('')
  const navigate = useNavigate()

  const selectDevice = (str: string) => {
    setSelectedDevice(str)
  }
  const handleNextStep = () => {
    navigate('/quick-start/add-funds')
  }

  useEnhancedEffect(()=>{
    if(selectedDevice==="Mobile Deivce"){
      setVideoLink('https://www.youtube.com/embed/UWTeegx0CYQ');
      setVideoTitle('How To Setup Your MetaMask on Mobile');
    }else if(selectedDevice==="Computer") {
      setVideoLink('https://www.youtube.com/embed/7nJSUYRqTW4');
      setVideoTitle('How To Setup Your MetaMask on Desktop');
    }
  },[selectedDevice])
  return(
    <StyledCreateWallet>
      <Title/>
      <StartStepper step={0}/>
      <StepCard title="Step 1 - Create Wallet">
        <CreateMetaContainer>
          <CreateMetaLeft>
            <span>
              Create a MetaMask Wallet with BSC Network
            </span>
            <p>
              To gain access to the website, you will need a MetaMask Wallet. The tutorials below will guide you on how to set up the MetaMask Wallet on your computer or mobile device.
            </p>
          </CreateMetaLeft>
          <CreateMetaRight>
            <img src="/images/how-to-3.jpg" alt="" />
          </CreateMetaRight>
        </CreateMetaContainer>
        <SelectDeviceDesc>
          I am using a:
        </SelectDeviceDesc>
        <SelectDeviceButtonBox>
          <DeviceButton text="Computer" onClick={selectDevice} selected={selectedDevice==="Computer"}/>
          <DeviceButton text="Mobile Deivce" onClick={selectDevice} selected={selectedDevice==="Mobile Deivce"}/>
        </SelectDeviceButtonBox>
        <MovieWrapper className={selectedDevice==="" ? "show-none" : ""}>
          <MovieBox>
            <iframe
              width="560"
              height="315"
              src={videoLink}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={videoTitle}
            />
          </MovieBox>
          <MovieDesc>
            Once you have created your Metamask wallet and have added Smart Chain Network, proceed to purchasing BNB/BSC.
            <br/>
            This is the currency that is used to purchase your package in Prosper 247.
          </MovieDesc>
          <ActionContainer>
            <ActionButton color="green" onClick={handleNextStep}>Proceed to Next Step</ActionButton>
          </ActionContainer>
        </MovieWrapper>
      </StepCard>
    </StyledCreateWallet>
  )
}