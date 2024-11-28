import { FC } from "react";
import MyOwnPhoto from "../assets/images/MyProfile.jpg";
import { MdOutlineDashboard } from "react-icons/md";
import { BiTask } from "react-icons/bi";
import { FaTasks } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import { BsExclamationLg } from "react-icons/bs";
import { SidebarButton } from "./SidebarButton";

export const SidebarDashboard: FC = () => {
  return (
    <div className="w-64">
      <div className="w-full flex justify-center">
        <div className="w-12 h-12 rounded-full border border-white z-10  ">
          <img className="rounded-full" src={MyOwnPhoto} />
        </div>
      </div>
      <div className="flex-col text-white bg-black h-screen rounded-lg -mt-6">
        <div className="pt-6">
          <p className="pr-12">amanuel</p>
          <i className="pr-10 text-sm">amanuel@gmail.com</i>
          <SidebarButton title="Dashboard" icon={MdOutlineDashboard} />
          <SidebarButton title="Vital Task" icon={BsExclamationLg} />
          <SidebarButton title="My Task" icon={BiTask} />
          <SidebarButton title="Task Categories" icon={FaTasks} />
          <SidebarButton title="Settings" icon={IoSettingsOutline} />
          <SidebarButton title="Help" icon={IoIosHelpCircleOutline} />
          <div
            role="button"
            className="text-white h-10 items-center mt-36 mx-5 flex flex-row hover:bg-white hover:rounded-lg hover:text-red-500"
          >
            <div className="ml-1">
              <MdLogout />
            </div>
            <p className="pl-4">Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
};
