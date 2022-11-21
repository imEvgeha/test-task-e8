import { Sidebar } from "flowbite-react";
import React from "react";
import LogOutIcon from "../../../../icons/LogOutIcon";
import ModeIcon from "../../../../icons/ModeIcon";
import "./SideBarFooter.css";

const SideBarFooter = ({ toggleTheme, isDarkMode }) => {
  return (
    <div>
      <Sidebar.Item
        onClick={() => toggleTheme()}
        icon={() => <ModeIcon isDarkMode={isDarkMode} />}
        className="side-bar-item cursor-pointer"
      >
        <div
          className={`${
            isDarkMode ? "dark-mode" : "light-mode"
          } text-sm font-medium`}
        >
          {`${isDarkMode ? "Light" : "Dark"} Mode`}
        </div>
      </Sidebar.Item>

      <Sidebar.Item
        onClick={() => null}
        icon={() => <LogOutIcon />}
        className="side-bar-item cursor-pointer"
      >
        <div
          className={`${
            isDarkMode ? "dark-mode" : "light-mode"
          } text-sm font-medium`}
        >
          Log Out
        </div>
      </Sidebar.Item>
    </div>
  );
};

export default SideBarFooter;
