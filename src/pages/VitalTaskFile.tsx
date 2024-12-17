import { FC } from "react";
import { FaRegCircle } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { RiEditBoxFill } from "react-icons/ri";
import ToWalkADog from "../assets/images/WalkingDogImage.jpg";
import AddHospitalaimage from "../assets/images/HopitalImage.jpg";
import { DashboardLayout } from "../layouts/DashboardLayout";

const VitalTaskPage: FC = () => {
  return (
    <div className="flex flex-row gap-4">
      <div className="w-1/2 mt-5 h-[100%] border-gray-400 rounded-lg py-2 px-3 border">
        <div className="flex text-[12px] font-bold gap-1">
          <h2 className="underline decoration-red-500">Vital </h2>
          <h2>Tasks</h2>
        </div>

        <div className="text-start border-gray-400 border border-shadow h-32 flex flex-row rounded-lg mt-3 bg-slate-300">
          <div className="text-red-500 text-sm text-extrBold w-[8%] ml-2 pt-2">
            <FaRegCircle />
          </div>
          <div className="items-center">
            <h2 className="font-bold mb-3 mt-2 text-[12px]">Walk the dog</h2>
            <p className="text-gray-400 text-[10px]">
              Take the dog to the part and bring treats as well.....
            </p>
            <div className="flex flex-row text-[10px] mt-6 gap-2">
              <div className="flex flex-row">
                <p>Priority:</p>
                <p className="text-blue-400">Moderate</p>
              </div>
              <div className="flex flex-row">
                <p>Status:</p>
                <p className="text-red-500 pl-1">Not Started</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center text-center items-center">
            <div className="justify-center text-center items-center pt-6">
              <img src={ToWalkADog} className="rounded-lg w-20 h-14" />
            </div>
            <div className="text-gray-400 text-[10px] mt-4 flex-row flex">
              <p className="flex flex-row">Created on</p>
              <p>20/06/2024</p>
            </div>
          </div>
          <div className="text-grey-300 ">
            <BsThreeDots />
          </div>
        </div>
        <div className="text-start border-gray-400 border h-32 flex flex-row rounded-lg mt-3">
          <div className="text-blue-700 text-sm text-extrBold w-[8%] ml-2 pt-2">
            <FaRegCircle />
          </div>
          <div className="">
            <h2 className="font-bold mb-3 mt-2 text-[12px]">
              Take grandma to hospital
            </h2>
            <p className="text-gray-400 text-[10px]">
              Go back home and take grandma to the hosp....
            </p>
            <div className="flex flex-row text-[10px] mt-6 gap-2">
              <div className="flex flex-row">
                <p>Priority:</p>
                <p className="text-blue-400">Moderate</p>
              </div>
              <div className="flex flex-row">
                <p>Status:</p>
                <p className="text-blue-800 pl-1">In Progress</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center text-center items-center">
            <div className="justify-center text-center items-center pt-6">
              <img src={AddHospitalaimage} className="rounded-lg w-20 h-14" />
            </div>
            <div className="text-gray-400 text-[10px] mt-4 flex-row flex">
              <p className="flex flex-row">Created on</p>
              <p>20/06/2024</p>
            </div>
          </div>
          <div className="text-grey-300 ">
            <BsThreeDots />
          </div>
        </div>
      </div>
      <div className="w-1/2 mt-5 py-4 px-4  h-[100%] border-gray-400 border rounded-lg">
        <div className="flex flex-row gap-3 h-[15%] mb-6">
          <div className="rounded-md w-32 h-[100%]">
            <img src={ToWalkADog} className="rounded-lg" />
          </div>
          <div className="flex flex-col">
            <h3 className="font-bold mt-2 text-[12px]">Walk the dog</h3>
            <div className="flex flex-row mt-2 text-[10px]">
              <p className="pr-1">Priority:</p>
              <p className="text-red-500">Extreme</p>
            </div>
            <div className="flex flex-row text-[10px] mt-2">
              <p className="pr-1">Status:</p>
              <p className="text-red-500">Not Started</p>
            </div>
            <p className="text-[8px] mt-2 text-gray-400">
              Created on 20/06/2024
            </p>
          </div>
        </div>
        <div className="text-[14px] pt-2">
          <p className="pb-6">Take the dog park and bring treats as well.</p>
          <p className="pb-8">
            Take Luffy Jiro for a leisurely stroll around the neighborhood .
            Enjoy the frsh air and give them they exercise and mental
            stimulation they need for a happy and healthy day. Dont forget to
            bring along squeaky and fluffy for some extra fun along the way!
          </p>
          <div>
            <ul className="list-decimal ml-6">
              <li>Listen to a podcast or audiobook.</li>
              <li>Practice mindfullness or meditation.</li>
              <li>Take photos of interesting site along the way.</li>
              <li>Practice obedience training with your dog.</li>
              <li>Chat with neighbors or other dog walkers.</li>
              <li>Listen to music or an upbeat playlist.</li>
            </ul>
          </div>
        </div>
        <div className="mt-20 flex flex-row gap-3 text-end justify-end items-end">
          <div
            role="button"
            className="bg-red-600 rounded-sm items-center text-center justify-center h-4 w-6 pl-1 text-white-100 "
          >
            <MdDelete />
          </div>
          <div
            role="button"
            className="bg-red-600 items-center rounded-sm text-center justify-center h-4 w-6 pl-1 text-white-100 "
          >
            <RiEditBoxFill />
          </div>
        </div>
      </div>
    </div>
  );
};

export const VitalTaskFile = () => {
  return <DashboardLayout component={<VitalTaskPage />} />;
};
