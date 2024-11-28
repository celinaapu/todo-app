import { FC } from "react";
import Flexphoto from "../assets/images/random.jpg";
import DiffOwnPhoto from "../assets/images/Avatarplaceholder.png";
import AnotherOwnPhoto from "../assets/images/UrGeekProfile.jpg";
import SevenOwnPhoto from "../assets/images/FakeWoman.jpg";

type ModalProps = {
  onClose: () => void;
};

export const ModalInvite: FC<ModalProps> = ({ onClose }) => {
  return (
    <div
      className="overlay fixed inset-0 bg-transparent bg-opacity-50 flex justify-left items-left ml-20 text-left  "
      onClick={onClose}
    >
      <div
        className="mt-[16%] ml-[18%] border-shadow w-[602px] h-1/2 bg-white p-4 rounded-md"
        onClick={(e) => e.stopPropagation()} // Prevents closing modal when clicking inside modal content
      >
        {/* <div className="border-shadow w-1/2 h-screen justify-center items-center mx-auto">*/}
        <div className=" border-shadow">
          <div className="w-[100%] flex flex-row text-[12px] ">
            <div className=" flex flex-row w-[92%]">
              <h3 className="underline decoration-red-700 ">Send an inv</h3>
              <h3>ite to a new member</h3>
            </div>
            <div className="w-[8%]">
              <p className="underline">Go Back</p>
            </div>
          </div>
          <div className="border-4 border-shadow pl-2">
            <div className="text-[10px]">
              <div className="flex flex-col">
                <label>Email</label>
                <div className="flex flex-row gap-1 items-center">
                  <div className="w-[85%] border-2 h-6 pl-2 rounded-sm border-gray-300 text-center items-center justify-center">
                    <input
                      type="email"
                      placeholder="amanuelbeynecelina662@gmail.com"
                      className="text-[8px] flex-grow justify-center w-full rounded-md"
                    />
                  </div>
                  <div className="text-white w-[15%] h-6 rounded-sm text-center items-center justify-center bg-[#f54242] mr-3">
                    <button className="rounded-md text-center items-center justify-center">
                      Send Invite
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-[10px] mt-2">Member</p>
                <div>
                  <div className=" text-center gap-1 items-center flex flex-row">
                    <div className="w-8 h-8 rounded-full border-white border ">
                      <img className="rounded-full" src={Flexphoto} />
                    </div>
                    <div className="item-start justify-start text-start ">
                      <p className="font-bold">Amanuel</p>
                      <p className="text-[8px]">amanuel@gmail.com</p>
                    </div>
                  </div>
                  <div className=" text-center gap-1 items-center flex flex-row">
                    <div className="w-8 h-8 rounded-full border-white border ">
                      <img className="rounded-full" src={DiffOwnPhoto} />
                    </div>
                    <div className="item-start justify-start text-start ">
                      <p className="font-bold">Amanuel</p>
                      <p className="text-[8px]">amanuel@gmail.com</p>
                    </div>
                  </div>
                  <div className=" text-center gap-1 items-center flex flex-row">
                    <div className="w-8 h-8 rounded-full border-white border ">
                      <img className="rounded-full" src={AnotherOwnPhoto} />
                    </div>
                    <div className="item-start justify-start text-start ">
                      <p className="font-bold">Amanuel</p>
                      <p className="text-[8px]">amanuel@gmail.com</p>
                    </div>
                  </div>
                  <div className=" text-center gap-1 items-center flex flex-row">
                    <div className="w-8 h-8 rounded-full border-white border ">
                      <img className="rounded-full" src={SevenOwnPhoto} />
                    </div>
                    <div className="item-start justify-start text-start ">
                      <p className="font-bold">Amanuel</p>
                      <p className="text-[8px]">amanuel@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <label className="text-[12px] mb-2">Invite Link</label>
              <div className="flex flex-row gap-1 h-5 text-center justify-center items-center">
                <div className="w-[85%] border-2  rounded-sm border-gray-300">
                  <input
                    type="email"
                    placeholder="https://www.figma.com/design/riual0IwM4UJnQt3LoP0KN/Task-Manager-webDesign-(Community)?node-id="
                    className="text-[6px] flex-grow w-full rounded-md "
                  />
                </div>
                <div className="pb-2 justify-center items-center text-white w-[15%] rounded-sm text-center bg-[#f54242] mr-3">
                  <button className="rounded-md text-[8px]">Copy Link</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
