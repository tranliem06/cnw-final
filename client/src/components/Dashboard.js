import React from "react";
import { IoHome } from "react-icons/io5";
import { NavLink, Route, Routes } from "react-router-dom";

import {
  DashboardHome,
  DashboardNewService,
  DashboardService,
  DashboardUser,
  Header,
} from "./";

import { isActiveStyles, isNotActiveStyles } from "../utils/styles";

const Dashboard = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <div className="w-[60%] my-2 p-4 flex items-center justify-evenly">
        {/* prettier-ignore */}
        <NavLink to={"/dashboard/home"}><IoHome className="text-2xl text-textColor" /></NavLink>
        {/* prettier-ignore */}

        <NavLink to={"/dashboard/user"} className={({ isActive }) => isActive ? isActiveStyles : isNotActiveStyles }> Users </NavLink>

        {/* prettier-ignore */}
        <NavLink to={"/dashboard/service"} className={({ isActive }) => isActive ? isActiveStyles : isNotActiveStyles }> Services </NavLink>
      </div>

      <div className="my-4 w-full p-4">
        <Routes>
          <Route path="/home" element={<DashboardHome />} />
          <Route path="/user" element={<DashboardUser />} />
          <Route path="/service" element={<DashboardService />} />
          <Route path="/newservice" element={<DashboardNewService />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
