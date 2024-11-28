import { FC } from "react";
import MyOwnPhoto from "../assets/images/MyProfile.jpg";

export const EditAccountInfoPage: FC = () => {
  return (
    <div className="h-screen bg-slate-100">
      <div className="w-screen shadow-lg py-6 mb-6 flex bg-[#f8f8f8]">
        <div className="w-screen h-screen border-4 p-4  mt-6 rounded-md border-shadow">
          <div className="font-bold flex flex-row w-[100%] mb-2">
            <div className="w-[85%] text-[12px]">
              <p>
                <span className="underline decoration-red-500">Account</span>
                <span className="underline decoration-red-500 ml-1">Infor</span>
                mation
              </p>
            </div>
            <div className="underline text-[12px]">
              <p>Go Back </p>
            </div>
          </div>
          <div className="flex flex-row gap-1">
            <div className="w-12 h-12 rounded-full border border-white">
              <img className="rounded-full" src={MyOwnPhoto} />
            </div>
            <div className="items-center pt-2">
              <p className="text-[10px] font-bold">amanuel</p>
              <p className="text-[8px]">amanuel@gmail.com</p>
            </div>
          </div>
          <div className=" w-[90%] h-[80%] border-2 rounded-lg m-5 borer-shadow ">
            <div className="w-[65%] pl-4 pt-5">
              <div className="flex flex-col">
                <label className="text-[12px] pt-2 pb-1 font-semibold">
                  First Name
                </label>
                <input
                  type="text"
                  className="focus:border-gray-300 h-8 rounded-md border-shadow border-2 border-gray-300"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-[12px] pt-2 pb-1 font-semibold">
                  Last Name
                </label>
                <input
                  type="text"
                  className="focus:border-gray-300 h-8 rounded-md border-shadow border-2 border-gray-300"
                />
              </div>
              <div className=" flex flex-col ">
                <label className="text-[12px] pt-2 pb-1 font-semibold">
                  Email Address
                </label>
                <input
                  type="email"
                  className="focus:border-gray-300 h-8 rounded-md border-shadow border-2 border-gray-300"
                />
              </div>
              <div className=" flex flex-col ">
                <label className="text-[12px] pt-2 pb-1 font-semibold">
                  Contact Number
                </label>
                <input
                  type="number"
                  className="focus:border-gray-300 h-8 rounded-md border-shadow border-2 border-gray-300"
                />
              </div>
              <div className=" flex flex-col ">
                <label className="text-[12px] pt-2 pb-1 font-semibold">
                  Position
                </label>
                <input
                  type="text"
                  className="focus:border-gray-300 h-8 rounded-md border-shadow border-2 border-gray-300"
                />
              </div>
            </div>
            <div className="flex pl-4 gap-3 flex-row text-[10px] text-white mt-5">
              <button className="bg-red-500 w-40 h-6 rounded-md">
                Save Changes
              </button>
              <button className="bg-red-500 w-28 h-6 text-white rounded-md">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
