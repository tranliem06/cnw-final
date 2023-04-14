import { bgColors } from "../utils/styles";

import React, { useEffect } from "react";
import { FaUsers, FaServicestack } from "react-icons/fa";
// import { getAllUsers, getAllServices } from "../api";
// import { actionType } from "../Context/reducer";
// import { useStateValue } from "../Context/StateProvider";

export const DashboardCard = ({ icon, name, count }) => {
  const bg_color = bgColors[parseInt(Math.random() * bgColors.length)];

  return (
    <div
      style={{ background: `${bg_color}` }}
      className={`p-4 w-40 gap-3 h-auto rounded-lg shadow-md flex flex-col items-center justify-center`}
    >
      {icon}
      <p className="text-xl text-textColor font-semibold">{name}</p>
      <p className="text-sm text-textColor">{count}</p>
    </div>
  );
};

const DashboardHome = () => {
  //   const [{ allUsers, allServices }, dispatch] = useStateValue();
  useEffect(() => {
    // if (!allUsers) {
    //   getAllUsers().then((data) => {
    //     dispatch({
    //       type: actionType.SET_ALL_USERS,
    //       allUsers: data.data,
    //     });
    //   });
    // }
    // if (!allServices) {
    //   getAllSongs().then((data) => {
    //     dispatch({
    //       type: actionType.SET_ALL_SERVICES,
    //       allServices: data.data,
    //     });
    //   });
    // }
  }, []);

  return (
    <div className="w-full p-6 flex items-center justify-evenly flex-wrap">
      {/* prettier-ignore */}
      {/* <DashboardCard icon={<FaUsers className="text-3xl text-textColor" />} name={"Users"} count={allUsers?.length > 0 ? allUsers?.length : 0} /> */}
      <DashboardCard
        icon={<FaUsers className="text-3xl text-textColor" />}
        name={"Users"}
      />

      {/* prettier-ignore */}
      {/* <DashboardCard icon={<GiLoveSong className="text-3xl text-textColor" />} name={"Songs"} count={allServices?.length > 0 ? allServices?.length : 0} /> */}
      <DashboardCard
        icon={<FaServicestack className="text-3xl text-textColor" />}
        name={"Services"}
      />
    </div>
  );
};

export default DashboardHome;
