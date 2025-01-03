import { IconType } from "react-icons";
import { Link } from "react-router-dom";
import React from "react";

type SidebarButtonProps = {
  title: string;
  icon: IconType;
  link: string;
  shouldNotHover?: boolean;
  isActive?: boolean;
};

export const SidebarButton: React.FC<SidebarButtonProps> = ({
  title,
  icon: Icon,
  shouldNotHover,
  link,
  isActive,
}) => {
  return (
    <Link
      to={link}
      role="button"
      className={`text-white-100 items-center h-10 mx-5 flex flex-row ${
        isActive ? "bg-white-100" : ""
      } ${
        shouldNotHover
          ? ""
          : "hover:bg-white-100 hover:rounded-lg hover:text-red-500"
      }  `}
    >
      <div className="ml-1">
        <Icon />
      </div>
      <p className="pl-4">{title}</p>
    </Link>
  );
};
