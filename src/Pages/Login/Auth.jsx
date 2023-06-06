import React from "react";
import { useLocation } from "react-router-dom";
import RegisterForm from "../../Components/forms/RegisterForm";
import LoginForm from "../../Components/forms/LoginForm";

const Auth = () => {
  const path = useLocation().pathname;
  return path.includes("register") ? <RegisterForm /> : <LoginForm />;
};

export default Auth;
