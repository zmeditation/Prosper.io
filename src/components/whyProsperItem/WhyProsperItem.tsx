import { WhyProsperItemContainer } from "./WhyPropserItemStyle"

interface WhyProsperItemProps {
  iconElement: React.ReactNode,
  title: string,
  content: string
}

export const WhyProsperItem = (props: WhyProsperItemProps) => {
  return (
    <WhyProsperItemContainer>
      {props.iconElement}
      <p className="whyprosper-item-large-text">{props.title}</p>
      <p className="whyprosper-item-small-text">{props.content}</p>
    </WhyProsperItemContainer>
  )
}