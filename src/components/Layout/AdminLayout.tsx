import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const AdminLayout = () => {
  return (
    <div className="flex">
      <div className="bg-red-600 flex-[1]">
        <SideBar />
      </div>
      <div className="flex-[5]">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
