import { Navigate, Outlet } from "react-router-dom";

const AuthHandler = ({ log }) => {
  if (log === true) return <Navigate to={"/"} />;
  return <Outlet />;
};

export default AuthHandler;
