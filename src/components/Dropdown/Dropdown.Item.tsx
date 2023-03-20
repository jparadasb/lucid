import React, { ReactNode } from "react";

export interface IDropdownItemProps {
  children: ReactNode;
  eventKey: string;
  onClick: (eventKey: string) => void;
  className?: string;
  icon?: ReactNode;
  classBuilder: any;
}

const DropdownItem = ({
  children,
  eventKey,
  onClick,
  className = "",
  icon,
  classBuilder,
}: IDropdownItemProps) => {
  const c = classBuilder;
  return (
    <li role="presentation" className={className}>
      <button
        className={c("__dropdown__button")}
        onClick={() => onClick(eventKey)}
        role="tab"
      >
        {children}
        {icon}
      </button>
    </li>
  );
};

export default DropdownItem;
