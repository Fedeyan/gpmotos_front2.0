import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const AdminPrivateRoutes = () => {
  const store = useSelector((store) => store.user);
  const { userdata } = store;
  return userdata.Userdata?.role === "admin"?<Outlet/>:<div>Sin privilegios</div>
};

export default AdminPrivateRoutes;
