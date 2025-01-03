import { FC } from "react";
import { DashboardLayout } from "../layouts/DashboardLayout";
import React from "react";

export const CreateCategoryForm: FC = () => {
  return (
    <div className="h-screen pt-2">
      <div className="w-[100%] font-bold flex flex-row pb-2">
        <div role="button" className="w-[90%] text-[18px] ">
          <p>
            <span className="underline decoration-red-500">Crea</span>te
            Categories
          </p>
        </div>
        <div role="button" className="underline w-[10%]">
          Go Back
        </div>
      </div>
      <div className=" flex flex-col">
        <label className="text-[12px] font-bold">Category Name</label>
        <input
          type="text"
          className="border-2 focus:outline-none rounded-md w-[60%]"
        />
      </div>
      <div className="gap-10">
        <button className="text-[10px] bg-red-500 w-24 rounded-md h-5 ">
          Create
        </button>
        <button className="text-[10px] rounded-md h-5 bg-red-500 w-24 ml-3">
          Cancel
        </button>
      </div>
    </div>
  );
};

export const CategoryFormPage = () => {
  return <DashboardLayout component={<CreateCategoryForm />} />;
};
