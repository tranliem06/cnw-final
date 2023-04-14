import React from "react";
import { NavLink } from "react-router-dom";
import { IoAdd } from "react-icons/io5";

const DashboardService = () => {
  return (
    <div className="w-full h-full flex justify-center items-center gap-3">
      <span>Create New Services</span>

      <div>
        <NavLink
          to={"/dashboard/newservice"}
          className="flex items-center justify-center px-4 py-3 border rounded-md border-gray-300 hover:border-gray-400 hover:shadow-md cursor-pointer"
        >
          <IoAdd />
        </NavLink>
      </div>
    </div>
  );
};

export default DashboardService;
