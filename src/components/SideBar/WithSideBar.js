import { Sidebar } from "flowbite-react";
import React, { useEffect, useState } from "react";
import SideBarFooter from "./components/SideBarFooter/SideBarFooter";
import SideBarHeader from "./components/SideBarHeader/SideBarHeader";
import {
  SCHEMA,
  SIDEBAR_OPTION,
  SIDEBAR_COLLAPSED_STORAGE_KEY,
  THEME,
} from "./constants";
import "./WithSideBar.css";

const WithSideBar = ({ children, toggleTheme, isDarkMode }) => {
  const [isSideBarCollapsed, setIsSideBarCollapsed] = useState(false);
  const [isAnimationDisabled, setIsAnimationDisabled] = useState(true);
  const isCollapsed = localStorage.getItem(SIDEBAR_COLLAPSED_STORAGE_KEY);
  const isCollapsedBoolean = isCollapsed === SIDEBAR_OPTION.COLLAPSED;
  const resourceFromUrl = `/${window.location.pathname.split("/")?.[1]}`;
  const colorForIcons = isDarkMode
    ? THEME.dark.icon_color
    : THEME.light.icon_color;
  const classNameForText = isDarkMode ? "color-dark-gray" : "color-gray";

  useEffect(() => {
    if (isCollapsed) {
      setIsSideBarCollapsed(isCollapsedBoolean ? true : false);

      // We're using this to solve problem when animation works after page reloading
      Promise.resolve().then(() => setIsAnimationDisabled(false));
      return;
    }
    setIsSideBarCollapsed(false);

    // We're using this to solve problem when animation works after page reloading
    Promise.resolve().then(() => setIsAnimationDisabled(false));
    localStorage.setItem(
      SIDEBAR_COLLAPSED_STORAGE_KEY,
      SIDEBAR_OPTION.NOT_COLLAPSED
    );
  }, [isCollapsed, isCollapsedBoolean]);

  const handleCollapse = () => {
    if (isCollapsed) {
      setIsSideBarCollapsed(isCollapsedBoolean ? false : true);
      localStorage.setItem(
        SIDEBAR_COLLAPSED_STORAGE_KEY,
        isCollapsedBoolean
          ? SIDEBAR_OPTION.NOT_COLLAPSED
          : SIDEBAR_OPTION.COLLAPSED
      );
    }
  };

  return (
    <div className="flex">
      <div className="h-screen drop-shadow-2xl bg-white dark:bg-slate-700">
        <Sidebar
          aria-label="Default sidebar"
          collapseBehavior="collapse"
          collapsed={isSideBarCollapsed}
          style={{
            transition: `width ${
              isAnimationDisabled ? "0s" : "0.5s"
            } ease-in-out`,
          }}
        >
          <SideBarHeader
            isCollapsed={isSideBarCollapsed}
            handleCollapse={handleCollapse}
            isDarkMode={isDarkMode}
          />

          <Sidebar.Items
            className={`sidebar-items-height ${
              isSideBarCollapsed && "sidebar-items-collapsed"
            }`}
          >
            <Sidebar.ItemGroup className="h-full flex flex-col justify-between">
              <div>
                {SCHEMA.map((item, index) => {
                  return (
                    <Sidebar.Item
                      key={index}
                      href={item.href}
                      icon={() =>
                        item.icon(item.href === resourceFromUrl, colorForIcons)
                      }
                    >
                      <div
                        className={`${
                          item.href === resourceFromUrl
                            ? "color-blue"
                            : classNameForText
                        } text-sm font-medium`}
                      >
                        {item.title}
                      </div>
                    </Sidebar.Item>
                  );
                })}
              </div>

              <SideBarFooter
                toggleTheme={toggleTheme}
                isDarkMode={isDarkMode}
              />
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>

      <div className="bg-slate-50 w-full">{children}</div>
    </div>
  );
};

export default WithSideBar;
