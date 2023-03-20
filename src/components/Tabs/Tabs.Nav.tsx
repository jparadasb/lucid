import caretLeft from "../../assets/icons/caret-left.svg";
import caretRight from "../../assets/icons/caret-right.svg";
import React, { FunctionComponent, RefObject } from "react";
import { classBuilderType } from "../../helpers";

import { direction } from "../../constants";

type NavProps = {
  className: string;
  moveTo: (direction: string) => void;
  forwardedRef: RefObject<HTMLLIElement>;
  show: boolean;
  classBuilder: classBuilderType;
  disabledForward: boolean;
  disabledBackward: boolean;
};

const Nav: FunctionComponent<NavProps> = ({
  className,
  moveTo,
  forwardedRef,
  show,
  classBuilder,
  disabledForward,
  disabledBackward,
}: NavProps) => {
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
        <img width={24} src={caretLeft} alt="caret left icon" />
      </button>
      <button
        className={c("__scroll_buttons", "__scroll_buttons--active")}
        aria-hidden="true"
        aria-label="Scroll right"
        onClick={() => moveTo(direction.FORWARD)}
        disabled={disabledForward}
      >
        <img width={24} src={caretRight} alt="caret right icon" />
      </button>
    </li>
  );
};

export default Nav;
