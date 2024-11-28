import { FC } from "react";
import { SlCalender } from "react-icons/sl";
import { GoDotFill } from "react-icons/go";
import { GrGallery } from "react-icons/gr";

type TaskProps = {
  onClose: () => void;
};
export const NewTaskModal: FC<TaskProps> = ({ onClose }) => {
  return (
    <div
      className="overlay fixed inset-0 border-shadow bg-black bg-opacity-50 flex "
      onClick={onClose}
    >
      <div
        className="ml-[18%] text-start bg-white w-1/2 h-screen p-4 rounded-md"
        onClick={(e) => e.stopPropagation()} // Prevents closing modal when clicking inside modal content
      >
        <div className="border-shadow rounded-t-md mb-1 px-6 pt-2">
          <div className="text-black flex flex-row">
            <div className="font-bold text-start text-[14px] w-[95%]">
              <p>
                <span className="underline decoration-red-500">Add New Ta</span>
                sk
              </p>
            </div>
            <div className="w-[10%] underline text-[14px]">
              <p>Go Back</p>
            </div>
          </div>
        </div>
        <div className="pt-2 h-screen px-6 rounded-b-md w-[100%]">
          <div className=" flex flex-col w-[60%]">
            <label className="text-[14px] font-semibold mb-2">Title</label>
            <input type="text" className="rounded-md  mb-4 border-2" />
            <label className="text-[14px] font-semibold mb-2">Date</label>
            <div className="flex flex-row w-[100%] relative">
              <input
                type="text"
                className="rounded-md mb-4 z-10 w-[100%] flex-grow border-2"
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
                <input type="checkbox" className="h-4 w-4 ml-2" />
              </div>
              <div>
                <div className="flex flex-row text-center items-center">
                  <GoDotFill className="text-blue-600" />
                  <p className="text-gray-500 text-[14px]">Moderate</p>
                  <input type="checkbox" className="h-4 w-4 ml-2" />
                </div>
              </div>
              <div>
                <div className="flex flex-row text-center items-center">
                  <GoDotFill className="text-green-600" />
                  <p className="text-gray-500 text-[14px]">Low</p>
                  <input type="checkbox" className="h-4 w-4 ml-2" />
                </div>
              </div>
            </div>
            <div className="flex flex-row w-[100%]">
              <div className="w-[60%]  ">
                <h3 className="font-bold text-[14px] mb-1">Task Description</h3>
                <div
                  role="button"
                  className="border-2 border-gray-500 h-36 rounded-md"
                >
                  <input
                    className="text-gray-500 w-full text-start text-[12px] pl-2"
                    type="text"
                    placeholder=" Start writing here...."
                  />
                </div>
              </div>
              <div className="w-[40%] h-36 items-center text-center ">
                <h3 className="font-bold text-[14px] text-start ml-5 mb-1">
                  Upload Image
                </h3>
                <div
                  role="button"
                  className="rounded-md border-gray-500  h-36 border-2 ml-5"
                >
                  <GrGallery className="w-10 h-10 ml-20 mt-5" />
                  <p className="text-[12px]">Drag$Drop Files here</p>
                  <p className="text-[12px]">Or</p>
                  <button className="w-16 border-gray-500  border-2 text-[12px] rounded-md">
                    Browse
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
