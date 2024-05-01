import { signIn } from "../auth";
import User from "./models/User";
import { connectToDb } from "./utlis";
import bcrypt from "bcrypt";

export const register = async (formData) => {
  "use server";
  const { name, email, password, role } = Object.fromEntries(formData);
  console.log(name, email, password, role);
  try {
    connectToDb();
    // const user = User.findOne({ email: email });
    // if (user) {
    //   return "User already exists";
    // }
    const newUser = await User({
      name,
      email,
      password: await bcrypt.hash(password, 10),
      role,
    });
    await newUser.save();
    console.log("Sign-up successful");
  } catch (error) {
    console.log(error);
  }
};

export const login = async (formData) => {
  "use server";
  const { email, password } = Object.fromEntries(formData);
  try {
    await signIn("credentials", { email, password });
    console.log("Done");
  } catch (error) {
    console.log(error);
  }
};
