import { FC } from "react";
import React from "react";
import { FormButton } from "../Component/FormButton";

/*type ModalProps = {
  onClose: () => void;
};*/
export const TaskPriorityModal: FC = () => {
  return (
    <div
      className="overlay fixed inset-0 border-shadow bg-black bg-opacity-50 flex "
      //onClick={onClose}
    >
      <div
        className="ml-[18%] w-[60%] h-screen p-4 rounded-md"
        onClick={(e) => e.stopPropagation()} // Prevents closing modal when clicking inside modal content
      >
        <div className="bg-gray-300 h-[80%] mt-10 px-6 rounded-b-md">
          <FormButton
            title="Add"
            span="Task priority"
            labelName="Task Priority Title"
            firstButton="Create"
            secondButton="Cancel"
          />
        </div>
      </div>
    </div>
  );
};
