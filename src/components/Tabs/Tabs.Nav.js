import caretLeft from "../../assets/icons/caret-left.svg";
import caretRight from "../../assets/icons/caret-right.svg";
import React from "react";

import { direction } from "../../constants";
const Nav = ({
  className,
  moveTo,
  forwardedRef,
  show,
  classBuilder,
  disabledForward,
  disabledBackward,
}) => {
  const c = classBuilder;

  if (!show) {
    return <></>;
  }
  return (
    <li className={className} role="presentation" ref={forwardedRef}>
      <button
        className={c("__scroll_buttons", "__scroll_buttons--active")}
        aria-hidden="true"
        aria-label="Scroll left"
        onClick={() => moveTo(direction.BACKWARD)}
        disabled={disabledBackward}
      >
        <img width={24} src={caretLeft} />
      </button>
      <button
        className={c("__scroll_buttons", "__scroll_buttons--active")}
        aria-hidden="true"
        aria-label="Scroll right"
        onClick={() => moveTo(direction.FORWARD)}
        disabled={disabledForward}
      >
        <img width={24} src={caretRight} />
      </button>
    </li>
  );
};

export default Nav;
