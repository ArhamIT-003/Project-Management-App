import Link from "next/link";
import { MdLogin } from "react-icons/md";
import React from "react";
import LoginForm from "../ui/Login-Form";

const LoginPage = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-white">
      <div className="bg-orange-300 px-32 py-16 flex flex-col gap-8 rounded-lg shadow-xl">
        <span className="m-auto">
          <MdLogin size={70} />
        </span>

        <h2 className="text-4xl font-bold antialiased">
          Login into your account
        </h2>
        <p>
          Don&apos;t have an account yet?{" "}
          <Link href={"/auth/signup"} className="text-blue-600 underline">
            Sign-Up
          </Link>
        </p>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
