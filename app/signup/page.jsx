import Link from "next/link";
import React from "react";
import { SiGnuprivacyguard } from "react-icons/si";
import SignupForm from "../ui/Signup-Form";

const SignUpPage = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-white">
      <div className="bg-orange-300 px-32 py-10 flex flex-col gap-6 rounded-lg shadow-xl">
        <span className="m-auto">
          <SiGnuprivacyguard size={70} />
        </span>
        <h2 className="text-4xl font-bold antialiased">
          Sign-up for your account
        </h2>
        <p className="text-center">
          Do you have an account?{" "}
          <Link href={"/login"} className="text-blue-600 underline">
            Login
          </Link>
        </p>
        <SignupForm />
      </div>
    </div>
  );
};

export default SignUpPage;
