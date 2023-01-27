import * as React from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { StyledStepper } from './StepperStyle';

const steps = [
  '1. Create Wallet',
  '2. Add Funds',
  '3. Join Prosper 247',
];

interface StartStepperProps {
  step: number
}

export default function StartStepper(props: StartStepperProps) {
  return (
    <StyledStepper>
      <Stepper activeStep={props.step} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </StyledStepper>
  );
}