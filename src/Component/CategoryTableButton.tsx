import { MdAdd, MdDelete, MdEdit } from "react-icons/md";
import React from "react";

type CategoryTableProps = {
  title: string;
  headers: string[];
  data: {
    sn: number;
    description: string;
  }[];
};

export const CategoryTableButton: React.FC<CategoryTableProps> = ({
  title,
  data,
  headers,
}) => {

  return (
    <div className="">
      <div className=" flex flex-row w-[100%]">
        <div className="w-[90%] font-bold text-[14px]">
          <h2 className="underline">{title}</h2>
        </div>
        <div role="button" className="w-[10%] flex flex-row ">
          <MdAdd className="text-red-500" />
          <p className="text-gray-500 text-[10px]"> Add Task</p>
        </div>
      </div>

      <div className="table-container">
        <table className="table-auto border-collapse rounded-lg w-full">
          <thead>
            <tr>
              {headers?.map((header) => (
                <th className="border px-4 py-2">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data?.map((item) => (
              <tr key={item.sn}>
                <td className="border text-center px-4 py-2">{item?.sn}</td>
                <td className="border text-center px-4 py-2">
                  {item?.description}
                </td>

                <td className="border flex flex-row justify-center px-4 py-2">
                  <div
                    role="button"
                    className="bg-red-400 w-[100px]  rounded-md mx-1 flex flex-row justify-between items-center p-2"
                  >
                    <div className="w-6">
                      <MdEdit color="#fff" />
                    </div>
                    <div className="flex-grow">
                      <p className="text-white-100">Edit</p>
                    </div>
                  </div>
                  <div
                    role="button"
                    className="bg-red-400 w-[100px] rounded-md mx-1 flex flex-row justify-between items-center p-2"
                  >
                    <div className="w-6">
                      <MdDelete color="#fff" />
                    </div>
                    <div className="flex-grow">
                      <p className="text-white-100">Delete</p>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
