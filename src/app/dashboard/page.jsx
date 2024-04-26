"use client";
import FeaturedInfo from "@/components/FeaturedInfo";
import React from "react";
import { FeaturedInfoData } from "@/data";
import Charts from "@/components/BarChart";
import DashboardUserTable from "@/components/dashboard-user-table";
import DashboardTaskTable from "@/components/dashboard-task-table";

const DashboardPage = () => {
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex flex-col md:flex-row gap-4">
        {FeaturedInfoData.map((item, index) => (
          <FeaturedInfo key={index} data={item} />
        ))}
      </div>
      <div className="flex flex-col gap-4 mb-8 md:flex-row">
        <div className="flex-1 bg-white rounded-xl px-6 py-4">
          <h1 className="text-2xl font-bold antialiased">User Charts</h1>
          <Charts />
        </div>
        <div className="flex-1 bg-purple-500 rounded-xl px-6 py-4">
          <div>
            <h1 className="text-2xl font-bold antialiased">User Details</h1>
            <div><DashboardUserTable /></div>
          </div>
        </div>
      </div>
      <div className="flex-1 bg-white rounded-xl px-6 py-4">
        <div>
          <h1 className="text-2xl font-bold antialiased">My Task</h1>
          <DashboardTaskTable />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
