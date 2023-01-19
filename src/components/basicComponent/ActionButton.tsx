import clsx from "clsx";
import './basicComponent.css';

interface ActionBtnProps {
  color: string;
  children?: React.ReactNode;
  className?: any;
  onClick?: () => void;
  disable?: boolean;
}

const ActionButton = ({
  children,
  className,
  color,
  onClick,
  disable,
}: ActionBtnProps) => {

  return (
    <>
      {disable ? (
        <div
          className={clsx('btn', className, {
            ['disabled-yellow-button']: color === "yellow",
            ['disabled-green-button']: color === "green",
            ['disabled-purple-button']: color === "purple",
          })}>
          {children}
        </div>
      ) : (
        <div
          className={clsx('btn', className, {
            ['yellow-button']: color === "yellow",
            ['green-button']: color === "green",
            ['purple-button']: color === "purple",
          })}
          onClick={onClick}>
          {children}
        </div>
      )}
    </>
  );
};

export default ActionButton;
