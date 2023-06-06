import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const store = useSelector((store) => store.user);
  const { sessionBool } = store;
  return sessionBool ? <Outlet /> : <Navigate to="/auth/login" />;
};

export default PrivateRoute;
