import React, { useEffect, useState } from "react";
import { AiOutlineClear } from "react-icons/ai";
import { motion } from "framer-motion";
// import { getAllUsers } from "../api";
// import { actionType } from "../Context/reducer";
// import { useStateValue } from "../Context/StateProvider";
import DashboardUserCard from "./DashboardUserCard";

const DashboardUser = () => {
  const [users, setUsers] = useState([]);

  const getAllUsers = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("No token found in local storage.");
    }
    try {
      const response = await fetch("http://localhost:8080/api/v1/users", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!response.ok) {
        throw new Error("Failed to get users.");
      }
      const data = await response.json();
      setUsers(data.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getAllUsers();
  }, [])

  return (
    <div className="w-full p-4 flex items-center justify-center flex-col">
      <div className="relative w-full py-12 min-h-[400px] overflow-x-scroll scrollbar-thin scrollbar-track-slate-300 scrollbar-thumb-slate-400 my-4 flex flex-col items-center justify-start p-4 border border-gray-300 rounded-md gap-3">
        <div className="absolute top-4 left-4">
          <p className="text-xl font-bold">
            <span className="text-sm font-semibold text-textColor">
              Count :{" "}
            </span>
            {/* {filtereUsers ? filtereUsers?.length : allUsers?.length} */}
            10
          </p>
        </div>

        <div className="w-full min-w-[750px] flex items-center justify-between">
          {/* prettier-ignore */}
          <p className="text-sm text-textColor font-semibold w-275 min-w-[160px] text-center">Username</p>
          {/* prettier-ignore */}
          <p className="text-sm text-textColor font-semibold w-275 min-w-[160px] text-center">Password</p>
          {/* prettier-ignore */}
          <p className="text-sm text-textColor font-semibold w-275 min-w-[160px] text-center">Age</p>
          {/* prettier-ignore */}
          <p className="text-sm text-textColor font-semibold w-275 min-w-[160px] text-center">Phone</p>
          {/* prettier-ignore */}
          <p className="text-sm text-textColor font-semibold w-275 min-w-[160px] text-center">Address</p>
          {/* prettier-ignore */}
          <p className="text-sm text-textColor font-semibold w-275 min-w-[160px] text-center">Created</p>
          {/* prettier-ignore */}
          <p className="text-sm text-textColor font-semibold w-275 min-w-[160px] text-center">Role</p>{" "}
        </div>
            {
              users.map((value, index) => (
                <DashboardUserCard data={value} key={value._id} index={index}></DashboardUserCard>
              ))
            }
      </div>
    </div>
  );
};

export default DashboardUser;
