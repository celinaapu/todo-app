import { IconType } from "react-icons";

type SidebarButtonProps = {
  title: string;
  icon: IconType;
  link?: string;
  shouldNotHover?: boolean;
};

export const SidebarButton: React.FC<SidebarButtonProps> = ({
  title,
  icon: Icon,
  shouldNotHover,
}) => {
  return (
    <div
      role="button"
      className={`text-white items-center h-10 mx-5 flex flex-row ${
        shouldNotHover
          ? ""
          : "hover:bg-white hover:rounded-lg hover:text-red-500"
      }  `}
    >
      <div className="ml-1">
        <Icon />
      </div>
      <p className="pl-4">{title}</p>
    </div>
  );
};
