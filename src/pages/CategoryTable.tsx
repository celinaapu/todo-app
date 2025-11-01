import { CategoryTableButton } from "../Component/CategoryTableButton";
import { FC } from "react";
import { DashboardLayout } from "../layouts/DashboardLayout";
import { Link } from "react-router-dom";

const CategoryTable: FC = () => {
  const TaskStatusArray = [
    {
      sn: 1,
      description: "Completed",
    },
    { sn: 2, description: "In Progress" },
    {
      sn: 3,
      description: "Not Started",
    },
  ];

  const TaskStatusHeadersArray = ["SN", "Task Status", "Action"];

  const TaskPriorityArray = [
    {
      sn: 1,
      description: "Extreme",
    },
    { sn: 2, description: "Moderate" },
    {
      sn: 3,
      description: "Low",
    },
  ];

  const TaskPriorityHeadersArray = ["SN", "Task Priority", "Action"];

  return (
    <div className="h-full">
      <div className="w-[100%]  flex flex-row">
        <div className="w-[90%] ">
          <h1 className="font-bold text-[20px] ">
            <span className="underline decoration-red-700">Task </span>Category
          </h1>
        </div>
        <div className="w-[10%]">
          <p className="underline">Go Back</p>
        </div>
      </div>
      <div className="bg-red-400 text-[14px] w-32 h-8 items-center text-center pt-1 rounded-md mb-5">
        <Link to="/category-form">
          <button>Add Categories</button>
        </Link>
      </div>
      <div>
        <CategoryTableButton
          title="Task Status"
          headers={TaskStatusHeadersArray}
          data={TaskStatusArray}
        />
        <CategoryTableButton
          title="Task Priority"
          headers={TaskPriorityHeadersArray}
          data={TaskPriorityArray}
        />
      </div>
    </div>
  );
};

export const CategoryFile = () => {
  return <DashboardLayout component={<CategoryTable />} />;
};
