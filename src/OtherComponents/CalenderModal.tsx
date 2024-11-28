import { FC } from "react";
import { IoArrowUndo } from "react-icons/io5";
import { useState } from "react";
import DatePicker from "react-datepicker";

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
      className="overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-left ml-20 text-left"
      onClick={onClose}
    >
      <div
        className="w-[400px] h-1/2 p-4 rounded-md"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="border-shadow rounded-t-md border pt-2">
          <div className="text-black flex flex-row">
            <div className="font-bold text-start text-[14px] w-[95%]">
              <h2>Notifications</h2>
            </div>
            <div className="text-red-500 w-[5%]">
              <IoArrowUndo />
            </div>
          </div>
          <div>
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
