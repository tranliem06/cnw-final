import React from "react";
import { MdOutlineAttachMoney } from "react-icons/md";
import { BsFillCartFill } from "react-icons/bs";

const AllServices = () => {
  return (
    // <Scrollbars style={{ width: "100%", height: "100%" }}>
    <div className="w-full max-w-[1300px] h-full  flex flex-col justify-center items-center gap-[50px] flex-wrap mt-[10px] mb-[100px] p-4 ">
      <span>All services</span>
      <div className="flex justify-center items-center flex-wrap gap-10">
        <div className="flex flex-col gap-3 flex-auto justify-start w-1/5 text-sm cursor-pointer rounded-[30px] rounded-b-lg shadow-md overflow-hidden h-[500px]">
          <div className="w-full overflow-hidden h-[50%] object-top">
            <div className="overflow-hidden w-full">
              <img
                src="https://images.pexels.com/photos/15062131/pexels-photo-15062131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="avatar"
                className="w-full  "
              />
            </div>
          </div>
          <div className="flex flex-col p-4">
            <div className="flex place-content-between">
              <div className="w-1/4 justify-star bg-blue-500 rounded-lg p-1 text-white flex justify-center items-center">
                <span className="items-start">cooking</span>
              </div>
              <span className="flex justify-center items-center">
                <span className="text-[24px] font-bold text-textColor">58</span>
                {<MdOutlineAttachMoney className="text-2xl text-textColor" />}
              </span>
            </div>
            <div className="flex flex-col mt-4 gap-2">
              <span className="text-[30px] text-textColor font-semibold">
                <span>Service Name</span>
              </span>
              <span className="text-[16px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate accusamus dolores quaerat distinctio cumque neque
                inventore accusantium delectus provident nam.
              </span>
            </div>
            <div className="flex w-full mt-4 rounded-lg overflow-hidden ">
              <div className="bg-[#86c84a] text-white flex justify-center items-center w-[70%] ">
                Explore Now
              </div>
              <div className="w-[30%] bg-[#369ce1] p-4 flex justify-center items-center overflow-hidden">
                {<BsFillCartFill className="text-3xl text-white" />}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 flex-auto justify-start w-1/5 text-sm cursor-pointer rounded-[30px] rounded-b-lg shadow-md overflow-hidden h-[500px]">
          <div className="w-full overflow-hidden h-[50%] object-top">
            <div className="overflow-hidden w-full">
              <img
                src="https://images.pexels.com/photos/15062131/pexels-photo-15062131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="avatar"
                className="w-full  "
              />
            </div>
          </div>
          <div className="flex flex-col p-4">
            <div className="flex place-content-between">
              <div className="w-1/4 justify-star bg-blue-500 rounded-lg p-1 text-white flex justify-center items-center">
                <span className="items-start">cooking</span>
              </div>
              <span className="flex justify-center items-center">
                <span className="text-[24px] font-bold text-textColor">58</span>
                {<MdOutlineAttachMoney className="text-2xl text-textColor" />}
              </span>
            </div>
            <div className="flex flex-col mt-4 gap-2">
              <span className="text-[30px] text-textColor font-semibold">
                <span>Service Name</span>
              </span>
              <span className="text-[16px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate accusamus dolores quaerat distinctio cumque neque
                inventore accusantium delectus provident nam.
              </span>
            </div>
            <div className="flex w-full mt-4 rounded-lg overflow-hidden ">
              <div className="bg-[#86c84a] text-white flex justify-center items-center w-[70%] ">
                Explore Now
              </div>
              <div className="w-[30%] bg-[#369ce1] p-4 flex justify-center items-center overflow-hidden">
                {<BsFillCartFill className="text-3xl text-white" />}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 flex-auto justify-start w-1/5 text-sm cursor-pointer rounded-[30px] rounded-b-lg shadow-md overflow-hidden h-[500px]">
          <div className="w-full overflow-hidden h-[50%] object-top">
            <div className="overflow-hidden w-full">
              <img
                src="https://images.pexels.com/photos/15062131/pexels-photo-15062131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="avatar"
                className="w-full  "
              />
            </div>
          </div>
          <div className="flex flex-col p-4">
            <div className="flex place-content-between">
              <div className="w-1/4 justify-star bg-blue-500 rounded-lg p-1 text-white flex justify-center items-center">
                <span className="items-start">cooking</span>
              </div>
              <span className="flex justify-center items-center">
                <span className="text-[24px] font-bold text-textColor">58</span>
                {<MdOutlineAttachMoney className="text-2xl text-textColor" />}
              </span>
            </div>
            <div className="flex flex-col mt-4 gap-2">
              <span className="text-[30px] text-textColor font-semibold">
                <span>Service Name</span>
              </span>
              <span className="text-[16px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate accusamus dolores quaerat distinctio cumque neque
                inventore accusantium delectus provident nam.
              </span>
            </div>
            <div className="flex w-full mt-4 rounded-lg overflow-hidden ">
              <div className="bg-[#86c84a] text-white flex justify-center items-center w-[70%] ">
                Explore Now
              </div>
              <div className="w-[30%] bg-[#369ce1] p-4 flex justify-center items-center overflow-hidden">
                {<BsFillCartFill className="text-3xl text-white" />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </Scrollbars>
  );
};

// export const ServiceCard = (imgUrl, serviceName, servicePrice, serviceDes) => {
//   return (
//     <div
//       // onClick={() => {
//       //   navigate(link?.split(".")[0], { state: { playAlbum: false } });
//       // }}
//       className="flex flex-col gap-3 flex-auto justify-start w-1/5 text-sm cursor-pointer"
//     >
//       <div className="w-full relative overflow-hidden rounded-lg">
//         <div className="overflow-hidden">
//           <img
//             ref={imgUrl}
//             // src={thumbnailM}
//             alt="avatar"
//             className="w-full h-auto rounded-lg hover:scale-125"
//           />
//         </div>
//       </div>
//       <span className="flex flex-col">
//         <span className="text-[12px] font-semibold">
//           {serviceName?.length > 20
//             ? serviceName.slice(0, 20) + "..."
//             : serviceName}
//         </span>
//         {/* {data? ( */}
//         <span>{serviceName}</span>
//         {/* ) : ( */}
//         <span className="text-[12px]">
//           {serviceDes?.length >= 40
//             ? `${serviceDes?.slice(0, 40)}...`
//             : serviceDes}
//         </span>
//         {/* )} */}
//         <span>
//             prices
//         </span>
//       </span>
//     </div>
//   );
// };
export default AllServices;
