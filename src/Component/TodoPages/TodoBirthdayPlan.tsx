import { FC } from "react";
import { MdLightbulb } from "react-icons/md";
import { MdEditSquare } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { TodoLayout } from "../../layouts/TodoLayout";
import React from "react";

export const TodoBirthdayPlanFile: FC = () => {
  return (
    <div className="w-[100%] h-[100%] pt-3 ">
      <div className="h-[95%]">
        <div className="w-full flex flex-row">
          <div className=" flex flex-row w-[90%]">
            <div className="w-20 h-20">{/*<img src={Birthdayparty} />*/}</div>
            <div>
              <h2 className="font-bold mb-1">
                Attend Nischal's Birthday Party
              </h2>
              <p className="text-[10px] mb-1">
                priority:<span className="text-blue-300 pl-1">Moderate</span>
              </p>
              <p className="text-[10px] mb-1">
                Status:<span className="text-red-600 pl-1">Not Started</span>
              </p>
              <p className="text-[8px] text-gray-400">Created on 20/06/2024</p>
            </div>
          </div>
          <div>
            <p className="underline">Go Back</p>
          </div>
        </div>
        <div className="text-start items-start text-[14px] text-gray-600 ">
          <p className="text-start items-start ">
            Buy gifts on the way and pick up cake from the bakery.(6PM|Fresh
            Elements)
          </p>
          <div>
            <ul className="list-decimal">
              <li>
                A cake, with candles to blow out.(Layer cake, cupcake, flat
                sheet cake)
              </li>
              <li>The birthday party song.</li>
              <li>A place to collect gifts.</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-start items-start">Optional:</h2>
            <ul className="list-disc">
              <li>
                Paper coned-shaped party hats, paper whistles that unroll.
              </li>
              <li>
                Games, activities (carry an object with your knees,then drop it
                into a milk bottle.)
              </li>
              <li>
                Lunch: sandwich halves or pizza sclices, juice, pretzels potato
                chips...THEN cakes and candles and the song
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="h-[5%] w-[100%] text-left items-left justify-left">
        <div className="flex flex-row gap-2 text-white-100">
          <MdDelete className="bg-red-500 flex h-5 text-white-100" />
          <MdEditSquare className="bg-red-500 flex  h-5 text-white-100" />
          <MdLightbulb className="bg-red-500 flex  h-5 text-white-100" />
        </div>
      </div>
    </div>
  );
};

export const TodoBirthdayPlan = () => {
  return <TodoLayout component={<TodoBirthdayPlanFile />} />;
};
