import React from "react";
import { Outlet } from "react-router-dom";
import { Nav_Sidebar } from "../common_component/Nav_Sidebar";
import Header from "../header/Header";

const Admin_Dashboard = () => {
  return (
    <div>
      {/* header  */}

      <div className=" bg-slate-900 ">
        <Header />
      </div>
      {/* header end  */}
      <div className="flex">
        {/* sidenavbar  */}
        <div className="w-96 bg-blue-200 h-screen">
          <Nav_Sidebar />
        </div>
        {/* sidenavbar end */}
        {/* content or oulet  */}
        <div className="w-full">
          <Outlet />
        </div>
        {/* content or oulet end  */}
      </div>
    </div>
  );
};

export default Admin_Dashboard;
