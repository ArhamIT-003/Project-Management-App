import React from "react";

const AddPage = () => {
  const input = "p-5 border border-[#102C57] rounded-md outline-none";
  const inputWidth = "w-[45%] outline-none";
  return (
    <div className="mt-5 rounded-xl p-5">
      <h2 className="max-w-fit border border-gray-600 rounded-lg text-4xl font-bold text-[#102C57] mb-4 px-8 py-4 bg-sky-100">
        Add User
      </h2>
      <form action="" className="flex justify-between gap-5 flex-wrap">
        <input
          type="text"
          placeholder="Username"
          name="username"
          className={`${input} ${inputWidth}`}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          className={`${input} ${inputWidth}`}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className={`${input} ${inputWidth}`}
        />
        <input
          type="text"
          placeholder="Company Name"
          name="company"
          className={`${input} ${inputWidth}`}
        />
        <select className={`${input} ${inputWidth}`}>
          <option>Role</option>
          <option value={"admin"}>Admin</option>
          <option value={"developer"}>Software developer</option>
          <option value={"pm"}>Project Manager</option>
          <option value={"Q/A"}>Q/A</option>
        </select>
        <select
          name="isActive"
          id="isActive"
          className={`${input} ${inputWidth}`}
        >
          <option value={true}>isActive</option>
          <option value={false}>No</option>
          <option value={true}>Yes</option>
        </select>
        <textarea
          name="address"
          id="address"
          rows="16"
          placeholder="Address"
          className="w-full h-20 p-5 border border-[#102C57] rounded-md"
        ></textarea>
        <button
          type="submit"
          className="w-full p-5 border-none rounded-md bg-[#102C57] text-[#FEFAF6] font-bold cursor-pointer outline-none"
        >
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddPage;
