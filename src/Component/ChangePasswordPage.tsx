import { FC } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { RiNotification3Line } from "react-icons/ri";
import { RxCalendar } from "react-icons/rx";
import { SidebarDashboard } from "./DashSidebar";
//import { MainDashboardPage } from "./MainDashboard";

import MyOwnPhoto from "../assets/images/MyProfile.jpg";
import { useState } from "react";
import { NotifyModal } from "../OtherComponents/NotificationModal";

export const ChangePassword: FC = () => {
  const [modalIsShowing, setModaltoShow] = useState<boolean>(false);
  const showModal = () => setModaltoShow(true);
  const hideModal = () => setModaltoShow(false);

  return (
    <div className="h-screen bg-slate-100">
      <div className="w-screen shadow-lg py-6 mb-6 flex bg-[#f8f8f8]">
        <div className="flex flex-row text-start text-xl pl-5 pt-2 font-extrabold w-1/6">
          <h2 className="text-red-400">Dash</h2>
          <h2>board</h2>
        </div>
        <div className=" flex-row border-shodow flex justify-center items-center w-4/6 rounded-md-transparent">
          <div className="w-10/12">
            <input
              className=" bg-slate-100 w-full h-8 rounded-md"
              type="type"
              placeholder="search your task here..."
            />
          </div>
          <div className="bg-red-500 h-8 flex justify-center items-center  rounded-md w-[36px] text-white text-md">
            <IoSearchOutline />
          </div>
        </div>
        <div className=" text-end justify-end w-1/6 items-end flex flex-row">
          <div className=" flex flex-row gap-2 pr-4">
            <div className="bg-red-500  rounded-md w-[36px] h-8 justify-center items-center flex text-white text-md">
              <button onClick={showModal}>
                <RiNotification3Line />
              </button>
              {modalIsShowing && <NotifyModal onClose={hideModal} />}
            </div>
            <div className="bg-red-500 w-[36px] h-8 justify-center items-center flex rounded-md text-white text-md">
              <RxCalendar />
            </div>
          </div>
          <div className=" text-end items-end text-sm justify-end">
            <p>Saturday</p>
            <p className="text-blue-500">11/09/2024</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-10">
        <div className=" border-shadow">
          <SidebarDashboard />
        </div>
        <div className="w-screen h-screen border-4 p-4  mt-6 rounded-md border-shadow">
          <div className="font-bold flex flex-row w-[100%] mb-2">
            <div className="w-[85%] text-[12px]">
              <p>
                <span className="underline decoration-red-500">Change</span>
                <span className="underline decoration-red-500 ml-1">P</span>
                assword
              </p>
            </div>
            <div className="underline text-[12px]">
              <p>Go Back </p>
            </div>
          </div>
          <div className="flex flex-row gap-1">
            <div className="w-12 h-12 rounded-full border border-white">
              <img className="rounded-full" src={MyOwnPhoto} />
            </div>
            <div className="items-center pt-2">
              <p className="text-[10px] font-bold">amanuel</p>
              <p className="text-[8px]">amanuel@gmail.com</p>
            </div>
          </div>
          <div className=" w-[90%] h-[80%] border-2 rounded-lg m-5 borer-shadow ">
            <div className="w-[65%] pl-4 pt-5">
              <div className="flex flex-col">
                <label className="text-[12px] pt-2 pb-1 font-semibold">
                  Current Password
                </label>
                <input
                  type="Password"
                  className="focus:border-gray-300 h-8 rounded-md border-shadow border-2 border-gray-300"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-[12px] pt-2 pb-1 font-semibold">
                  New Password
                </label>
                <input
                  type="password"
                  className="focus:border-gray-300 h-8 rounded-md border-shadow border-2 border-gray-300"
                />
              </div>
              <div className=" flex flex-col ">
                <label className="text-[12px] pt-2 pb-1 font-semibold">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="focus:border-gray-300 h-8 rounded-md border-shadow border-2 border-gray-300"
                />
              </div>
            </div>
            <div className="flex pl-4 gap-3 flex-row text-[10px] text-white mt-5">
              <button className="bg-red-500 w-40 h-6 rounded-md">
                Update Password
              </button>
              <button className="bg-red-500 w-28 h-6 text-white rounded-md">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
