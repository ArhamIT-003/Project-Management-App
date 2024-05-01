import React from "react";
import { register } from "../lib/action";

const SignupForm = () => {
  const input = "p-2 rounded-md outline placeholder:text-xs outline-none";

  return (
    <form action={register}>
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="font-bold">
          Username
        </label>
        <input
          id="name"
          name="name"
          type="name"
          className={input}
          placeholder="user"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="font-bold">
          Email
        </label>
        <input
          id="email"
          type="email"
          className={input}
          placeholder="user@email.com"
          name="email"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="password" className="font-bold">
          Password
        </label>
        <input
          id="password"
          type="password"
          className={input}
          placeholder="******"
          name="password"
        />
      </div>

      <div className="w-full my-4">
        <select className={`${input} w-full`} name="role">
          <option>Role</option>
          <option value={"admin"}>Admin</option>
          <option value={"developer"}>Software developer</option>
          <option value={"pm"}>Project Manager</option>
          <option value={"Q/A"}>Q/A</option>
        </select>
      </div>
      <button className=" w-full text-lg font-semibold text-white bg-teal-700 px-4 py-2 rounded-lg">
        Sign-Up
      </button>
    </form>
  );
};

export default SignupForm;
