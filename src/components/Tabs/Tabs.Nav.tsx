import { Icon } from "../Icon";
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
        <Icon name="caret-left" size={24} />
      </button>
      <button
        className={c("__scroll_buttons", "__scroll_buttons--active")}
        aria-hidden="true"
        aria-label="Scroll right"
        onClick={() => moveTo(direction.FORWARD)}
        disabled={disabledForward}
      >
        <Icon name="caret-right" size={24} />
      </button>
    </li>
  );
};

export default Nav;
