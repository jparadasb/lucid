import React from "react";

const TabItem = ({
  title,
  className,
  forwardedRef,
  onClick,
  eventKey,
  navigation,
  icon,
  classBuilder = () => {},
}) => {
  const c = classBuilder;
  return (
    <li
      className={className}
      role="presentation"
      key={`tablist-${eventKey}`}
      ref={forwardedRef}
    >
      <button
        className={c("__tabs_item__button")}
        onClick={onClick.bind(null, eventKey)}
        role="tab"
        tabIndex={navigation ? "-1" : "0"}
      >
        <div className={c("__tabs_item--label")}>
          {icon ? <div className={c("__tabs_item--icon")}>{icon}</div> : <></>}
          <div className={c("__tabs_item--title")}>{title}</div>
        </div>
      </button>
    </li>
  );
};

export default TabItem;
