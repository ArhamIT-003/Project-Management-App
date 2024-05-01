// import React from "react";
// import Header from "../ui/Header";
// import Sidebar from "../ui/Sidebar";

// const DashboardLayout = ({ children }) => {
//   return (
//     <div className="h-screen w-full bg-gray-100 flex flex-col relative">
//       <div>
//         <Header />
//       </div>
//       <div className="flex flex-1">
//         <div
//           className={`fixed w-64
//           h-full bg-[#DAC0A3] transition-width duration-300 ease-in-out top-0 bottom-0 z-50`}
//         >
//           <Sidebar />
//         </div>
//         <div
//           className={`flex-1 h-full bg-[#FEFAF6] transition-margin duration-300 ease-in-out pl-32 px-4 py-8`}
//         >
//           {children}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;

"use client";
import React, { useState } from "react";
import Header from "../ui/Header";
import Sidebar from "../ui/Sidebar";

const DashboardLayout = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-screen w-full bg-gray-100 flex flex-col relative">
      <div>
        <Header />
      </div>
      <div className="flex flex-1">
        <div
          className={`fixed w-16 ${
            open && "w-64"
          } h-full bg-[#DAC0A3] transition-width duration-300 ease-in-out top-0 bottom-0 z-50`}
        >
          <Sidebar isOpen={open} setIsOpen={setOpen} />
        </div>
        <div
          className={`flex-1 h-full bg-[#FEFAF6] transition-margin duration-300 ease-in-out pl-32 px-4 py-8`}
          onClick={() => setOpen(false)}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
