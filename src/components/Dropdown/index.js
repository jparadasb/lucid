import caretDown from "../../assets/icons/caret-down.svg";
import React, { Children, useLayoutEffect, useMemo, useState } from "react";

import DropdownItem from "./Dropdown.Item";

const Dropdown = ({
  children,
  classBuilder,
  tabsHeight,
  forwardedRef,
  show,
  grouping,
}) => {
  const [open, setOpen] = useState(false);
  const toggleOnClick = () => setOpen(!open);
  const c = classBuilder;
  const items = useMemo(() => {
    const filteredChildren = Children.toArray(children).filter(
      (child) => child.type === DropdownItem
    );

    if (grouping) {
      return filteredChildren.reduce((acc, child) => {
        const { props } = child;
        const { eventKey, group } = props;

        if (group) {
          const groupIndex = acc.findIndex(
            ({ group: groupItem }) => groupItem === group
          );
          if (groupIndex === -1) {
            acc.push({ group, children: [child] });
          } else {
            acc[groupIndex].children.push(child);
          }
        } else {
          acc.push({ eventKey, children: [child] });
        }

        return acc;
      }, []);
    }

    return filteredChildren;
  }, [children]);

  const getStateClass = () => (open ? "__dropdown__container--open" : "");

  const handleOnClick = (onClick) => (eventKey) => {
    setOpen(false);
    onClick(eventKey);
  };

  if (!show) {
    return <></>;
  }

  /** listener to detect click outside this element */
  useLayoutEffect(() => {
    if (open) {
      const listener = (event) => {
        if (!forwardedRef.current.contains(event.target)) {
          setOpen(false);
        }
      };
      document.addEventListener("click", listener);
      return () => document.removeEventListener("click", listener);
    }
  }, [open]);

  return (
    <li
      className={c("__tabs_item", "__dropdown")}
      role="presentation"
      ref={forwardedRef}
      style={{ maxHeight: tabsHeight }}
    >
      <button
        id="tab-menu-items"
        className={c("__dropdown__toggle")}
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={toggleOnClick}
      >
        <img width={24} src={caretDown} />
      </button>
      <ul
        aria-labelledby="tab-menu-items"
        className={c("__dropdown__container", getStateClass())}
        style={{ top: tabsHeight }}
      >
        {grouping
          ? items.map(({ group, children }, index) => {
              return (
                <li key={`tab-menu-group-${group}-${index}`}>
                  <ul className={c("__dropdown__group")}>
                    <li className={c("__dropdown__group__title")}>{group}</li>
                    {children.map(({ props }) => (
                      <DropdownItem
                        key={`tab-menu-item-${props.eventKey}`}
                        {...props}
                        className={c("__dropdown__item")}
                        classBuilder={classBuilder}
                        onClick={handleOnClick(props.onClick)}
                      />
                    ))}
                  </ul>
                </li>
              );
            })
          : items.map(({ props }) => (
              <DropdownItem
                key={`tab-menu-item-${props.eventKey}`}
                {...props}
                className={c("__dropdown__item")}
                classBuilder={classBuilder}
                onClick={handleOnClick(props.onClick)}
              />
            ))}
      </ul>
    </li>
  );
};

Dropdown.Item = DropdownItem;

export default Dropdown;
