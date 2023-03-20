import caretDown from "../../assets/icons/caret-down.svg";
import React, {
  Children,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import DropdownItem, { IDropdownItemProps } from "./Dropdown.Item";

export interface IDropdownProps {
  children: React.ReactNode;
  classBuilder: (className: string) => string;
  tabsHeight?: number;
  forwardedRef?: React.RefObject<HTMLLIElement>;
  show: boolean;
  grouping?: boolean;
}

export interface IDropdownGroup {
  group?: string;
  eventKey?: string;
  children: JSX.Element[];
}

export const Dropdown = ({
  children,
  classBuilder,
  tabsHeight,
  forwardedRef,
  show,
  grouping,
}: IDropdownProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const toggleOnClick = () => setOpen((prevOpen) => !prevOpen);
  const c = classBuilder;
  const items = useMemo<IDropdownGroup[]>(() => {
    const filteredChildren = Children.toArray(children).filter(
      (child) => child && child.type === DropdownItem
    ) as JSX.Element[];

    if (grouping) {
      return filteredChildren.reduce<IDropdownGroup[]>((acc, child) => {
        const { props } = child as JSX.Element & { props: IDropdownItemProps };
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

    return filteredChildren.map<IDropdownGroup>((child) => ({
      eventKey: child.props.eventKey,
      children: [child],
      props: child.props,
    }));
  }, [children, grouping]);

  const getStateClass = () => (open ? "__dropdown__container--open" : "");

  const handleOnClick =
    (onClick: IDropdownItemProps["onClick"]) => (eventKey: string) => {
      setOpen(false);
      onClick?.(eventKey);
    };

  if (!show) {
    return <></>;
  }

  /** listener to detect click outside this element */
  useLayoutEffect(() => {
    if (open) {
      const listener = (event: MouseEvent) => {
        if (
          forwardedRef.current &&
          !forwardedRef.current.contains(event.target as Node)
        ) {
          setOpen(false);
        }
      };
      document.addEventListener("click", listener);
      return () => document.removeEventListener("click", listener);
    }
  }, [forwardedRef, open]);

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
        <img width={24} src={caretDown} alt="" />
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
