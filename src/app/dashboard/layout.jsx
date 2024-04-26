"use client";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import React, { useState } from "react";

const DashboardLayout = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-screen w-full bg-gray-100 flex flex-col relative">
      <div>
        <Header isOpen={open} />
      </div>
      <div className="flex flex-1">
        <div
          className={`fixed w-44 hover:w-64 h-full bg-orange-400 transition-width duration-300 ease-in-out top-0 bottom-0`}
        >
          <Sidebar isOpen={open} setIsOpen={setOpen} />
        </div>
        <div
          className={`flex-1 h-full bg-neutral-700 transition-margin duration-300 ease-in-out pl-48 px-4 py-8`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
