import { StyledDeviceButton } from "./DeviceButtonStyle"

interface DeviceButtonProps {
  text: string,
  onClick: (str: string) => void,
  selected: boolean,
}

export const DeviceButton = (props: DeviceButtonProps) => {
  const {text, onClick, selected} = props;
  return (
    <StyledDeviceButton className={selected? "selected":""} onClick={()=>onClick(text)}>
      <span>{text}</span>
    </StyledDeviceButton>
  )
}