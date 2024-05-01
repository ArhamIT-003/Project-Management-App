import React from "react";
import Charts from "../ui/BarChart";
import FeaturedInfo from "../ui/FeaturedInfo";
import DashboardTaskTable from "../ui/dashboard-task-table";
import DashboardUserTable from "../ui/dashboard-user-table";
import { featuredInfoData } from "../lib/data";

const DashboardPage = () => {
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex flex-col md:flex-row gap-4">
        {featuredInfoData.map((item, index) => (
          <FeaturedInfo key={index} data={item} />
        ))}
      </div>
      <div className="flex flex-col gap-4 mb-8 md:flex-row">
        <div className="flex-1 bg-[#EADBC8] rounded-xl px-6 py-4">
          <h1 className="text-2xl font-bold antialiased">User Charts</h1>
          <Charts />
        </div>
        <div className="flex-1 bg-[#EADBC8] rounded-xl px-6 py-4">
          <div>
            <h1 className="text-2xl font-bold antialiased mb-4">
              User Details
            </h1>
            <div>
              <DashboardUserTable />
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 bg-[#EADBC8] rounded-xl px-6 py-4">
        <div>
          <h1 className="text-2xl font-bold antialiased">My Task</h1>
          <DashboardTaskTable />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
