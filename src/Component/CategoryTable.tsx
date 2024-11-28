import { FC } from "react";
import { MdDelete, MdEdit } from "react-icons/md";

export const CategoryTable: FC = () => {
  const data = [
    {
      id: 1,
      status: "Completed",
    },
    { id: 2, status: "In Progress" },
    {
      id: 3,
      status: "Not Started",
    },
  ];

  return (
    <div>
      <h2>Task Status</h2>
      <div className="table-container">
        <table className="table-auto border-collapse rounded-lg w-full">
          <thead>
            <tr>
              <th className="border px-4 py-2">SN</th>
              <th className="border px-4 py-2">Task Status</th>

              <th className="border px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td className="border px-4 py-2">{item.id}</td>
                <td className="border px-4 py-2">{item.status}</td>

                <td className="border flex flex-row px-4 py-2">
                  <div
                    role="button"
                    className="bg-red-400 w-[100px]  rounded-md mx-1 flex flex-row justify-between items-center p-2"
                  >
                    <div className="w-6">
                      <MdEdit color="#fff" />
                    </div>
                    <div className="flex-grow">
                      <p className="text-white">Edit</p>
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
                      <p className="text-white">Delete</p>
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
