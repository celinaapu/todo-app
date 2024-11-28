import { FC } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { RiNotification3Line } from "react-icons/ri";
import { RxCalendar } from "react-icons/rx";
import { SidebarDashboard } from "./DashSidebar";
import { MainDashboardPage } from "../pages/MainDashboard";

export const DashboardWithModal: FC = () => {
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
              <RiNotification3Line />
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
      <div className="flex flex-row">
        <div className=" border-shadow">
          <SidebarDashboard />
        </div>
        <div className="pl-10 w-screen h-screen">
          <MainDashboardPage />
        </div>
      </div>
    </div>
  );
};
