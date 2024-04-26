import Image from "next/image";
import React from "react";
import logo from "../../public/logo.png";
import Link from "next/link";
import { MdHomeMax } from "react-icons/md";
import { AiOutlineProject } from "react-icons/ai";
import { SiLogstash } from "react-icons/si";
import { CiUser } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";

const Menu = [
  { name: "Home", href: "/dashboard", icons: <MdHomeMax /> },
  { name: "User", href: "/dashboard/user", icons: <CiUser /> },
  { name: "Projects", href: "/dashboard/project", icons: <AiOutlineProject /> },
  { name: "Backlogs", href: "/dashboard/backlogs", icons: <SiLogstash /> },
];
const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={`h-full flex flex-col justify-between
        items-center
      py-3`}
      // onClick={handleSubmit}
    >
      <div className="w-full space-y-2">
        <div className={`flex items-center justify-center`}>
          <Image src={logo} alt="logo" className={`w-24 h-24 object-contain`} />
        </div>
      </div>
      <div className="flex flex-col gap-8">
        {Menu.map((items, index) => (
          <Link
            key={index}
            href={items.href}
            className="flex gap-4 items-center py-2 px-4 rounded-md hover:bg-gray-100 cursor-pointer"
          >
            <span>{items.icons}</span>
            <span className="text-sm">{items.name}</span>
          </Link>
        ))}
      </div>
      <div>
        <button className="flex gap-4 items-center py-2 px-4 rounded-md hover:bg-gray-100 cursor-pointer">
          <span>
            <IoIosLogOut />
          </span>
          <span className="text-sm">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

// {Menu.map((item, index) => (
//           <div
//             key={index}
//             className="flex items-center py-2 px-4 rounded-md hover:bg-gray-100 cursor-pointer"
//           >
//             <Link href={item.href} className={`flex gap-8 items-center px-16`}>
//               <span className="">{item.icons}</span>
//               <p className={"block text-sm"}>{item.name}</p>
//             </Link>
//           </div>
//         ))}
