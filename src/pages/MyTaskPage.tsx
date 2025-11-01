import { FC } from "react";
import { FaRegCircle } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import AddAssignment from "../assets/images/AssignmentPic.jpg";
import AddDocumentpic from "../assets/images/DocumentPic.jpg";
import { MdDelete } from "react-icons/md";
import { RiEditBoxFill } from "react-icons/ri";
import { DashboardLayout } from "../layouts/DashboardLayout";

const MyTask: FC = () => {
  return (
    <div className="w-[100%] h-[100%] mt-4  bg-gray-200 flex flex-row gap-5 pt-4">
      <div className="w-1/2 mt-5 h-[100%] border-gray-400 rounded-lg py-2 px-3 border">
        <div className="flex text-[12px] font-bold gap-1">
          <h2 className="underline decoration-red-500">My </h2>
          <h2>Tasks</h2>
        </div>

        <div className="text-start border-gray-400 border border-shadow h-32 flex flex-row rounded-lg mt-3 bg-slate-300">
          <div className="text-red-500 text-sm text-extrBold w-[8%] ml-2 pt-2">
            <FaRegCircle />
          </div>
          <div className="items-center">
            <h2 className="font-bold mb-3 mt-2 text-[12px]">
              Submit Documents
            </h2>
            <p className="text-gray-400 text-[10px]">
              Make sure to submit all the necessary documents.....
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
              <img src={AddDocumentpic} className="rounded-lg w-20 h-14" />
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
              Complete Assignments
            </h2>
            <p className="text-gray-400 text-[10px]">
              The assignments must be completed to pass final year....
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
              <img src={AddAssignment} className="rounded-lg w-20 h-14" />
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
            <img src={AddDocumentpic} className="rounded-lg" />
          </div>
          <div className="flex flex-col">
            <h3 className="font-bold mt-2 text-[12px]">Submit Documents</h3>
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
        <div className="text-[14px]">
          <div className="flex flex-row">
            <h2 className="font-semibold">Task Title:</h2>
            <p>Document Submission.</p>
          </div>
          <div className="flex-row flex">
            <p>
              <span className="font-semibold"> Objective:</span>
              To submit required documents for something important.
            </p>
          </div>
          <p>
            <span className="font-semibold">Task Descrition:</span>
            Review the list of documents required for submission and ensure all
            necessary documents are ready. Organize the document accordingly and
            scan them if physical copies need to be submitted digitally.Rename
            the scanned file appropriately for easy identification and verify
            the accepted formats. Upload the documents securely to the
            designated platform,double-check for accuracy,and obtain
            comfirmation of successful submission. Follow up if necessary to
            ensure proper processing.
          </p>
          <span className="font-semibold">Additional Notes:</span>
          <div>
            <ul className=" list-disc ml-6">
              <li>Ensure that the document are authentic and up-to-date. </li>
              <li>
                Maintain confidentiallity and and security of sensitive
                information during the submission process.
              </li>
              <li>
                If there are specific guidelines or deadlines for submission,
                adhere to them diligently.
              </li>
            </ul>
          </div>
          <p>
            <span className="font-semibold">Dealine for submission:</span>
            End of Day
          </p>
        </div>
        <div className="flex flex-row gap-3 text-end  justify-end items-end">
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

export const MyTaskFile = () => {
  return <DashboardLayout component={<MyTask />} />;
};
