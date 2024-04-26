import Image from "next/image";
import React from "react";

const Header = ({ isOpen }) => {
  return (
    <div
      className={`${
        !isOpen ? "md:pl-48" : null
      } bg-gray-500 h-12 flex items-center transition-all ease-in-out px-20`}
    >
      <div className="w-full flex items-center justify-between">
        <h1 className="text-sm md:text-base lg:text-lg font-semibold text-white">
          Hi, Faisal Jawaid
        </h1>

        <div className="flex gap-2">
          <div className="py-2 px-4 bg-violet-500 rounded-lg">
            <p className="text-sm text-white font-semibold">Admin</p>
          </div>
          <div>
            <Image src={""} alt="user-image" width={40} height={40} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
