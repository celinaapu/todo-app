import { FC, useState } from "react";
import { SlCalender } from "react-icons/sl";
import { GoDotFill } from "react-icons/go";
import { useDispatch } from "react-redux";
import { Priority } from "../lib/tasks/state/tasks";

type TaskProps = {
  onClose: () => void;
};

type FormValueType = {
  title: string;
  description: string;
  date: string;
  priority: string;
  image: string;
};

const initialFormValue = {
  title: "",
  description: "",
  date: "",
  priority: "",
  image: "",
};

export const NewTaskModal: FC<TaskProps> = ({ onClose }) => {
  const [formValues, setFormValues] = useState<FormValueType>(initialFormValue);
  const dispatch = useDispatch();
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    console.log(formValues);
  };
  return (
    <div
      className="overlay fixed inset-0 border-shadow bg-black bg-opacity-50 flex "
      onClick={onClose}
    >
      <div
        className="ml-[18%] mt-6 text-start bg-white-100 w-[70%] h-[90%] p-4 rounded-md"
        onClick={(e) => e.stopPropagation()} // Prevents closing modal when clicking inside modal content
      >
        <form onSubmit={handleSubmit}>
          <div className="border-shadow rounded-t-md mb-1 px-6 pt-2">
            <div className="text-black flex flex-row">
              <div className="font-bold text-start text-[14px] w-[95%]">
                <p>
                  <span className="underline decoration-red-500">
                    Add New Ta
                  </span>
                  sk
                </p>
              </div>
              <div className="w-[10%] underline text-[14px]">
                <p>Go Back</p>
              </div>
            </div>
          </div>
          <div className="pt-2 px-6 border-2 h-[82%]  rounded-b-md w-[100%]">
            <div className=" flex flex-col w-[60%]">
              <label className="text-[14px] font-semibold mb-2">Title</label>
              <input
                type="text"
                name="title"
                onChange={(e) => {
                  setFormValues({ ...formValues, title: e.target.value });
                }}
                value={formValues?.title}
                className="rounded-md focus:outline-none mb-4 border-2"
              />
              <label className="text-[14px] font-semibold mb-2">Date</label>
              <div className="flex flex-row w-[100%] relative">
                <input
                  type="text"
                  name="date"
                  onChange={(e) => {
                    setFormValues({ ...formValues, date: e.target.value });
                  }}
                  value={formValues.date}
                  className="rounded-md focus:outline-none mb-4 z-10 w-[100%] flex-grow border-2"
                />
                <SlCalender className=" absolute" />
              </div>
            </div>
            <div>
              <h3 className="text-[14px] font-semibold mb-3">Priority</h3>
              <div className="flex flex-row gap-6 mb-3">
                <div className="flex flex-row text-center items-center">
                  <GoDotFill className="text-red-600" />
                  <p className="text-gray-500 text-[14px]">Extreme</p>
                  <input
                    name="priority"
                    type="radio"
                    onChange={(e) => {
                      setFormValues({
                        ...formValues,
                        priority: e.target.value,
                      });
                    }}
                    checked={formValues.priority === Priority.high}
                    value={Priority.high}
                    className="h-4 w-4 ml-2 focus:outline-none"
                  />
                </div>
                <div>
                  <div className="flex flex-row text-center items-center">
                    <GoDotFill className="text-blue-600" />
                    <p className="text-gray-500 text-[14px]">Moderate</p>
                    <input
                      name="priority"
                      type="radio"
                      onChange={(e) => {
                        setFormValues({
                          ...formValues,
                          priority: e.target.value,
                        });
                      }}
                      checked={formValues.priority === Priority.moderate}
                      value={Priority.moderate}
                      className="h-4 w-4 ml-2 focus:outline-none"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex flex-row text-center items-center">
                    <GoDotFill className="text-green-600" />
                    <p className="text-gray-500 text-[14px]">Low</p>
                    <input
                      name="priority"
                      type="radio"
                      onChange={(e) => {
                        setFormValues({
                          ...formValues,
                          priority: e.target.value,
                        });
                      }}
                      checked={formValues.priority === Priority.low}
                      value={Priority.low}
                      className="h-4 w-4 ml-2 focus:outline-none"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-row w-[100%]">
                <div className="w-[60%]  ">
                  <h3 className="font-bold text-[14px] mb-1">
                    Task Description
                  </h3>
                  <div role="button" className="border-2 h-36 rounded-md">
                    <textarea
                      className="text-gray-500 w-full h-full  text-start text-[12px] pl-2"
                      placeholder=" Start writing here...."
                      name="description"
                      onChange={(e) => {
                        setFormValues({
                          ...formValues,
                          description: e.target.value,
                        });
                      }}
                      value={formValues.description}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" border mt-4 text-center h-8 w-20 rounded-md bg-red-55">
            <button
              type="submit"
              className="text-[10px] text-white-50 font-bold"
            >
              Done
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
