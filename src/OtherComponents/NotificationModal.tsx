import { FC } from "react";
import { IoArrowUndo } from "react-icons/io5";
import FoodImage from "../assets/images/food.jpg";
import TravelImage from "../assets/images/TravelDays.jpg";
import PetWardenImage from "../assets/images/PetWarden.jpg";
import JuiceSliderimage from "../assets/images/Juiceslider.jpg";

type ModalProps = {
  onClose: () => void;
};
export const NotifyModal: FC<ModalProps> = ({ onClose }) => {
  return (
    <div
      className="overlay fixed inset-0 border-shadow bg-transparent bg-opacity-50 flex "
      onClick={onClose}
    >
      <div
        className="ml-[18%] w-[400px] h-1/2 p-4 rounded-md"
        onClick={(e) => e.stopPropagation()} // Prevents closing modal when clicking inside modal content
      >
        <div className="bg-#FFFFFF border-shadow rounded-t-md border px-6 pt-2">
          <div className="text-black flex flex-row">
            <div className="font-bold text-start text-[14px] w-[95%]">
              <h2>Notifications</h2>
            </div>
            <div className="text-red-500 w-[5%]">
              <IoArrowUndo />
            </div>
          </div>
          <p className="text-gray-400 text-start text-[12px] mb-2 mt-2">
            Today
          </p>
        </div>
        <div className="bg-gray-300 pt-2 px-6 rounded-b-md">
          <div role="button" className="flex flex-row w-[100%] h-20">
            <div className="text-[14px] text-start w-[70%]">
              <p>
                Complete the <span className="font-bold">UI design</span> of
                Landing page for
                <span className="font-bold">FoodVentures.</span>
                <span className="text-gray-600 pl-1">2h</span>
              </p>
              <p className="text-[12px] font-semibold">
                <span>Priority:</span>
                <span className="text-red-500 pl-1">High</span>
              </p>
            </div>
            <div className="w-[20%] text-end items-end justify-end">
              <img
                src={FoodImage}
                className="w-12 h-12 rounded-md mt-2 ml-10"
              />
            </div>
          </div>
          <div role="button" className="flex flex-row w-[100%] h-20">
            <div className="text-[14px] text-start w-[70%]">
              <p>
                Complete the <span className="font-bold">UI design</span> of
                Landing page for <span className="font-bold">Travel Days.</span>
                <span className="text-gray-600  pl-1">2h</span>
              </p>
              <p className="text-[12px] font-semibold">
                <span>Priority:</span>
                <span className="text-red-500">High</span>
              </p>
            </div>
            <div className="w-[20%] text-end items-end justify-end">
              <img
                src={TravelImage}
                className="w-12 h-12 mt-2 rounded-md ml-10"
              />
            </div>
          </div>
          <div role="button" className="flex flex-row w-[100%] h-20 mb-4">
            <div className="text-[14px] text-start w-[70%]">
              <p>
                Complete the
                <span className="font-bold">Mobile App design</span> of Landing
                page for <span className="font-bold">Pet Warden.</span>
                <span className="text-gray-600  pl-1">2h</span>
              </p>
              <p className="text-[12px] font-semibold">
                <span>Priority:</span>
                <span className="text-red-500"> Extremely High</span>
              </p>
            </div>
            <div className="w-[20%] text-end items-end justify-end">
              <img
                src={PetWardenImage}
                className="w-12 h-12 rounded-md mt-2  ml-10"
              />
            </div>
          </div>
          <div role="button" className="flex flex-row w-[100%] h-20">
            <div className="text-[14px] text-start w-[70%]">
              <p>
                Complete the
                <span className="font-semibold">entire design </span> of Landing
                page for <span className="font-bold">Juice Slider.</span>
                <span className="text-gray-600  pl-1">2h</span>
              </p>
              <p className="text-[12px] font-semibold">
                <span>Priority:</span>
                <span className="text-red-500">High</span>
              </p>
            </div>
            <div className="w-[20%] text-end items-end justify-end">
              <img
                src={JuiceSliderimage}
                className="w-12 h-12 mt-2  rounded-md ml-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
