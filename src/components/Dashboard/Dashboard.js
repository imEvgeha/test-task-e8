import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="flex columns-2 h-full p-7 bg-slate-100 dark:bg-slate-700">
      <div className="w-full rounded bg-white dark:bg-slate-800 drop-shadow-xl mr-3"></div>
      <div className="flex flex-col w-full drop-shadow-xl ml-3">
        <div className="h-full rounded bg-white dark:bg-slate-800 mb-3"></div>
        <div className="h-full rounded bg-white dark:bg-slate-800 mt-3"></div>
      </div>
    </div>
  );
};

export default Dashboard;
