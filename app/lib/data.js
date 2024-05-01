import { FaTasks } from "react-icons/fa";
import { SiProgress, SiTodoist } from "react-icons/si";
import User from "./models/User";
import { connectToDb } from "./utlis";

export const featuredInfoData = [
  { name: "My Tasks", taskNumber: 10, icon: <FaTasks /> },
  { name: "In Progress", taskNumber: 3, icon: <SiProgress /> },
  { name: "Todo", taskNumber: 5, icon: <SiTodoist /> },
];

export const fetchUsers = async () => {
  try {
    await connectToDb();
    const users = await User.find();
    return users;
  } catch (error) {
    throw new Error("Failed to fetch users");
  }
};
