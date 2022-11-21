import { Sidebar } from "flowbite-react";
import React from "react";
import CollapseIcon from "../../icons/CollapseIcon";
import "./SideBarHeader.css";

const SideBarHeader = ({ isCollapsed, handleCollapse, isDarkMode }) => {
  return (
    <>
      <div
        className={`w-full ${
          isCollapsed ? "pl-0" : "pl-5"
        } flex justify-between items-center`}
      >
        <a
          href="/dashboard"
          className={`flex ${
            isDarkMode ? "text-white" : "text-black"
          } text-2xl font-bold cursor-pointer`}
        >
          {isCollapsed ? "E" : `ELEV`}
          <div className="color-blue">8</div>
        </a>
        <div className="pl-1 cursor-pointer" onClick={() => handleCollapse()}>
          <CollapseIcon isDarkMode={isDarkMode} isCollapsed={isCollapsed} />
        </div>
      </div>

      <Sidebar.Logo className="w-full no-padding-left">
        <div className="mt-7 mb-14">
          <div className="text-sm font-medium">Sierra Ferguson</div>
          <div className="text-xs font-medium text-slate-500">
            s.ferguson@gmail.com
          </div>
        </div>
      </Sidebar.Logo>
    </>
  );
};

export default SideBarHeader;
