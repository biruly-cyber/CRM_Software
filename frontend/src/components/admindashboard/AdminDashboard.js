import React from "react";
import SideBar from "../common_component/SideBar";

const AdminDashboard = () => {
  return (
    <div className="w-full h-100vh flex flex-row ">
      <SideBar />
      <div className="w-full ">
        <div className="h-[4rem] bg-slate-500">
          {/* company logo div  */}
          <div className="h-full ">YOUR LOGO</div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
