import React from "react";

const SideBar = () => {
  return (
    <div className="flex items-center flex-col w-[25rem] bg-slate-900 h-[100vh] ">
      <div className="mx-auto w-[8rem] h-[8rem] rounded-full mt-[2.5rem] bg-white">
        img
      </div>
      <div className="mx-auto font-bold mt-4 text-3xl text-white">{} Admin</div>

      <div className="w-[15rem] mx-auto h-1 bg-white mt-4"></div>

      <div className="flex flex-row mt-6 bg-slate-400 ">
        <img></img>
        <span className="w-[25rem] h-[2.5rem] text-white pt-1 text-bold text-2xl">
          Dashboard
        </span>
      </div>
      <div className="flex flex-row mt-2">
        <img></img>
        <span className="w-[20rem] h-[2.5rem]  text-white pt-1 text-bold text-2xl ">
          Employees
        </span>
      </div>
      <div className="flex flex-row mt-2">
        <img></img>
        <span className="w-[20rem] h-[2.5rem]  text-white pt-1 text-bold text-2xl">
          New Project
        </span>
      </div>
      <div className="flex flex-row mt-2">
        <img></img>
        <span className="w-[20rem] h-[2.5rem]  text-white pt-2 text-bold text-2xl">
          Projects
        </span>
      </div>
      <div className="flex flex-row mt-2">
        <img></img>
        <span className="w-[20rem] h-[2.5rem]  text-white pt-2 text-bold text-2xl">
          Reports
        </span>
      </div>
    </div>
  );
};

export default SideBar;
