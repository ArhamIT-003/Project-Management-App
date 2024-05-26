"use client";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const SignupForm = () => {
  const input = "p-2 rounded-md outline placeholder:text-xs outline-none";

  const router = useRouter();

  const [registerData, setRegisterData] = React.useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (
      !registerData.username ||
      !registerData.email ||
      !registerData.password
    ) {
      throw new Error("All credientials should be added!");
    }
    try {
      const { data } = await axios.post("/api/register", registerData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      router.push("/login");
      console.log(data.message);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="flex flex-col gap-1 mb-2">
        <label htmlFor="name" className="font-bold">
          Username
        </label>
        <input
          id="name"
          name="username"
          type="text"
          className={input}
          placeholder="username"
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-1 mb-2">
        <label htmlFor="email" className="font-bold">
          Email
        </label>
        <input
          id="email"
          type="email"
          className={input}
          placeholder="user@email.com"
          name="email"
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col gap-1 mb-2">
        <label htmlFor="password" className="font-bold">
          Password
        </label>
        <input
          id="password"
          type="password"
          className={input}
          placeholder="******"
          name="password"
          onChange={handleChange}
        />
      </div>

      {/*<div className="w-full my-4">
        <select className={`${input} w-full`} name="role">
          <option>Role</option>
          <option value={"admin"}>Admin</option>
          <option value={"developer"}>Software developer</option>
          <option value={"pm"}>Project Manager</option>
          <option value={"Q/A"}>Q/A</option>
        </select>
  </div>*/}
      <button
        type="submit"
        className=" w-full text-lg font-semibold text-white bg-teal-700 px-4 py-2 rounded-lg"
      >
        Sign-Up
      </button>
    </form>
  );
};

export default SignupForm;
