import { FaTasks } from "react-icons/fa";
import { SiProgress, SiTodoist } from "react-icons/si";
import { connectToDb } from "./utlis";
import bcrypt from "bcryptjs";
// import User from "./models/User";
// import { connectToDb } from "./utlis";

export const featuredInfoData = [
  { name: "My Tasks", taskNumber: 10, icon: <FaTasks /> },
  { name: "In Progress", taskNumber: 3, icon: <SiProgress /> },
  { name: "Todo", taskNumber: 5, icon: <SiTodoist /> },
];

// export const fetchUsers = async () => {
//   try {
//     await connectToDb();
//     const users = await User.find();
//     return users;
//   } catch (error) {
//     throw new Error("Failed to fetch users");
//   }
// };

// export const login = async (credentials) => {
//   try {
//     connectToDb();
//     const user = await User.findOne({ email: credentials.email });

//     console.log(user);

//     if (!user) throw new Error("Invalid email!");

//     const isCorrect = await bcrypt.compare(credentials.password, user.password);
//     if (!isCorrect) throw new Error("Invalid Password!");

//     return user;
//   } catch (err) {
//     console.log(err);
//   }
// };
