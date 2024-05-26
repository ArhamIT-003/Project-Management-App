import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { User } from "./app/lib/models/User";
import { connectToDb } from "./app/lib/utlis";
import bcrypt from "bcryptjs";
import { authConfig } from "./auth.config";

const login = async (credentials) => {
  try {
    connectToDb();
    const user = await User.findOne({ email: credentials.email });

    if (!user) throw new Error("Wrong email!");

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );

    if (!isPasswordCorrect) throw new Error("Wrong password!");

    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to login!");
  }
};

export const { auth, handlers, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      name: "credentials",
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          console.log(user._doc);

          return user._doc;
        } catch (error) {
          console.log(error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.username = user.username;
        token.email = user.email;
        token.id = user.id;
      }

      console.log("This is a token", token);
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.username = token.username;
        session.email = token.email;
        session.id = token.id;
      }
      return session;
    },

    ...authConfig.callbacks,
  },
});
