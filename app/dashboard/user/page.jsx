import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";

const UserPage = () => {
  const role = "admin";
  return (
    <div className="">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl my-8 font-bold text-[#102C57] antialiased">
          All Users
        </h1>
        <Link
          href={"/dashboard/user/add"}
          className="btn rounded-lg border-2 border-[#102C57]"
        >
          Add User
        </Link>
      </div>
      <div className="overflow-x-auto px-4 py-2 bg-blue-100 rounded-lg">
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
              <th className="text-[#102C57]">Name</th>
              <th className="text-[#102C57]">Job/Role</th>
              <th className="text-[#102C57]">Email</th>
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
              <td>
                Zemlak, Daniel and Leannon
                <br />
                <span className="badge badge-ghost badge-sm">
                  Desktop Support Technician
                </span>
              </td>
              <td>jim@email.com</td>
              <th>
                {role !== "admin" ? (
                  <button className="btn btn-ghost btn-xs w-20 h-8 ">
                    details
                  </button>
                ) : (
                  <Fragment>
                    <button className="btn btn-success text-white btn-xs rounded-md w-20 h-8 mr-4">
                      Edit
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
              <th></th>
              <th className="text-[#102C57]">Id</th>
              <th className="text-[#102C57]">Name</th>
              <th className="text-[#102C57]">Job/Role</th>
              <th className="text-[#102C57]">Email</th>
              <th className="text-[#102C57]">Actions</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default UserPage;
