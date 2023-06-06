import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import RegisterForm from "../../Components/forms/RegisterForm";
import LoginForm from "../../Components/forms/LoginForm";
import { useSelector } from "react-redux";

const Auth = () => {
  const store = useSelector((store) => store.user);
  const { sessionBool } = store;
  const path = useLocation().pathname;

  if (sessionBool === true) return <Navigate to={"/"} />;
  return path.includes("register") ? <RegisterForm /> : <LoginForm />;
};

export default Auth;
