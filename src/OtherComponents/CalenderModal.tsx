import { FC } from "react";
import { IoArrowUndo } from "react-icons/io5";
import { useState } from "react";
import DatePicker from "react-datepicker";
import React from "react";

type CalenderProps = {
  onClose: () => void;
};

export const CalenderModal: FC<CalenderProps> = ({ onClose }) => {
  const [selectDate, setTheDay] = useState<Date | null>(null);
  const handleDateChange = (Date: Date | null) => {
    setTheDay(Date);
  };

  return (
    <div
      className="overlay h-full fixed inset-0 bg-black bg-opacity-50 flex justify-center items-right text-right"
      onClick={onClose}
    >
      <div
        className="w-[30%] mt-10 h-[60%] bg-white-50 rounded-md "
        onClick={(e) => e.stopPropagation()}
      >
        <div className="border-shadow rounded-t-md border pt-2">
          <div className="text-black flex flex-row">
            <div className="font-bold text-start text-[16px] w-[95%]">
              <h2>Calender</h2>
            </div>
            <div className="text-red-500 w-[5%]">
              <IoArrowUndo />
            </div>
          </div>
          <div className="items-center text-center w-full">
            <DatePicker
              selected={selectDate}
              onChange={handleDateChange}
              dateFormat="dd/MM/yyyy"
              className="border rounded-sm"
              placeholderText="Select Date"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
