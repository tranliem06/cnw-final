import React, { useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";

import { BiCloudUpload } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

// import { useStateValue } from "../Context/StateProvider";
// import {} from "../api";
// import { actionType } from "../Context/reducer";
import { IoMusicalNote } from "react-icons/io5";
// import AlertSuccess from "./AlertSuccess";
// import AlertError from "./AlertError";

const DashboardNewService = () => {
  //   const [setAlert, setSetAlert] = useState(null);
  //   const [alertMsg, setAlertMsg] = useState("");
  //   const [uploadProgress, setUploadProgress] = useState(0);

  //   const [isAudioLoading, setIsAudioLoading] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center p-4  rounded-md gap-4">
      <span>Create New Service</span>
      <div className="flex flex-col items-center justify-center gap-4 mt-4">
        <input
          type="text"
          placeholder="Service Name"
          className="w-full lg:w-300 p-3 rounded-md text-base font-semibold text-textColor outline-none shadow-sm border-2 border-primarycolor bg-transparent"
          //   value={serviceName}
          //   onChange={(e) => setServiceName(e.target.value)}
        />

        <div className="w-full lg:w-300 p-3 flex items-center rounded-md  shadow-sm border-2 border-primarycolor">
          <input
            type="number"
            placeholder="Price"
            className="w-full text-base font-semibold text-textColor outline-none bg-transparent"
            // value={price}
            // onChange={(e) => setTwitter(e.target.value)}
          />
        </div>

        <input
          type="text"
          placeholder="PictureUrl"
          className="w-full lg:w-300 p-3 rounded-md text-base font-semibold text-textColor outline-none shadow-sm border-2 border-primarycolor bg-transparent"
          //   value={pictureUrl}
          //   onChange={(e) => setPictureUrl(e.target.value)}
        />

        <div className="w-full bg-primarycolor p-4 text-white flex justify-center items-center rounded-lg">
          <span>Save</span>
        </div>
      </div>

      {/* {alert && (
        <>
          {alert === "success" ? (
            <AlertSuccess msg={alertMsg} />
          ) : (
            <AlertError msg={alertMsg} />
          )}
        </>
      )} */}
    </div>
  );
};

export default DashboardNewService;
