import { MoreListItemContainer } from "./MoreListItemStyle"
import CheckIcon from '@mui/icons-material/Check';

interface MoreListItemProps {
  title: string,
  content: string
}

export const MoreListItem = (props: MoreListItemProps) => {
  return (
    <MoreListItemContainer>
      <CheckIcon className="morelist-check-icon"/>
      <span className="morelist-item-large-text">{props.title}</span>
      -&nbsp;
      {props.content}
    </MoreListItemContainer>
  )
}