import React from "react";
import { Home, Header } from ".";

const Public = () => {
  return (
    <div className=" w-full flex flex-col min-h-screen relative">
      <div className="w-full h-full flex flex-col flex-auto">
        <div className="w-full h-full flex flex-auto justify-center ">
          <div className="w-full flex justify-center">
            <Home />
          </div>
        </div>
      </div>
      <div className="absolute w-[900px] h-[900px] bg-gradient-to-l  from-[#eae4f8] to-[#f7f4fa] rounded-full top-0 right left-0 translate-x-[-40%]  translate-y-[-50%] -z-10"></div>
    </div>
  );
};

export default Public;
