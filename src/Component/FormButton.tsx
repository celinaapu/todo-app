
import React from "react";

type FormButtonProps = {
  title: string;
  span: string;
  labelName: string;
  firstButton: string;
  secondButton: string;
};

export const FormButton: React.FC<FormButtonProps> = ({
  title,
  span,
  labelName,
  firstButton,
  secondButton,
}) => {
  return (
    <div className="h-screen pt-2">
      <div className="w-[100%] font-bold flex flex-row pb-2">
        <div className="w-[90%] text-[18px] ">
          <p>
            <span className="underline decoration-red-500">{title}</span>
            {span}
          </p>
        </div>
        <div role="button" className="underline w-[10%]">
          Go Back
        </div>
      </div>
      <div className=" flex flex-col">
        <label className="text-[12px] font-bold">{labelName}</label>
        <input
          type="text"
          className="border-2 rounded-md w-[60%] focus:outline-none"
        />
      </div>
      <div className="gap-10">
        <button className="text-[10px] bg-red-500 w-24 rounded-md h-5 ">
          {firstButton}
        </button>
        <button className="text-[10px] rounded-md h-5 bg-red-500 w-24 ml-3">
          {secondButton}
        </button>
      </div>
    </div>
  );
};
