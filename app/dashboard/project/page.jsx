import Image from "next/image";
import React, { Fragment } from "react";

const ProjectProject = () => {
  const role = "developer";

  return (
    <Fragment>
      <h2 className="text-4xl my-8 font-bold text-[#102C57] antialiased">
        All Projects
      </h2>
      <div className="overflow-x-auto bg-blue-100 px-4 py-2 rounded-lg">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th className="text-[#102C57]">Id</th>
              <th className="text-[#102C57]">Title</th>
              <th className="text-[#102C57]">Description</th>
              <th className="text-[#102C57]">Current state</th>
              <th className="text-[#102C57]">Assigned to</th>
              <th className="text-[#102C57]">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>1</td>
              <td>
                <div className="flex items-center gap-3">
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                  </div>
                </div>
              </td>
              <td>Zemlak, Daniel and Leannon</td>
              <td>
                <span className="bg-violet-500 p-2 rounded-md text-white font-bold">
                  In Progress
                </span>
              </td>
              <td>3</td>
              <th>
                {role !== "admin" && role !== "project-manager" ? (
                  <div className="space-x-4">
                    <button className="btn bg-yellow-800 text-white rounded-md btn-xs w-20 h-8 ">
                      Details
                    </button>
                    <button className="btn btn-success btn-xs rounded-md w-20 h-8 mr-4">
                      Edit
                    </button>
                  </div>
                ) : (
                  <Fragment>
                    <button className="btn btn-success btn-xs rounded-md w-20 h-8 mr-4">
                      Edit
                    </button>
                    <button className="btn bg-yellow-800 text-white btn-xs rounded-md w-20 h-8 mr-4">
                      Details
                    </button>
                    <button className="btn btn-error text-white rounded-md btn-xs w-20 h-8">
                      Delete
                    </button>
                  </Fragment>
                )}
              </th>
            </tr>
          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <th className="text-[#102C57]"></th>
              <th className="text-[#102C57]">Id</th>
              <th className="text-[#102C57]">Title</th>
              <th className="text-[#102C57]">Description</th>
              <th className="text-[#102C57]">State</th>
              <th className="text-[#102C57]">Assigned to</th>
              <th className="text-[#102C57]">Actions</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </Fragment>
  );
};

export default ProjectProject;
