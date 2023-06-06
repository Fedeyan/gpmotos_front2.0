import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ log }) => {
  return log ? <Outlet /> : <Navigate to="/auth/login" />;
};

export default PrivateRoute;
