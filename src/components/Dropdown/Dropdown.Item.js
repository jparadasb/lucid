import React from "react";

const DropdownItem = ({ children, eventKey, onClick, className, icon, classBuilder }) => {
  const c = classBuilder;
  return <li role="presentation" className={className}>
    <button
      className={c("__dropdown__button")}
      onClick={onClick.bind(null, eventKey)}
      role="tab"
    >
      {children}
      {icon}
    </button>
  </li>;
};

export default DropdownItem;