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
import { Link, useNavigation } from "react-router-dom";

export const SidebarDashboard: FC = () => {
  const navigation = useNavigation();
  const pageUrl = navigation?.location?.pathname;

  console.log("page url", pageUrl);
  return (
    <div className="h-full">
      <Link to="/account_info">
        <div role="button" className="w-full flex justify-center">
          <div className="w-12 h-12 rounded-full border border-white z-10  ">
            <img className="rounded-full" src={MyOwnPhoto} />
          </div>
        </div>
      </Link>

      <div className="flex-col text-white-100 bg-black h-full rounded-lg -mt-6">
        <div className="pt-6">
          <p className="pr-12">amanuel</p>
          <i className="pr-10 text-sm">amanuel@gmail.com</i>
          <SidebarButton
            title="Dashboard"
            isActive={pageUrl === "/"}
            link="/"
            icon={MdOutlineDashboard}
          />
          <SidebarButton
            title="Vital Task"
            link="/vital-task"
            isActive={pageUrl === "/vital-task"}
            icon={BsExclamationLg}
          />
          <SidebarButton
            title="My Task"
            link="/my-task"
            isActive={pageUrl === "/my-task"}
            icon={BiTask}
          />
          <SidebarButton
            title="Task Categories"
            link="/task-categories"
            isActive={pageUrl === "/task-categories"}
            icon={FaTasks}
          />
          <SidebarButton
            title="Settings"
            link="/chart"
            icon={IoSettingsOutline}
          />
          <SidebarButton
            title="Help"
            link="/sign-up"
            icon={IoIosHelpCircleOutline}
          />
          <div
            role="button"
            className="text-white-100 h-10 items-center mt-32 mx-5 flex flex-row hover:bg-white-100 hover:rounded-lg hover:text-red-500"
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
