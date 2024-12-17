/* eslint-disable react-refresh/only-export-components */
import { BsThreeDots } from "react-icons/bs";
import { FaRegCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Priority, Status } from "../lib/tasks/state/tasks";

type SidebarButtonProps = {
  title: string;
  imageLink: string;
  circleColor?: string;
  description: string;
  priority?: Priority;
  status: Status;
  dateCreated?: Date;
  isCompleted?: boolean;
  link: string;
};

export const MainDashbutton: React.FC<SidebarButtonProps> = ({
  title,
  imageLink,
  circleColor,
  description,
  priority,
  status,
  isCompleted,
  link,
}) => {
  return (
    <Link
      to={link}
      role="button"
      className="text-start border-4 h-32 flex flex-row rounded-lg"
    >
      <div className=" text-sm text-extrBold w-[10%] ml-2 pt-2">
        <FaRegCircle color={circleColor} />
      </div>
      <div className="w-[60%]">
        <h2 className="font-bold text-md">{title}</h2>
        <p className="text-gray-400 text-sm">{description}</p>
        <div className=" text-sm">
          <div className="flex flex-row mt-2 text-[10px]">
            {priority?.length ? (
              <div className="flex flex-row">
                <p>Priority:</p>
                <p
                  className={`pl-1 ${
                    priority === Priority.moderate
                      ? "text-blue-200"
                      : status === Status.notStarted
                      ? "text-red-500"
                      : "text-blue-500"
                  }`}
                >
                  Moderate
                </p>
              </div>
            ) : null}
            <div className="flex flex-row">
              <p>Status:</p>
              <p
                className={`pl-1 ${
                  status === Status.completed
                    ? "text-green-500"
                    : status === Status.notStarted
                    ? "text-red-500"
                    : "text-blue-500"
                }`}
              >
                {status}
              </p>
            </div>
          </div>
          {isCompleted ? (
            <p className="text-gray-400 text-[12px]">Completed 2 days ago</p>
          ) : null}
        </div>
      </div>
      <div className="flex flex-col w-[30%]">
        <div className="justify-center text-center items-center ml-10 mt-6">
          <img src={imageLink} className="rounded-lg w-20 h-14" />
        </div>
        <div className="text-gray-400 text-[10px] mt-4 flex-row flex">
          <p className="flex flex-row">Created on 20/06/2024</p>
        </div>
      </div>
      <div className="text-gray-300 ">
        <BsThreeDots />
      </div>
    </Link>
  );
};
