import { StyledStepCard, CardContainer, CardTitleContent } from "./StepCardStyle"


interface StepCardProps {
  title: string,
  children: React.ReactNode
}

export const StepCard = (props: StepCardProps) => {
  return (
    <StyledStepCard>
      <CardContainer>
        <CardTitleContent>
          <span>{props.title}</span>
        </CardTitleContent>
        {props.children}
      </CardContainer>
    </StyledStepCard>
  )
}