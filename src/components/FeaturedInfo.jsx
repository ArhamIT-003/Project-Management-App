import React from "react";
import { FaTasks } from "react-icons/fa";

const FeaturedInfo = ({ data }) => {
  return (
    <div className="space-y-8 mb-4 bg-sky-300 shadow-xl flex-1 w-full md:w-1/2 h-32 lg:w-1/3 border border-black rounded-lg px-4 py-2">
      <div>
        <h1 className=" text-lg md:text-xl lg:text-2xl text-gray-700 font-bold antialiased">
          {data.name}
        </h1>
      </div>
      <div className="flex justify-between items-center">
        <span className="font-bold antialiased">{data.taskNumber}</span>
        <span className="py-2 px-4 rounded-2xl bg-white">
          {data.icon}
        </span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
