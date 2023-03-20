import React, {
  Children,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { direction } from "../../constants";
import { useClassName } from "../../helpers";
import { Dropdown } from "../";
import Nav from "./Tabs.Nav";
import TabItem from "./Tabs.Item";

const findIndexHandler =
  (activeTab) =>
  ({ props: { eventKey } }) =>
    eventKey === activeTab;

const Tabs = ({
  children,
  defaultActiveTab = null,
  showNavigation = false,
  grouping = false,
}) => {
  const componentName = "c-Tabs";
  const c = useClassName(componentName);
  const [activeTab, setActiveTab] = useState(defaultActiveTab);
  const [navCoordinates, setNavCoordinates] = useState({ width: 0 });
  const [toggleMenuCoordinates, setToggleMenuCoordinates] = useState({
    width: 0,
  });
  const [tabsHeight, setTabsHeight] = useState(0);
  const [isDisabled, setIsDisabled] = useState({
    forward: true,
    backward: false,
  });
  const tabsNavItemRefs = useRef({});
  const tabsRef = useRef(null);
  const tabsToggleMenuRef = useRef(null);
  const scrollNavRef = useRef(null);
  const tabItems = useMemo(
    () => Children.toArray(children).filter((child) => child.type === TabItem),
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
    const index = tabItems.findIndex(findIndexHandler(activeTab));
    if (index === tabItems.length - 1) {
      setIsDisabled({ forward: true, backward: false });
      return;
    }

    if (index === 0) {
      setIsDisabled({ forward: false, backward: true });
      return;
    }

    setIsDisabled({ forward: false, backward: false });
  }, [activeTab]);

  /**
   * This useEffect is used to handle the movement of the tabs
   * once the user select a tab that is not visible in the scroll navigation
   */
  useLayoutEffect(() => {
    const element = tabsNavItemRefs.current[activeTab];
    if (element) {
      const bounding = element.getBoundingClientRect();
      const parentBounding = element.parentElement.getBoundingClientRect();
      const overflowRightLimit =
        parentBounding.right - toggleMenuCoordinates.width;
      const overflowLeftLimit = parentBounding.left + navCoordinates.width;

      if (bounding.left < overflowLeftLimit) {
        const newPosition =
          element.parentNode.scrollLeft - (overflowLeftLimit - bounding.left);

        // this condition is used because the smooth behavior is not working properly when the scroll is at the end
        const behavior = newPosition > 1 ? "smooth" : "auto";

        element.parentNode.scrollTo({ left: newPosition, behavior });
        return;
      }

      // same idea as above but for the right side
      // taking the right position of the element and compare it with the start position of the toggle menu
      if (bounding.right > overflowRightLimit) {
        const newPosition =
          element.parentNode.scrollLeft + bounding.right - overflowRightLimit;

        const behavior =
          element.offsetLeft + element.offsetWidth <
          element.parentNode.scrollWidth
            ? "smooth"
            : "auto";

        element.parentNode.scrollTo({ left: newPosition, behavior });
        return;
      }
    }
  }, [activeTab]);

  const onClick = useCallback((key) => setActiveTab(key), []);
  const moveTo = useCallback(
    (action) => {
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
    (baseName, eventKey) => {
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

export default Tabs;
