import { FC } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { RiNotification3Line } from "react-icons/ri";
import { RxCalendar } from "react-icons/rx";
import { SidebarDashboard } from "../Component/DashSidebar";
//import { MainDashboardPage } from "../pages/MainDashboard";
import { useState } from "react";
import { CalenderModal } from "../OtherComponents/CalenderModal";
import { NotifyModal } from "../OtherComponents/NotificationModal";
import React from "react";
//import { NewTaskModal } from "../OtherComponents/NewTaskModal";

type TodoLayoutProps = {
  component: React.ReactNode;
};

export const TodoLayout: FC<TodoLayoutProps> = ({ component }) => {
  const [modalIsShowing, setModaltoShow] = useState<boolean>(false);
  const showModal = () => setModaltoShow(true);
  const hideModal = () => setModaltoShow(false);

  const [openedCalender, toSetCalenderToOpen] = useState<boolean>(false);
  const showCalender = () => toSetCalenderToOpen(true);
  const hideCalender = () => toSetCalenderToOpen(false);

  return (
    <div className="h-screen bg-slate-100">
      <div className="w-screen shadow-lg py-6 mb-6 flex bg-[#f8f8f8]">
        <div className="flex flex-row text-start text-xl pl-5 pt-2 font-extrabold w-1/6">
          <h2 className="text-red-400">To</h2>
          <h2>-Do</h2>
        </div>
        <div className=" flex-row border-shodow flex justify-center items-center w-4/6 rounded-md-transparent">
          <div className="w-10/12">
            <input
              className=" bg-slate-100 w-full focus:outline-none h-8 rounded-md"
              type="type"
              placeholder="search your task here..."
            />
          </div>
          <div className="bg-red-500 h-8 flex justify-center items-center  rounded-md w-[36px] text-white-100 text-md">
            <IoSearchOutline />
          </div>
        </div>
        <div className=" text-end justify-end w-1/6 items-end flex flex-row">
          <div className=" flex flex-row gap-2 pr-4">
            <div className="bg-red-500  rounded-md w-[36px] h-8 justify-center items-center flex text-white-100 text-md">
              <button onClick={showModal}>
                <RiNotification3Line />
              </button>
              {modalIsShowing && <NotifyModal onClose={hideModal} />}
            </div>
            <div className="bg-red-500 w-[36px] h-8 justify-center items-center flex rounded-md text-white-100 text-md">
              <button onClick={showCalender}>
                <RxCalendar />
                {openedCalender && <CalenderModal onClose={hideCalender} />}
              </button>
            </div>
          </div>
          <div className=" text-end items-end text-sm justify-end">
            <p className="text-blue-400">Tuesday</p>
            <p className="text-blue-500">20/06/2024</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-10">
        <div className=" border-shadow">
          <SidebarDashboard />
        </div>
        <div className="pl-10 h-screen border-2 mt-5 rounded-lg">
          {component}
        </div>
      </div>
    </div>
  );
};
