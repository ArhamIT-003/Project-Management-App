import NextAuth from "next-auth";
import { authConfig } from "./auth.config.js";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "./lib/models/User.js";
import bcrypt from "bcryptjs";
import { connectToDb } from "./lib/utlis.js";

export const login = async (credentials) => {
  try {
    connectToDb();
    const user = await User.findOne({ email: credentials.email });

    console.log(user);

    if (!user) {
      return "Wrong email";
    }

    const verifyPass = await bcrypt.compare(
      credentials.password,
      user.password
    );
    if (!verifyPass) {
      return "Wrong password";
    }

    return user;
  } catch (error) {
    throw new Error(error);
  }
};

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          console.log(user);
          return user;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  secret: process.env.AUTH_SECRET,
});
