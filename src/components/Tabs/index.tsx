import React, {
  Children,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  FC,
} from "react";

import "./Tabs.scss";

import { direction } from "../../constants";
import { useClassName, classBuilderType } from "../../helpers";
import { Dropdown } from "../Dropdown";
import Nav from "./Tabs.Nav";
import TabItem from "./Tabs.Item";

const findIndexHandler =
  (activeTab: string) =>
  ({ props: { eventKey } }: any) =>
    eventKey === activeTab;

export interface ITabsProps {
  children: React.ReactNode;
  defaultActiveTab?: string | null;
  showNavigation?: boolean;
  grouping?: boolean;
  componentName?: string;
}

export const Tabs = ({
  children,
  defaultActiveTab = null,
  showNavigation = false,
  grouping = false,
  componentName = "c-Tabs",
}: ITabsProps) => {
  const c: classBuilderType = useClassName(componentName);
  const [activeTab, setActiveTab] = useState<string | null>(defaultActiveTab);
  const [navCoordinates, setNavCoordinates] = useState<{ width: number }>({
    width: 0,
  });
  const [toggleMenuCoordinates, setToggleMenuCoordinates] = useState<{
    width: number;
  }>({ width: 0 });
  const [tabsHeight, setTabsHeight] = useState<number>(0);
  const [isDisabled, setIsDisabled] = useState<{
    forward: boolean;
    backward: boolean;
  }>({
    forward: true,
    backward: false,
  });
  const tabsNavItemRefs = useRef<{ [key: string]: HTMLElement }>({});
  const tabsRef = useRef<HTMLUListElement>(null);
  const tabsToggleMenuRef = useRef<HTMLLIElement>(null);
  const scrollNavRef = useRef<HTMLLIElement>(null);

  const tabItems = useMemo(
    () =>
      Children.toArray(children).filter((child) => {
        if (typeof child === "string" || typeof child === "number") {
          return false;
        }

        if (!child) {
          return false;
        }

        return child && child.type === TabItem;
      }),
    [children]
  );

  useLayoutEffect(() => {
    const scrollNavElement = scrollNavRef.current;
    const tabsElement = tabsRef.current;
    const tabsToggleMenuElement = tabsToggleMenuRef.current;

    const newNavWidth = scrollNavElement?.offsetWidth || 0;
    const newToggleMenuWidth = tabsToggleMenuElement?.offsetWidth || 0;

    setTabsHeight(tabsElement?.offsetHeight || 0);
    setNavCoordinates({ width: newNavWidth });
    setToggleMenuCoordinates({ width: newToggleMenuWidth });
  }, []);

  useEffect(() => {
    const index = tabItems.findIndex((child) => {
      return child.props.eventKey === activeTab;
    });

    if (index === tabItems.length - 1) {
      setIsDisabled({ forward: true, backward: false });
      return;
    }

    if (index === 0) {
      setIsDisabled({ forward: false, backward: true });
      return;
    }

    setIsDisabled({ forward: false, backward: false });
  }, [activeTab, tabItems]);

  /**
   * This useEffect is used to handle the movement of the tabs
   * once the user select a tab that is not visible in the scroll navigation
   */
  useLayoutEffect(() => {
    if (!activeTab) {
      return;
    }

    const element = tabsNavItemRefs.current[activeTab];

    if (element && element.parentElement) {
      const bounding = element.getBoundingClientRect();
      const parentBounding = element.parentElement.getBoundingClientRect();
      const overflowRightLimit =
        parentBounding.right - toggleMenuCoordinates.width;
      const overflowLeftLimit = parentBounding.left + navCoordinates.width;

      if (bounding.left < overflowLeftLimit) {
        const newPosition =
          element.parentElement!.scrollLeft -
          (overflowLeftLimit - bounding.left);

        // this condition is used because the smooth behavior is not working properly when the scroll is at the end
        const behavior = newPosition > 1 ? "smooth" : "auto";
        // TODO: validate parentNode works after changed by parentElement
        element.parentElement!.scrollTo({ left: newPosition, behavior });
        return;
      }
    }
  }, [activeTab]);

  const onClick = useCallback((key: string) => setActiveTab(key), []);
  const moveTo = useCallback(
    (action: string) => {
      const index = tabItems.findIndex(findIndexHandler(activeTab));
      switch (action) {
        case direction.FORWARD: {
          if (index < tabItems.length - 1) {
            setActiveTab(tabItems[index + 1].props.eventKey);
          }
          return;
        }
        case direction.BACKWARD: {
          if (index > 0) {
            setActiveTab(tabItems[index - 1].props.eventKey);
          }
          return;
        }
        default:
          return;
      }
    },
    [activeTab, tabItems]
  );

  const getStatusClass = useCallback(
    (baseName: string, eventKey: string) => {
      if (eventKey !== activeTab) {
        return "";
      }
      return baseName + "--active";
    },
    [activeTab]
  );

  return (
    <div className={componentName}>
      <ul
        role="tablist"
        className={c("__tabs_nav")}
        ref={tabsRef}
        style={{ marginRight: toggleMenuCoordinates.width }}
      >
        <Nav
          forwardedRef={scrollNavRef}
          moveTo={moveTo}
          disabledForward={isDisabled.forward}
          disabledBackward={isDisabled.backward}
          classBuilder={c}
          className={c("__tabs_item", "__scroll_nav")}
          show={showNavigation}
        />
        {tabItems.map(({ props }) => (
          <TabItem
            {...props}
            key={`tablist-${props.eventKey}`}
            navigation={showNavigation}
            classBuilder={c}
            className={c(
              "__tabs_item",
              getStatusClass("__tabs_item", props.eventKey)
            )}
            forwardedRef={(e) => (tabsNavItemRefs.current[props.eventKey] = e)}
            onClick={onClick}
          />
        ))}
        <Dropdown
          classBuilder={c}
          tabsHeight={tabsHeight}
          forwardedRef={tabsToggleMenuRef}
          show={showNavigation}
          grouping={grouping}
        >
          {tabItems.map(({ props }) => {
            return (
              <Dropdown.Item
                {...props}
                key={`dropdown-item-${props.eventKey}`}
                eventKey={props.eventKey}
                onClick={onClick}
              >
                {props.title}
              </Dropdown.Item>
            );
          })}
        </Dropdown>
      </ul>
      <div>
        {tabItems.map(({ props: { eventKey, children } }) => {
          return (
            <div
              className={c("__content", getStatusClass("__content", eventKey))}
              role="tabpanel"
              key={`tabpane-${eventKey}`}
            >
              {children}
            </div>
          );
        })}
      </div>
    </div>
  );
};

Tabs.Item = TabItem;
